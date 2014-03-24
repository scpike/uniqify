// Compiled by ClojureScript 0.0-2156
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('reagent.debug');

/**
* @constructor
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
})
reagent.impl.util.partial_ifn.cljs$lang$type = true;
reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";
reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"reagent.impl.util/partial-ifn");
});
reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});
reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;return (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args));
});
reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__6058__delegate = function (self__,a){var self____$1 = this;var _ = self____$1;var or__3401__auto___6059 = self__.p;if(cljs.core.truth_(or__3401__auto___6059))
{} else
{self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}
return cljs.core.apply.call(null,self__.p,a);
};
var G__6058 = function (self__,var_args){
var self__ = this;
var a = null;if (arguments.length > 1) {
  a = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__6058__delegate.call(this,self__,a);};
G__6058.cljs$lang$maxFixedArity = 1;
G__6058.cljs$lang$applyTo = (function (arglist__6060){
var self__ = cljs.core.first(arglist__6060);
var a = cljs.core.rest(arglist__6060);
return G__6058__delegate(self__,a);
});
G__6058.cljs$core$IFn$_invoke$arity$variadic = G__6058__delegate;
return G__6058;
})()
;
reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args6057){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6057)));
});
reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__6061__delegate = function (a){var _ = this;var or__3401__auto___6062 = self__.p;if(cljs.core.truth_(or__3401__auto___6062))
{} else
{self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}
return cljs.core.apply.call(null,self__.p,a);
};
var G__6061 = function (var_args){
var self__ = this;
var a = null;if (arguments.length > 0) {
  a = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__6061__delegate.call(this,a);};
G__6061.cljs$lang$maxFixedArity = 0;
G__6061.cljs$lang$applyTo = (function (arglist__6063){
var a = cljs.core.seq(arglist__6063);
return G__6061__delegate(a);
});
G__6061.cljs$core$IFn$_invoke$arity$variadic = G__6061__delegate;
return G__6061;
})()
;
reagent.impl.util.__GT_partial_ifn = (function __GT_partial_ifn(f,args,p){return (new reagent.impl.util.partial_ifn(f,args,p));
});
reagent.impl.util.merge_class = (function merge_class(p1,p2){var class$ = (function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(p1);if(cljs.core.truth_(temp__4092__auto__))
{var c1 = temp__4092__auto__;var temp__4092__auto____$1 = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(p2);if(cljs.core.truth_(temp__4092__auto____$1))
{var c2 = temp__4092__auto____$1;return [cljs.core.str(c1),cljs.core.str(" "),cljs.core.str(c2)].join('');
} else
{return null;
}
} else
{return null;
}
})();if((class$ == null))
{return p2;
} else
{return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",1108647146),class$);
}
});
reagent.impl.util.merge_style = (function merge_style(p1,p2){var style = (function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"style","style",1123684643).cljs$core$IFn$_invoke$arity$1(p1);if(cljs.core.truth_(temp__4092__auto__))
{var s1 = temp__4092__auto__;var temp__4092__auto____$1 = new cljs.core.Keyword(null,"style","style",1123684643).cljs$core$IFn$_invoke$arity$1(p2);if(cljs.core.truth_(temp__4092__auto____$1))
{var s2 = temp__4092__auto____$1;return cljs.core.merge.call(null,s1,s2);
} else
{return null;
}
} else
{return null;
}
})();if((style == null))
{return p2;
} else
{return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",1123684643),style);
}
});
reagent.impl.util.merge_props = (function merge_props(p1,p2){if((p1 == null))
{return p2;
} else
{if(cljs.core.map_QMARK_.call(null,p1))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1637187556,null),new cljs.core.Symbol(null,"p1","p1",-1640528006,null))))].join('')));
}
return reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,cljs.core.merge.call(null,p1,p2)));
}
});
reagent.impl.util.identical_parts = (function identical_parts(v1,v2){var or__3401__auto__ = (v1 === v2);if(or__3401__auto__)
{return or__3401__auto__;
} else
{var end = cljs.core.count.call(null,v1);var and__3389__auto__ = (end === cljs.core.count.call(null,v2));if(and__3389__auto__)
{var n = 0;while(true){
if((n >= end))
{return true;
} else
{if((cljs.core.nth.call(null,v1,n) === cljs.core.nth.call(null,v2,n)))
{{
var G__6064 = (n + 1);
n = G__6064;
continue;
}
} else
{return false;
}
}
break;
}
} else
{return and__3389__auto__;
}
}
});
reagent.impl.util._not_found = (function (){var obj6066 = {};return obj6066;
})();
reagent.impl.util.shallow_equal_maps = (function shallow_equal_maps(x,y){var or__3401__auto__ = (x === y);if(or__3401__auto__)
{return or__3401__auto__;
} else
{var and__3389__auto__ = cljs.core.map_QMARK_.call(null,x);if(and__3389__auto__)
{var and__3389__auto____$1 = cljs.core.map_QMARK_.call(null,y);if(and__3389__auto____$1)
{var and__3389__auto____$2 = (cljs.core.count.call(null,x) === cljs.core.count.call(null,y));if(and__3389__auto____$2)
{return cljs.core.reduce_kv.call(null,(function (res,k,v){var yv = cljs.core.get.call(null,y,k,reagent.impl.util._not_found);if(cljs.core.truth_((function (){var or__3401__auto____$1 = cljs.core.keyword_identical_QMARK_.call(null,v,yv);if(or__3401__auto____$1)
{return or__3401__auto____$1;
} else
{var or__3401__auto____$2 = (function (){var and__3389__auto____$3 = cljs.core.keyword_identical_QMARK_.call(null,k,new cljs.core.Keyword(null,"style","style",1123684643));if(and__3389__auto____$3)
{return shallow_equal_maps.call(null,v,yv);
} else
{return and__3389__auto____$3;
}
})();if(cljs.core.truth_(or__3401__auto____$2))
{return or__3401__auto____$2;
} else
{return (((cljs.core.type.call(null,v) === reagent.impl.util.partial_ifn)) || ((v instanceof cljs.core.Symbol))) && (cljs.core._EQ_.call(null,v,yv));
}
}
})()))
{return res;
} else
{return cljs.core.reduced.call(null,false);
}
}),true,x);
} else
{return and__3389__auto____$2;
}
} else
{return and__3389__auto____$1;
}
} else
{return and__3389__auto__;
}
}
});
reagent.impl.util.equal_args = (function equal_args(p1,c1,p2,c2){new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,c1,p2,c2], null);
var and__3389__auto__ = reagent.impl.util.identical_parts.call(null,c1,c2);if(and__3389__auto__)
{return reagent.impl.util.shallow_equal_maps.call(null,p1,p2);
} else
{return and__3389__auto__;
}
});
