(ns uniqify.core
  (:use [clojure.string :only (split join blank?)])
  (:require [reagent.core :as reagent :refer [atom]]))

(def input (atom ""))

(defn lines [text] (remove blank? (split text #"\n+")))

(defn text-input []
  [:div.text-input.padded.left
   [:h2 "Input"]
   [:textarea {:value @input
               :rows 75
               :cols 50
               :on-change #(reset! input (-> % .-target .-value))}]])

(defn uniq-output []
  [:div.text-output.padded.left
   [:h2 "Uniq"]
   [:textarea
    {:rows 75
     :cols 40
     :value (join "\n" (sort (map str (into #{} (lines @input)))))
     }]])

(defn uniqifier []
  [:div
   [:div
    [text-input]
    [uniq-output]]])

(defn ^:export run []
  (reagent/render-component [uniqifier]
                            (.getElementById js/document "mount-point")))
