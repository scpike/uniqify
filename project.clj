(defproject uniqify "0.1.0"
  :description "Uniqify things!"
  :source-paths ["src-clj"]
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.145"]
                 [compojure "1.1.6"]
                 [reagent "0.3.0"]
                 [hiccup "1.0.4"]]
  :plugins [[lein-cljsbuild "1.1.0"]
            [lein-ring "0.8.7"]]
  :cljsbuild {
    :builds {
             :dev
             {:source-paths ["src-cljs"]
              :compiler {:output-to "resources/public/js/uniqify.js"
                         :optimizations :whitespace
                         :preamble ["reagent/react.js"]
                         :pretty-print true}}
             :prod
             {:source-paths ["src-cljs"]
              :compiler {:output-to "/Users/scpike/dev/scpike.com/js/cljs-uniq/uniqify.js"
                         :optimizations :advanced
                         :preamble ["reagent/react.js"]
                         :pretty-print false}}}}
  :ring {:handler uniqify.routes/app})
