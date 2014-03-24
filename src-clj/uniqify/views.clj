(ns uniqify.views
  (:require
   [hiccup
    [page :refer [html5]]
    [page :refer [include-js]]
    [page :refer [include-css]]]))

(defn index-page []
  (html5
   [:head
    [:title "Uniqify"]
    (include-css "/css/style.css")
    (include-js "/js/uniqify.js")]
   [:body
    [:div.container {:id "mount-point"}]
    [:script { :type "text/javascript" }
     "uniqify.core.run();"]]))
