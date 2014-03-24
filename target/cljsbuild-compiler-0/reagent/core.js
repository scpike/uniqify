// Compiled by ClojureScript 0.0-2156
goog.provide('reagent.core');
goog.require('cljs.core');
goog.require('reagent.ratom');
goog.require('reagent.ratom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.impl.component');
goog.require('reagent.impl.template');
goog.require('reagent.impl.template');
reagent.core.React = reagent.impl.template.React;
reagent.core.is_client = reagent.impl.template.isClient;
/**
* Render a Reagent component into the DOM. The first argument may be either a
* vector (using Reagent's Hiccup syntax), or a React component. The second argument should be a DOM node.
* 
* Optionally takes a callback that is called when the component is in place.
* 
* Returns the mounted component instance.
*/
reagent.core.render_component = (function() {
var render_component = null;
var render_component__2 = (function (comp,container){return render_component.call(null,comp,container,null);
});
var render_component__3 = (function (comp,container,callback){return reagent.core.React.renderComponent(reagent.impl.template.as_component.call(null,comp),container,callback);
});
render_component = function(comp,container,callback){
switch(arguments.length){
case 2:
return render_component__2.call(this,comp,container);
case 3:
return render_component__3.call(this,comp,container,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_component.cljs$core$IFn$_invoke$arity$2 = render_component__2;
render_component.cljs$core$IFn$_invoke$arity$3 = render_component__3;
return render_component;
})()
;
/**
* Remove a component from the given DOM node.
*/
reagent.core.unmount_component_at_node = (function unmount_component_at_node(container){return reagent.core.React.unmountComponentAtNode(container);
});
/**
* Turns a component into an HTML string.
*/
reagent.core.render_component_to_string = (function() {
var render_component_to_string = null;
var render_component_to_string__1 = (function (component){var res = cljs.core.atom.call(null,null);render_component_to_string.call(null,component,(function (p1__5958_SHARP_){return cljs.core.reset_BANG_.call(null,res,p1__5958_SHARP_);
}));
return cljs.core.deref.call(null,res);
});
var render_component_to_string__2 = (function (component,callback){return reagent.core.React.renderComponentToString(reagent.impl.template.as_component.call(null,component),callback);
});
render_component_to_string = function(component,callback){
switch(arguments.length){
case 1:
return render_component_to_string__1.call(this,component);
case 2:
return render_component_to_string__2.call(this,component,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_component_to_string.cljs$core$IFn$_invoke$arity$1 = render_component_to_string__1;
render_component_to_string.cljs$core$IFn$_invoke$arity$2 = render_component_to_string__2;
return render_component_to_string;
})()
;
/**
* Create a component, React style. Should be called with a map,
* looking like this:
* {:get-initial-state (fn [this])
* :component-will-receive-props (fn [this new-props])
* :should-component-update (fn [this old-props new-props old-children new-children])
* :component-will-mount (fn [this])
* :component-did-mount (fn [this])
* :component-will-update (fn [this new-props new-children])
* :component-did-update (fn [this old-props old-children])
* :component-will-unmount (fn [this])
* :render (fn [props children this])}
* 
* Everything is optional, except :render.
*/
reagent.core.create_class = (function create_class(spec){return reagent.impl.component.create_class.call(null,spec);
});
/**
* Merge the props of a mounted, top-level component.
*/
reagent.core.set_props = (function set_props(comp,props){return reagent.impl.component.set_props.call(null,comp,props);
});
/**
* Set the props of a mounted, top-level component.
*/
reagent.core.replace_props = (function replace_props(comp,props){return reagent.impl.component.replace_props.call(null,comp,props);
});
/**
* Returns the state of a component, as set with replace-state or set-state.
*/
reagent.core.state = (function state(this$){return reagent.impl.component.state.call(null,this$);
});
/**
* Set state of a component.
*/
reagent.core.replace_state = (function replace_state(this$,new_state){return reagent.impl.component.replace_state.call(null,this$,new_state);
});
/**
* Merge component state with new-state.
*/
reagent.core.set_state = (function set_state(this$,new_state){return reagent.impl.component.set_state.call(null,this$,new_state);
});
/**
* Returns the props passed to a component.
*/
reagent.core.props = (function props(this$){return reagent.impl.component.get_props.call(null,this$);
});
/**
* Returns the children passed to a component.
*/
reagent.core.children = (function children(this$){return reagent.impl.component.get_children.call(null,this$);
});
/**
* Returns the root DOM node of a mounted component.
*/
reagent.core.dom_node = (function dom_node(this$){return this$.getDOMNode();
});
/**
* Utility function that merges two maps, handling :class and :style
* specially, like React's transferPropsTo.
*/
reagent.core.merge_props = (function merge_props(defaults,props){return reagent.impl.util.merge_props.call(null,defaults,props);
});
/**
* Render dirty components immediately to the DOM.
* 
* Note that this may not work in event handlers, since React.js does
* batching of updates there.
*/
reagent.core.flush = (function flush(){return reagent.impl.component.flush.call(null);
});
/**
* Like clojure.core/atom, except that it keeps track of derefs.
* Reagent components that derefs one of these are automatically
* re-rendered.
* @param {...*} var_args
*/
reagent.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){return reagent.ratom.atom.call(null,x);
});
var atom__2 = (function() { 
var G__5959__delegate = function (x,rest){return cljs.core.apply.call(null,reagent.ratom.atom,x,rest);
};
var G__5959 = function (x,var_args){
var rest = null;if (arguments.length > 1) {
  rest = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__5959__delegate.call(this,x,rest);};
G__5959.cljs$lang$maxFixedArity = 1;
G__5959.cljs$lang$applyTo = (function (arglist__5960){
var x = cljs.core.first(arglist__5960);
var rest = cljs.core.rest(arglist__5960);
return G__5959__delegate(x,rest);
});
G__5959.cljs$core$IFn$_invoke$arity$variadic = G__5959__delegate;
return G__5959;
})()
;
atom = function(x,var_args){
var rest = var_args;
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
/**
* Run f using requestAnimationFrame or equivalent.
*/
reagent.core.next_tick = (function next_tick(f){return reagent.impl.component.next_tick.call(null,f);
});
/**
* Works just like clojure.core/partial, except that it is an IFn, and
* the result can be compared with =
* @param {...*} var_args
*/
reagent.core.partial = (function() { 
var partial__delegate = function (f,args){return (new reagent.impl.util.partial_ifn(f,args,null));
};
var partial = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partial__delegate.call(this,f,args);};
partial.cljs$lang$maxFixedArity = 1;
partial.cljs$lang$applyTo = (function (arglist__5961){
var f = cljs.core.first(arglist__5961);
var args = cljs.core.rest(arglist__5961);
return partial__delegate(f,args);
});
partial.cljs$core$IFn$_invoke$arity$variadic = partial__delegate;
return partial;
})()
;
var p1_5962 = reagent.core.partial.call(null,cljs.core.vector,1,2);if(cljs.core._EQ_.call(null,p1_5962.call(null,3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,2,3], null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"p1","p1",-1640528006,null),3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,2,3], null))))].join('')));
}
if(cljs.core._EQ_.call(null,p1_5962,reagent.core.partial.call(null,cljs.core.vector,1,2)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"p1","p1",-1640528006,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1861501754,null),new cljs.core.Symbol(null,"vector","vector",1834048252,null),1,2))))].join('')));
}
if(cljs.core.ifn_QMARK_.call(null,p1_5962))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-1637301977,null),new cljs.core.Symbol(null,"p1","p1",-1640528006,null))))].join('')));
}
if(cljs.core._EQ_.call(null,reagent.core.partial.call(null,cljs.core.vector,1,2),p1_5962))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1861501754,null),new cljs.core.Symbol(null,"vector","vector",1834048252,null),1,2),new cljs.core.Symbol(null,"p1","p1",-1640528006,null))))].join('')));
}
if(cljs.core.not_EQ_.call(null,p1_5962,reagent.core.partial.call(null,cljs.core.vector,1,3)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not=","not=",-1637144189,null),new cljs.core.Symbol(null,"p1","p1",-1640528006,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1861501754,null),new cljs.core.Symbol(null,"vector","vector",1834048252,null),1,3))))].join('')));
}
