(defproject uniqify "0.1.0"
  :description "Uniqify things!"
  :source-paths ["src-clj"]
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2156"]
                 [compojure "1.1.6"]
                 [reagent "0.3.0"]
                 [hiccup "1.0.4"]]
  :plugins [[lein-cljsbuild "1.0.2"]
            [lein-ring "0.8.7"]]
  :cljsbuild {
    :builds [{:source-paths ["src-cljs"]
              :compiler {:output-to "/Users/scpike/dev/scpike.com/js/cljs-uniq/uniqify.js"
                         :optimizations :whitespace
                         :preamble ["reagent/react.js"]
                         :pretty-print true}}]}
  :ring {:handler uniqify.routes/app})
