//veneer.core.src.js
//18,507b of code compiled Monday, February 16, 2015 1:58:01 AM

/* custom HTML components. like polymer.js, but tiny and fast instead of huge and slow. tested in IE9+

What is does: allows custom HTML tags names, syncs those tag's properties and attributes, and provides a structure for scripting basic interactivity.


*/

// (C) WebReflection document.registerElement() Polyfill  
// from:https://github.com/WebReflection/document-register-element fetched 2014-12-10
/*! (C) WebReflection Mit Style License */
(function(e,t,n,r){"use strict";function z(e,t){for(var n=0,r=e.length;n<r;n++)Y(e[n],t)}function W(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],U(r,p[V(r)])}function X(e){return function(t){b.call(A,t)&&(Y(t,e),z(t.querySelectorAll(d),e))}}function V(e){var t=e.getAttribute("is"),n=e.nodeName,r=m.call(h,t?f+t.toUpperCase():a+n);return t&&-1<r&&!$(n,t)?-1:r}function $(e,t){return-1<d.indexOf(e+'[is="'+t+'"]')}function J(e){var t=e.currentTarget,n=e.attrChange,r=e.prevValue,i=e.newValue;t.attributeChangedCallback&&e.attrName!=="style"&&t.attributeChangedCallback(e.attrName,n===e.ADDITION?null:r,n===e.REMOVAL?null:i)}function K(e){var t=X(e);return function(e){t(e.target)}}function Q(e,t){var n=this;M.call(n,e,t),j.call(n,{target:n})}function G(e,t){k(e,t),q?q.observe(e,D):(B&&(e.setAttribute=Q,e[i]=I(e),e.addEventListener(u,j)),e.addEventListener(o,J)),e.createdCallback&&(e.created=!0,e.createdCallback(),e.created=!1)}function Y(e,t){var n,r=V(e),i="attached",s="detached";-1<r&&(R(e,p[r]),r=0,t===i&&!e[i]?(e[s]=!1,e[i]=!0,r=1):t===s&&!e[s]&&(e[i]=!1,e[s]=!0,r=1),r&&(n=e[t+"Callback"])&&n.call(e))}if(r in t)return;var i="__"+r+(Math.random()*1e5>>0),s="extends",o="DOMAttrModified",u="DOMSubtreeModified",a="<",f="=",l=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,c=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],h=[],p=[],d="",v=t.documentElement,m=h.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},g=n.prototype,y=g.hasOwnProperty,b=g.isPrototypeOf,w=n.defineProperty,E=n.getOwnPropertyDescriptor,S=n.getOwnPropertyNames,x=n.getPrototypeOf,T=n.setPrototypeOf,N=!!n.__proto__,C=n.create||function Z(e){return e?(Z.prototype=e,new Z):this},k=T||(N?function(e,t){return e.__proto__=t,e}:S&&E?function(){function e(e,t){for(var n,r=S(t),i=0,s=r.length;i<s;i++)n=r[i],y.call(e,n)||w(e,n,E(t,n))}return function(t,n){do e(t,n);while(n=x(n));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),L=e.MutationObserver||e.WebKitMutationObserver,A=(e.HTMLElement||e.Element||e.Node).prototype,O=A.cloneNode,M=A.setAttribute,_=t.createElement,D=L&&{attributes:!0,characterData:!0,attributeOldValue:!0},P=L||function(e){B=!1,v.removeEventListener(o,P)},H=!1,B=!0,j,F,I,q,R,U;T||N?(R=function(e,t){b.call(t,e)||G(e,t)},U=G):(R=function(e,t){e[i]||(e[i]=n(!0),G(e,t))},U=R),L||(v.addEventListener(o,P),v.setAttribute(i,1),v.removeAttribute(i),B&&(j=function(e){var t=this,n,r,s;if(t===e.target){n=t[i],t[i]=r=I(t);for(s in r){if(!(s in n))return F(0,t,s,n[s],r[s],"ADDITION");if(r[s]!==n[s])return F(1,t,s,n[s],r[s],"MODIFICATION")}for(s in n)if(!(s in r))return F(2,t,s,n[s],r[s],"REMOVAL")}},F=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,J(o)},I=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!=="setAttribute"&&(r[n]=t.value);return r})),t[r]=function(n,r){w=n.toUpperCase(),H||(H=!0,L?(q=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new L(function(r){for(var i,s,o=0,u=r.length;o<u;o++)i=r[o],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,s.attributeChangedCallback&&i.attributeName!=="style"&&s.attributeChangedCallback(i.attributeName,i.oldValue,s.getAttribute(i.attributeName)))})}(X("attached"),X("detached")),q.observe(t,{childList:!0,subtree:!0})):(t.addEventListener("DOMNodeInserted",K("attached")),t.addEventListener("DOMNodeRemoved",K("detached"))),t.addEventListener("readystatechange",function(e){z(t.querySelectorAll(d),"attached")}),t.createElement=function(e,n){var r=_.apply(t,arguments),i=m.call(h,(n?f:a)+(n||e).toUpperCase()),s=-1<i;return n&&(r.setAttribute("is",n=n.toLowerCase()),s&&(s=$(e.toUpperCase(),n))),s&&U(r,p[i]),r},A.cloneNode=function(e){var t=O.call(this,!!e),n=V(t);return-1<n&&U(t,p[n]),e&&W(t.querySelectorAll(d)),t});if(-2<m.call(h,f+w)+m.call(h,a+w))throw new Error("A "+n+" type is already registered");if(!l.test(w)||-1<m.call(c,w))throw new Error("The type "+n+" is invalid");var i=function(){return t.createElement(v,u&&w)},o=r||g,u=y.call(o,s),v=u?r[s].toUpperCase():w,b=h.push((u?f:a)+w)-1,w;return d=d.concat(d.length?",":"",u?v+'[is="'+n.toLowerCase()+'"]':v),i.prototype=p[b]=y.call(o,"prototype")?o.prototype:C(A),z(t.querySelectorAll(d),"attached"),i}})(window,document,Object,"registerElement");
 

 
 /* create a style tag to hold CSS for all the custom components */
 (function(x,d){d=document, x=d.getElementsByTagName("script")[0]; if(!x){return;}
veneer.root=x.parentNode;
veneer.style=x.parentNode.appendChild(d.createElement("style"));}());



//define a very select few handy utility methods to reduce need for jQuery/underscore

veneer.template=function template(ob, str){
   return str.replace(/{{([^}]+?)}}/g, 
     function(j,a){  return (ob||{})[a]||"";  } );
};

//add script(s) by url:
veneer.include=function(u){
	if(!u||!u.join){u=[u];}
	return u.map(function(u,x){
		var doc=document;
		 d=doc.createElement("script");
		 d.addEventListener("load", function(){this.loaded=true;},true);
		 
		 var req=u.split(/[#]/);
		 d.src=req[0]; 
		 
		 function inject(){
			doc.documentElement.children[0].appendChild(d);
		 }
		 
		if(!req[1]){
			inject();
		}else{
			//wait for depend, then inject
			(function waiter(){
				var need;
				try{
				need=veneer.$("script[src*='"+req[1]+"']")[0];}catch(y){console.log(111);need={loaded:1}} 
				if(need && need.loaded){inject();}else{setTimeout(waiter, 37);}
			}());
			
		}
		 return d;
	});
};

var refData=[];
veneer.ref=function(v){
	if(typeof v!=="object") return refData[v];
	var id=refData.indexOf(v);
	if(id==-1) id=refData.length;
	refData[id]=v;
	return id;
};

veneer.on=function on(base, event, selector, fn){
  var u,b=base,m=b.matches||b.webkitMatchesSelector||b.mozMatchesSelector||b.msMatchesSelector, 
  f=fn.call?fn:Function("e",fn);
  (event+'').split(",").map(function(s){b.addEventListener(s.trim(), function(e){ 
     return m.call(e.target, selector) ? f.call(e.target, e) : u;
  }, true);});
};

 veneer.upon=function upon(event, selector, fn) {
 	document.documentElement.addEventListener(event, function(e) {
 			veneer.$(selector).forEach(function(elm){
				fn.call(elm, e);
			});
 	}, true);
	return upon;
 };
 
 
veneer.store=JSON.parse(localStorage.veneerPersist||"{}");
addEventListener("unload", function(e){
	localStorage.veneerPersist=JSON.stringify(veneer.store);
}, false);


veneer.resolve=function(path, base) { 
	return path.reduce(function(o, k,_,__) {
		var v=o&&o[k];
		return typeof v==="function"?v.call(o):v;
	}, base||Window);
};

 veneer.extend=function extend(o, o2) { 
	for (var k in o2) if ([].hasOwnProperty.call(o2, k)) o[k] = o2[k];
	if (arguments.length > 2) extend.apply(this, [o].concat([].slice.call(arguments, 2)));
	return o;
};

//add script(s) by url:
veneer.requires=function(arrModules, base){
	if(arrModules && !arrModules.forEach){arrModules=[arrModules];}
	return arrModules.forEach(function(a,n){ 
		var prefix="", base2=base;
		
		if(a=="test"||a=="element"){return;}
		
		//allow full urls to bypass base
		if( /^http/i.test(a) ){ 
			base2="";
		}
		
	
		if( /^\w+$/.test(a) ){
			if(veneer.tags["veneer-"+a]){return;}
			setTimeout(function(){ veneer.include( (base2||"") +"veneer-"+a+".js" ); },n*20);
		}else{
			setTimeout(function(){ veneer.include( (base2||"") + a ); },n*20);
		}
	
	});
};

//this is where loaded tag defs go, so imports can check for depends
veneer.tags={};

//now timestamp
veneer.now= (window.performance && performance.now.bind(performance)) || (function(){ var now=+new Date(); return function(){return new Date()-now;};}());

//collection to array:
veneer._=Function.call.bind([].slice);

//like jQuery's selection tool:
veneer.$=function $(css,root){ return veneer._((root||document).querySelectorAll(css)||[]); };

//a constructor for Boolean attribute values, mapping "blank" to true and all else to false.
veneer.bool=function bool(v){return (v===""||v==="true"||v===true);};

//create an element from scratch:
veneer.elm=function elm(tagName, attribs, content){
	var elm=document.createElement(tagName), at=attribs||{};
	Object.keys(at).forEach(function(k){
		elm.setAttribute(k, this[k]);
	}, at );
	if(content){elm.innerHTML=content;}
	return elm;
};

//a simple async url fetch:
veneer.ajax=function aGet(strURL, fnCallBack) {
	var e = new XMLHttpRequest;
	e.onload = function() {
		fnCallBack(e.responseText, e);
	};
	e.open("GET", strURL, true);
	setTimeout(e.send.bind(e), 1);//(the timeout alows caller to add headers via return)
	return e;
};

veneer.css=function(strCSS){
	veneer.style.appendChild(document.createTextNode(strCSS));
};

veneer.importHTML=function(url){
	var hd=veneer.$("head")[0];
	return veneer.ajax(url, function(s){hd.innerHTML+=s;});
};

//eliminates ~50% of common callbacks to fetch data:
veneer.assign=function assign(obj, key){ return function(v){ob[key]=v;};};

veneer.addProto=function m(tag, key, v){
	String(tag).trim().split(/\s*\,\s*/).forEach(function(tag){ try{
		var ob=veneer.tags['veneer-'+tag.replace(/^veneer\-/i,"")]._spawn.prototype;
		if(typeof v==="object" && /(get)|(set)|(enumerable)|(configurable)|(value)/.test(Object.keys(v))){
			Object.defineProperty(ob, key, v);
		}else{
			ob[key]=v;
		}
		}catch(y){}
	});
	return m;
};
	
veneer.observe=function(obj, prop, callBack){	
	var val=obj[prop];	
	Object.defineProperty(obj, prop, {
		get: function(){return val;},
		set: function(v){
			var v2=val;
			val=v; 
			callBack.call(obj, {type: 'update', name:prop, object: obj, oldValue: v2, value: v });
		}
	});		
	return true
}; // end veneer.observe() 


veneer.raiseEvent= function raiseEvent(eventName, elm, e){
	e=e||{};			
	if(!elm){elm=this;}
	
	try{ //normal dom3:
		elm.dispatchEvent(new CustomEvent(eventName, {detail: e}));
	}catch(y){ // IE/wtf routine:
		var event = document.createEvent('Event');
		event.initEvent(eventName, true, true);	
		Object.keys(e).forEach(function(k){
			event[k]=this[k];
		}, e);
		elm.dispatchEvent(event);			
	}
};//end raiseEvent()


veneer.getAttribs=function (elm){
	return [].map.call(elm.attributes, function(a){ return this[a.name]=a.value, this; }, {})[0];
};

veneer.setAttribs=function (elm, attribs){
	Object.keys(Object(attribs)).forEach(function(a){ elm.setAttribute(a, this[a]); }, attribs );
};

//a little functional help:
veneer.pluck=function pluck(a){ return a[this]; };
veneer.from=function from(a){ return this[a]; };
veneer.set=function to(a){ return a[this[0]]=this[1]; };
veneer.k=function k(a){ return a; };
veneer.unique=function(a,b,c){return c.indexOf(a)==b;};
veneer.date=function(n){return new Date(n||Date.now());};
veneer.hms=function(s){return new Date(1000*s).toISOString().split("T")[1].split(".")[0];};
veneer.size=function(o){if(.1-o.length)return o.length;if(typeof o==="object")return Object.keys(o).length;return 0;};
veneer.parseElement=function(elm){
	if(elm._veneered){return}else{elm._veneered=true;}

	var name= elm.getAttribute("name"),
	 temp=veneer.$('template', elm)[0]||"",
	 def={
		content: (temp.innerHTML||"").trim(),
		events:  {},
		CUSTOM: 1, 
		defaults: {},
		props: {},
		
		css: ((veneer.$('style', elm)[0]||"").innerHTML||"").trim()
	};

	elm._frag=temp;	

	var at=veneer.getAttribs(elm);
	if(at.proto){
	  def.proto=eval(at.proto).prototype;
	  delete at.proto;
	}



	var code=(veneer.$('script[type="shadow"]', elm)[0]||"").innerHTML || "";


	Object.keys(at).map(function(k){
	 if(/^on/.test(k)) return def.events[k.slice(2)]=Function("e", this[k]);
	 if(k=="name" || k=="id" || k=="proto" || k=="lang" || k=="class" )return;
	 def.props[k]=eval(this[k])||String;
	}, at);

	if(temp.attributes && temp.attributes.length){

	   var tt=veneer.getAttribs(temp);
	   
	   Object.keys(tt).map(function(k){
		 if(/^on/.test(k)) return def.events[k.slice(2)]=Function("e", this[k]);
		 if(k=="name" || k=="id" || k=="lang" || k=="class" )return;
		  var v=this[k];
		  
		  def.defaults[k]= (def.props[k]||String)(v);
	   }, tt);

	};//end if template attribs

	if(code){
		if(def.events.insert){
			var oldIns=def.events.insert, newIns=Function("e", code);
			
			def.events.insert=function(){ 
				newIns.apply(this, arguments); 
				oldIns.apply(this, arguments); 
			};
		}else{
			def.events.insert=Function("e", code);	
		}
		
	}
	return veneer(name, def);
};


function veneer(tagName, def){
	
	def = def || {};	
	if(!veneer.tags[tagName]){
			veneer.tags[tagName]=def;
	}else{
		return;
	}
	
	def.events=def.events||{};
	
	var  props=def.props||{},
	defs=def.defaults||(def.defaults={}),
	methods = def.methods||{},
	aPrototype = Object.create( def.proto || HTMLElement.prototype );


	//this fires on each custom tag at time of creation via markup or createElement():
	aPrototype.createdCallback = function _init(e){

		var that=this; // lets "this" be known as "that" in html event handlers

		that._def=def; 
		var subscribed=that.getAttribute("subscribed")||"";
		
		// insert a wrapper around update to push notifications to subscribed elements:
		if(subscribed){ // && def.events && def.events.update  ){ 
			var oldUpdate=def.events.update || Boolean;
			def.events.update=function(){
				var args=[].slice.call(arguments),
				 t=this,
				 resp=oldUpdate.apply(t, args),
				 ray=veneer.$(subscribed);
				 that._subscribed=ray;
				ray.forEach(function(elm){
					if(elm.change) elm.change(t);
				});
				return resp;
			};
		
		}
		
		// fire an init event right here
		if(def.events && def.events.init){
			def.events.init.call(this, {target: this});
		}
		
		// inject any defined content into tag:
		if(def.content){ 
			that._html=that.innerHTML;
			that.innerHTML=def.content; 
		}

		// define a special handy property to get all attribs as an object and set many attribs via object:
		that._attribs=function(v){
			if(v){veneer.setAttribs(that,v);}else{return veneer.getAttribs(that);}
		};

		// bind any events to the actual tag:
		Object.keys(def.events||{}).map(function(evt){
			// that[evt]=this[evt];
			var action=this[evt].bind(that);
			that.addEventListener(evt, action, false); // true);
		}, def.events||{});
	
		// apply any defaults to "missing" props/attribs
		if(defs){ 
			Object.keys(defs).forEach(function(k){ 
			
				if(!that.hasAttribute(k) && this[k]!==false ){ that.setAttribute(k, this[k]); that[k]=this[k];} 
			}, defs); 
		}
	
		var e2=e;

		// calls the tag definition's update() event ( if defined )
		function changeme(e){ 
			if(def.events && def.events.update){ def.events.update.call(that, {target: that, e:e||e2}); }
		};

		if(def.events && def.events.update){ 
			that.change=changeme; 
			if( !def.events.insert || def.CUSTOM ){  setTimeout(changeme.bind(that,e), 0);  }
		}
		

	};//end create callBack

	

	// watch all attribs for changes, firing change() if needed to sync attrib+props
	aPrototype.attributeChangedCallback= function _change(e,old,v){	
		if(e=="lang" || e=="class"){return; }
		if(this.change && this._def  && this._def  && this._def.props && this._def.props[e] ){this.change({
			type:"attr", key:e, value: this._def.props[e](v), old: this._def.props[e](old), target: this});}
	};

	aPrototype.attachedCallback= function _insert(e,b){		
		setTimeout( veneer.raiseEvent.bind(this, "insert", this), 0);
	};
	aPrototype.detachedCallback= function _remove(e,b){		
		setTimeout( veneer.raiseEvent.bind(this, "remove", this), 0);
	};
	


	// bind all methods:
	Object.keys(methods).map(function(method,_,__){
		aPrototype[method]=methods[method];
	});
	
	// bind all props to attribs of the same name and subscribe to changes:
	Object.keys(props).map(function(prop,_,__){

	
		var def=this[prop] || "",
		
		 cfg= {
			prop: prop,
			value: def.value === undefined ? defs[prop] : def.value,
			attr: typeof def==="object" ? (def.attr===undefined?prop:def.attr) : prop,
			type: typeof def==="object" ? def.type : def,
			observe: def.observe === undefined ? true : def.observe,
			get: def.get || getProp,
			set: def.set 
		};
				
		function announce(obj, old, val){			
			veneer.raiseEvent("change", obj, {
				old: old,
				value: val,
				key: prop,
				attr: cfg.attr,
				time: Date.now(),
				def: cfg.value
			});
		}			
		
		
		function getProp(){					
			try{
				//return props[prop]( this.getAttribute(cfg.attr)  ); //v===null?false:v);
				return cfg.type.call(this, this.getAttribute(cfg.attr)  ); 
			}catch(y){
				return this.getAttribute(cfg.attr);
			}
		}
	
		Object.defineProperty(aPrototype, prop, {
			get: cfg.get,
			set: function(v){ 
				var x,old=this.hasOwnProperty(prop) ? this[prop] : cfg.value;
				if(v!==old){
					if(cfg.set){x=cfg.set.call(this, v, old);if(x===true){return;}}
					if(cfg.attr){ this.setAttribute(cfg.attr, v ); }
					if(cfg.observe){  announce(this, old, v); }
				}				
			}
		});//end ODP
	
		
	}, props);

	// add any custom css if defined:
	if(def.css){ veneer.css(def.css);}

	
	// use registerElement() to make the new tag name recognized by the browser
	aPrototype._spawn=def._spawn=document.registerElement(tagName,{
	    prototype: aPrototype
	});  
	
	setTimeout(function(){ 
		veneer.raiseEvent("init."+tagName.split("-").pop(), window, {tag: tagName});
	}, 33);
	
};//end veneer()


// boot all custom declarative tags now and later without iteration:
veneer("veneer-element", {
	events: {
		insert: function(){veneer.parseElement(this);}
	}
});

veneer.$("script").map(veneer.set,["loaded", true]); 

setTimeout(function(){
	document.documentElement.className+=" veneer";
}, 30 );
//////////////////////////////////////////////
