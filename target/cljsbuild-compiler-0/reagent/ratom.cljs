(ns reagent.ratom
  (:refer-clojure :exclude [atom])
  (:require-macros [reagent.debug :refer (dbg)]))

(declare ^:dynamic *ratom-context*)

(def -running (clojure.core/atom 0))

(defn running [] @-running)

(defn- capture-derefed [f]
  ;; TODO: Get rid of allocation.
  (binding [*ratom-context* (clojure.core/atom #{})]
    [(f) @*ratom-context*]))

(defn- notify-deref-watcher! [derefable]
  (when-not (nil? *ratom-context*)
    (swap! *ratom-context* conj derefable)))

(deftype RAtom [state meta validator watches]
  IEquiv
  (-equiv [o other] (identical? o other))

  IDeref
  (-deref [this]
    (notify-deref-watcher! this)
    state)

  IMeta
  (-meta [_] meta)

  IPrintWithWriter
  (-pr-writer [a writer opts]
    (-write writer "#<Atom: ")
    (pr-writer state writer opts)
    (-write writer ">"))

  IWatchable
  (-notify-watches [this oldval newval]
    (reduce-kv (fn [_ key f]
                 (f key this oldval newval)
                 nil)
               nil watches))
  (-add-watch [this key f]
    (set! (.-watches this) (assoc watches key f)))
  (-remove-watch [this key]
    (set! (.-watches this) (dissoc watches key)))

  IHash
  (-hash [this] (goog/getUid this)))

(defn atom
  "Like clojure.core/atom, except that it keeps track of derefs."
  ([x] (RAtom. x nil nil nil))
  ([x & {:keys [meta validator]}] (RAtom. x meta validator nil)))


(defprotocol IDisposable
  (dispose! [this]))

(defprotocol IRunnable
  (run [this]))

(defprotocol IComputedImpl
  (-update-watching [this derefed])
  (-handle-change [k sender oldval newval]))

(defn- call-watches [obs watches oldval newval]
  (reduce-kv (fn [_ key f]
               (f key obs oldval newval)
               nil)
             nil watches))

(deftype Reaction [f ^:mutable state ^:mutable dirty? ^:mutable active?
                       ^:mutable watching ^:mutable watches
                       auto-run on-set on-dispose]
  IWatchable
  (-notify-watches [this oldval newval]
    (when on-set
      (on-set oldval newval))
    (call-watches this watches oldval newval))

  (-add-watch [this k wf]
    (set! watches (assoc watches k wf)))

  (-remove-watch [this k]
    (set! watches (dissoc watches k))
    (when (empty? watches)
      (dispose! this)))

  IComputedImpl
  (-handle-change [this sender oldval newval]
    (when (and active? (not dirty?) (not (identical? oldval newval)))
      (set! dirty? true)
      ((or auto-run run) this)))

  (-update-watching [this derefed]
    (doseq [w derefed]
      (when-not (contains? watching w)
        (add-watch w this -handle-change)))
    (doseq [w watching]
      (when-not (contains? derefed w)
        (remove-watch w this)))
    (set! watching derefed))

  IRunnable
  (run [this]
    (let [oldstate state
          [res derefed] (capture-derefed f)]
      (when (not= derefed watching)
        (-update-watching this derefed))
      (when-not active?
        (swap! -running inc)
        (set! active? true))
      (set! dirty? false)
      (set! state res)
      (call-watches this watches oldstate state)
      res))

  IDeref
  (-deref [this]
    ;; TODO: relax this?
    (when (not (or auto-run *ratom-context*))
      (dbg [auto-run *ratom-context*]))
    (assert (or auto-run *ratom-context*)
            "Reaction derefed outside auto-running context")
    (notify-deref-watcher! this)
    (if dirty?
      (run this)
      state))

  IDisposable
  (dispose! [this]
    (doseq [w watching]
      (remove-watch w this))
    (set! watching #{})
    (set! state nil)
    (set! dirty? true)
    (when active?
      (swap! -running dec)
      (set! active? false))
    (when on-dispose
      (on-dispose)))

  IEquiv
  (-equiv [o other] (identical? o other))

  IPrintWithWriter
  (-pr-writer [this writer opts]
    (-write writer (str "#<Reaction " (hash this) ": "))
    (pr-writer state writer opts)
    (-write writer ">"))

  IHash
  (-hash [this] (goog/getUid this)))

(defn make-reaction [f & {:keys [auto-run on-set on-dispose]}]
  (let [runner (if (= auto-run true) run auto-run)]
    (Reaction. f nil true false
               #{} {}
               runner on-set on-dispose)))
