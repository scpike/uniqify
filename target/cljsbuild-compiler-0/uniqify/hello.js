// Compiled by ClojureScript 0.0-2156
goog.provide('uniqify.hello');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('reagent.core');
uniqify.hello.timer = reagent.core.atom.call(null,(new Date()));
uniqify.hello.time_color = reagent.core.atom.call(null,"#f34");
uniqify.hello.update_time = (function update_time(time){return setTimeout((function (){return cljs.core.reset_BANG_.call(null,time,(new Date()));
}),100);
});
uniqify.hello.greeting = (function greeting(message){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),message], null);
});
uniqify.hello.clock = (function clock(){uniqify.hello.update_time.call(null,uniqify.hello.timer);
var time_str = cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.deref.call(null,uniqify.hello.timer).toTimeString()," "));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-clock","div.example-clock",1236511424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),cljs.core.deref.call(null,uniqify.hello.time_color)], null)], null),time_str], null);
});
uniqify.hello.color_input = (function color_input(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-input","div.color-input",1166221941),"Time color: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"value","value",1125876963),cljs.core.deref.call(null,uniqify.hello.time_color),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (p1__4916_SHARP_){return cljs.core.reset_BANG_.call(null,uniqify.hello.time_color,p1__4916_SHARP_.target.value);
})], null)], null)], null);
});
uniqify.hello.simple_example = (function simple_example(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uniqify.hello.greeting,"Hello world, it is now"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uniqify.hello.clock], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uniqify.hello.color_input], null)], null);
});
uniqify.hello.run = (function run(){return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uniqify.hello.simple_example], null),document.body);
});
goog.exportSymbol('uniqify.hello.run', uniqify.hello.run);
