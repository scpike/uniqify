// Compiled by ClojureScript 0.0-2156
goog.provide('uniqify.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('clojure.string');
uniqify.core.input = reagent.core.atom.call(null,"");
uniqify.core.lines = (function lines(text){return cljs.core.remove.call(null,clojure.string.blank_QMARK_,clojure.string.split.call(null,text,/\n+/));
});
uniqify.core.text_input = (function text_input(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-input.box.left","div.text-input.box.left",3320304419),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),[cljs.core.str("Input ("),cljs.core.str(cljs.core.count.call(null,uniqify.core.lines.call(null,cljs.core.deref.call(null,uniqify.core.input)))),cljs.core.str(" lines)")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),cljs.core.deref.call(null,uniqify.core.input),new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),"90%",new cljs.core.Keyword(null,"height","height",4087841945),"700px"], null),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (p1__4925_SHARP_){return cljs.core.reset_BANG_.call(null,uniqify.core.input,p1__4925_SHARP_.target.value);
})], null)], null)], null);
});
uniqify.core.uniq_output = (function uniq_output(){var sorted = cljs.core.sort.call(null,cljs.core.map.call(null,cljs.core.str,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,uniqify.core.lines.call(null,cljs.core.deref.call(null,uniqify.core.input)))));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-output.box.left","div.text-output.box.left",1497807014),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),[cljs.core.str("Uniq ("),cljs.core.str(cljs.core.count.call(null,sorted)),cljs.core.str(" lines)")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),"90%",new cljs.core.Keyword(null,"height","height",4087841945),"700px"], null),new cljs.core.Keyword(null,"value","value",1125876963),clojure.string.join.call(null,"\n",sorted)], null)], null)], null);
});
uniqify.core.uniqifier = (function uniqifier(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uniqify.core.text_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uniqify.core.uniq_output], null)], null)], null);
});
uniqify.core.run = (function run(){return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uniqify.core.uniqifier], null),document.getElementById("mount-point"));
});
goog.exportSymbol('uniqify.core.run', uniqify.core.run);
