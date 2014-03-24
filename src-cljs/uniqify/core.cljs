(ns uniqify.core
  (:use [clojure.string :only (split join blank?)])
  (:require [reagent.core :as reagent :refer [atom]]))

(def input (atom ""))

(defn lines [text] (remove blank? (split text #"\n+")))

(defn text-input []
  [:div.text-input.box.left
   [:h2 (str "Input (" (count (lines @input)) " lines)")]
   [:textarea {:value @input
               :style { :width "90%" :height "700px" }
               :on-change #(reset! input (-> % .-target .-value))}]])

(defn uniq-output []
  (let [sorted (sort (map str (into #{} (lines @input))))]
    [:div.text-output.box.left
     [:h2 (str "Uniq (" (count sorted) " lines)")]
      [:textarea
       {:style { :width "90%" :height "700px" }
        :value (join "\n" sorted)
        }]]))

(defn uniqifier []
  [:div
   [:div
    [text-input]
    [uniq-output]]])

(defn ^:export run []
  (reagent/render-component [uniqifier]
                            (.getElementById js/document "mount-point")))
