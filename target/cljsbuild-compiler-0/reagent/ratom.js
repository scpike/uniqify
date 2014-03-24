// Compiled by ClojureScript 0.0-2156
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom._running = cljs.core.atom.call(null,0);
reagent.ratom.running = (function running(){return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f){var _STAR_ratom_context_STAR_5964 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),cljs.core.deref.call(null,reagent.ratom._STAR_ratom_context_STAR_)], null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_5964;
}});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){if((reagent.ratom._STAR_ratom_context_STAR_ == null))
{return null;
} else
{return cljs.core.swap_BANG_.call(null,reagent.ratom._STAR_ratom_context_STAR_,cljs.core.conj,derefable);
}
});

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
reagent.ratom.RAtom.cljs$lang$type = true;
reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";
reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"reagent.ratom/RAtom");
});
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core.reduce_kv.call(null,(function (_,key,f){f.call(null,key,this$__$1,oldval,newval);
return null;
}),null,self__.watches);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
return self__.state;
});
reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){return (new reagent.ratom.RAtom(state,meta,validator,watches));
});
/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__5968__delegate = function (x,p__5965){var map__5967 = p__5965;var map__5967__$1 = ((cljs.core.seq_QMARK_.call(null,map__5967))?cljs.core.apply.call(null,cljs.core.hash_map,map__5967):map__5967);var validator = cljs.core.get.call(null,map__5967__$1,new cljs.core.Keyword(null,"validator","validator",4199087812));var meta = cljs.core.get.call(null,map__5967__$1,new cljs.core.Keyword(null,"meta","meta",1017252215));return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__5968 = function (x,var_args){
var p__5965 = null;if (arguments.length > 1) {
  p__5965 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__5968__delegate.call(this,x,p__5965);};
G__5968.cljs$lang$maxFixedArity = 1;
G__5968.cljs$lang$applyTo = (function (arglist__5969){
var x = cljs.core.first(arglist__5969);
var p__5965 = cljs.core.rest(arglist__5969);
return G__5968__delegate(x,p__5965);
});
G__5968.cljs$core$IFn$_invoke$arity$variadic = G__5968__delegate;
return G__5968;
})()
;
atom = function(x,var_args){
var p__5965 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
reagent.ratom.IDisposable = (function (){var obj5971 = {};return obj5971;
})();
reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){if((function (){var and__3389__auto__ = this$;if(and__3389__auto__)
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else
{return and__3389__auto__;
}
})())
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else
{var x__4028__auto__ = (((this$ == null))?null:this$);return (function (){var or__3401__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4028__auto__)]);if(or__3401__auto__)
{return or__3401__auto__;
} else
{var or__3401__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);if(or__3401__auto____$1)
{return or__3401__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IRunnable = (function (){var obj5973 = {};return obj5973;
})();
reagent.ratom.run = (function run(this$){if((function (){var and__3389__auto__ = this$;if(and__3389__auto__)
{return this$.reagent$ratom$IRunnable$run$arity$1;
} else
{return and__3389__auto__;
}
})())
{return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else
{var x__4028__auto__ = (((this$ == null))?null:this$);return (function (){var or__3401__auto__ = (reagent.ratom.run[goog.typeOf(x__4028__auto__)]);if(or__3401__auto__)
{return or__3401__auto__;
} else
{var or__3401__auto____$1 = (reagent.ratom.run["_"]);if(or__3401__auto____$1)
{return or__3401__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IComputedImpl = (function (){var obj5975 = {};return obj5975;
})();
reagent.ratom._update_watching = (function _update_watching(this$,derefed){if((function (){var and__3389__auto__ = this$;if(and__3389__auto__)
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else
{return and__3389__auto__;
}
})())
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else
{var x__4028__auto__ = (((this$ == null))?null:this$);return (function (){var or__3401__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__4028__auto__)]);if(or__3401__auto__)
{return or__3401__auto__;
} else
{var or__3401__auto____$1 = (reagent.ratom._update_watching["_"]);if(or__3401__auto____$1)
{return or__3401__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});
reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){if((function (){var and__3389__auto__ = k;if(and__3389__auto__)
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else
{return and__3389__auto__;
}
})())
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else
{var x__4028__auto__ = (((k == null))?null:k);return (function (){var or__3401__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__4028__auto__)]);if(or__3401__auto__)
{return or__3401__auto__;
} else
{var or__3401__auto____$1 = (reagent.ratom._handle_change["_"]);if(or__3401__auto____$1)
{return or__3401__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});
reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){return cljs.core.reduce_kv.call(null,(function (_,key,f){f.call(null,key,obs,oldval,newval);
return null;
}),null,watches);
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
reagent.ratom.Reaction.cljs$lang$type = true;
reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";
reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"reagent.ratom/Reaction");
});
reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__5976_5989 = cljs.core.seq.call(null,self__.watching);var chunk__5977_5990 = null;var count__5978_5991 = 0;var i__5979_5992 = 0;while(true){
if((i__5979_5992 < count__5978_5991))
{var w_5993 = cljs.core._nth.call(null,chunk__5977_5990,i__5979_5992);cljs.core.remove_watch.call(null,w_5993,this$__$1);
{
var G__5994 = seq__5976_5989;
var G__5995 = chunk__5977_5990;
var G__5996 = count__5978_5991;
var G__5997 = (i__5979_5992 + 1);
seq__5976_5989 = G__5994;
chunk__5977_5990 = G__5995;
count__5978_5991 = G__5996;
i__5979_5992 = G__5997;
continue;
}
} else
{var temp__4092__auto___5998 = cljs.core.seq.call(null,seq__5976_5989);if(temp__4092__auto___5998)
{var seq__5976_5999__$1 = temp__4092__auto___5998;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5976_5999__$1))
{var c__4149__auto___6000 = cljs.core.chunk_first.call(null,seq__5976_5999__$1);{
var G__6001 = cljs.core.chunk_rest.call(null,seq__5976_5999__$1);
var G__6002 = c__4149__auto___6000;
var G__6003 = cljs.core.count.call(null,c__4149__auto___6000);
var G__6004 = 0;
seq__5976_5989 = G__6001;
chunk__5977_5990 = G__6002;
count__5978_5991 = G__6003;
i__5979_5992 = G__6004;
continue;
}
} else
{var w_6005 = cljs.core.first.call(null,seq__5976_5999__$1);cljs.core.remove_watch.call(null,w_6005,this$__$1);
{
var G__6006 = cljs.core.next.call(null,seq__5976_5999__$1);
var G__6007 = null;
var G__6008 = 0;
var G__6009 = 0;
seq__5976_5989 = G__6006;
chunk__5977_5990 = G__6007;
count__5978_5991 = G__6008;
i__5979_5992 = G__6009;
continue;
}
}
} else
{}
}
break;
}
self__.watching = cljs.core.PersistentHashSet.EMPTY;
self__.state = null;
self__.dirty_QMARK_ = true;
if(cljs.core.truth_(self__.active_QMARK_))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
self__.active_QMARK_ = false;
} else
{}
if(cljs.core.truth_(self__.on_dispose))
{return self__.on_dispose.call(null);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.not.call(null,(function (){var or__3401__auto__ = self__.auto_run;if(cljs.core.truth_(or__3401__auto__))
{return or__3401__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{var x__4776__auto___6010 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);if(!((console.log == null)))
{console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(124),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,x__4776__auto___6010))].join(''))].join(''));
} else
{}
} else
{}
if(cljs.core.truth_((function (){var or__3401__auto__ = self__.auto_run;if(cljs.core.truth_(or__3401__auto__))
{return or__3401__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction derefed outside auto-running context"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),new cljs.core.Symbol(null,"auto-run","auto-run",-202959066,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",1304741512,null))))].join('')));
}
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
if(cljs.core.truth_(self__.dirty_QMARK_))
{return reagent.ratom.run.call(null,this$__$1);
} else
{return self__.state;
}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var oldstate = self__.state;var vec__5980 = reagent.ratom.capture_derefed.call(null,self__.f);var res = cljs.core.nth.call(null,vec__5980,0,null);var derefed = cljs.core.nth.call(null,vec__5980,1,null);if(cljs.core.not_EQ_.call(null,derefed,self__.watching))
{reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else
{}
if(cljs.core.truth_(self__.active_QMARK_))
{} else
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
self__.active_QMARK_ = true;
}
self__.dirty_QMARK_ = false;
self__.state = res;
reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldstate,self__.state);
return res;
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var and__3389__auto__ = self__.active_QMARK_;if(cljs.core.truth_(and__3389__auto__))
{return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else
{return and__3389__auto__;
}
})()))
{self__.dirty_QMARK_ = true;
return (function (){var or__3401__auto__ = self__.auto_run;if(cljs.core.truth_(or__3401__auto__))
{return or__3401__auto__;
} else
{return reagent.ratom.run;
}
})().call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){var self__ = this;
var this$__$1 = this;var seq__5981_6011 = cljs.core.seq.call(null,derefed);var chunk__5982_6012 = null;var count__5983_6013 = 0;var i__5984_6014 = 0;while(true){
if((i__5984_6014 < count__5983_6013))
{var w_6015 = cljs.core._nth.call(null,chunk__5982_6012,i__5984_6014);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_6015))
{} else
{cljs.core.add_watch.call(null,w_6015,this$__$1,reagent.ratom._handle_change);
}
{
var G__6016 = seq__5981_6011;
var G__6017 = chunk__5982_6012;
var G__6018 = count__5983_6013;
var G__6019 = (i__5984_6014 + 1);
seq__5981_6011 = G__6016;
chunk__5982_6012 = G__6017;
count__5983_6013 = G__6018;
i__5984_6014 = G__6019;
continue;
}
} else
{var temp__4092__auto___6020 = cljs.core.seq.call(null,seq__5981_6011);if(temp__4092__auto___6020)
{var seq__5981_6021__$1 = temp__4092__auto___6020;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5981_6021__$1))
{var c__4149__auto___6022 = cljs.core.chunk_first.call(null,seq__5981_6021__$1);{
var G__6023 = cljs.core.chunk_rest.call(null,seq__5981_6021__$1);
var G__6024 = c__4149__auto___6022;
var G__6025 = cljs.core.count.call(null,c__4149__auto___6022);
var G__6026 = 0;
seq__5981_6011 = G__6023;
chunk__5982_6012 = G__6024;
count__5983_6013 = G__6025;
i__5984_6014 = G__6026;
continue;
}
} else
{var w_6027 = cljs.core.first.call(null,seq__5981_6021__$1);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_6027))
{} else
{cljs.core.add_watch.call(null,w_6027,this$__$1,reagent.ratom._handle_change);
}
{
var G__6028 = cljs.core.next.call(null,seq__5981_6021__$1);
var G__6029 = null;
var G__6030 = 0;
var G__6031 = 0;
seq__5981_6011 = G__6028;
chunk__5982_6012 = G__6029;
count__5983_6013 = G__6030;
i__5984_6014 = G__6031;
continue;
}
}
} else
{}
}
break;
}
var seq__5985_6032 = cljs.core.seq.call(null,self__.watching);var chunk__5986_6033 = null;var count__5987_6034 = 0;var i__5988_6035 = 0;while(true){
if((i__5988_6035 < count__5987_6034))
{var w_6036 = cljs.core._nth.call(null,chunk__5986_6033,i__5988_6035);if(cljs.core.contains_QMARK_.call(null,derefed,w_6036))
{} else
{cljs.core.remove_watch.call(null,w_6036,this$__$1);
}
{
var G__6037 = seq__5985_6032;
var G__6038 = chunk__5986_6033;
var G__6039 = count__5987_6034;
var G__6040 = (i__5988_6035 + 1);
seq__5985_6032 = G__6037;
chunk__5986_6033 = G__6038;
count__5987_6034 = G__6039;
i__5988_6035 = G__6040;
continue;
}
} else
{var temp__4092__auto___6041 = cljs.core.seq.call(null,seq__5985_6032);if(temp__4092__auto___6041)
{var seq__5985_6042__$1 = temp__4092__auto___6041;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5985_6042__$1))
{var c__4149__auto___6043 = cljs.core.chunk_first.call(null,seq__5985_6042__$1);{
var G__6044 = cljs.core.chunk_rest.call(null,seq__5985_6042__$1);
var G__6045 = c__4149__auto___6043;
var G__6046 = cljs.core.count.call(null,c__4149__auto___6043);
var G__6047 = 0;
seq__5985_6032 = G__6044;
chunk__5986_6033 = G__6045;
count__5987_6034 = G__6046;
i__5988_6035 = G__6047;
continue;
}
} else
{var w_6048 = cljs.core.first.call(null,seq__5985_6042__$1);if(cljs.core.contains_QMARK_.call(null,derefed,w_6048))
{} else
{cljs.core.remove_watch.call(null,w_6048,this$__$1);
}
{
var G__6049 = cljs.core.next.call(null,seq__5985_6042__$1);
var G__6050 = null;
var G__6051 = 0;
var G__6052 = 0;
seq__5985_6032 = G__6049;
chunk__5986_6033 = G__6050;
count__5987_6034 = G__6051;
i__5988_6035 = G__6052;
continue;
}
}
} else
{}
}
break;
}
return self__.watching = derefed;
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.on_set))
{self__.on_set.call(null,oldval,newval);
} else
{}
return reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldval,newval);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;self__.watches = cljs.core.dissoc.call(null,self__.watches,k);
if(cljs.core.empty_QMARK_.call(null,self__.watches))
{return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});
/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__6053){var map__6055 = p__6053;var map__6055__$1 = ((cljs.core.seq_QMARK_.call(null,map__6055))?cljs.core.apply.call(null,cljs.core.hash_map,map__6055):map__6055);var on_dispose = cljs.core.get.call(null,map__6055__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2213067683));var on_set = cljs.core.get.call(null,map__6055__$1,new cljs.core.Keyword(null,"on-set","on-set",4294781670));var auto_run = cljs.core.get.call(null,map__6055__$1,new cljs.core.Keyword(null,"auto-run","auto-run",2451476703));var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);return (new reagent.ratom.Reaction(f,null,true,false,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));
};
var make_reaction = function (f,var_args){
var p__6053 = null;if (arguments.length > 1) {
  p__6053 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__6053);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__6056){
var f = cljs.core.first(arglist__6056);
var p__6053 = cljs.core.rest(arglist__6056);
return make_reaction__delegate(f,p__6053);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;
