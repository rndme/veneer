//veneer.full.src.js
//106,049b of code compiled Wednesday, December 10, 2014 3:02:13 AM

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

//elminates ~50% of common callbacks to fetch data:
veneer.assign=function assign(obj, key){ return function(v){ob[key]=v;};};
	
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
veneer.date=function(n){return new Date(n||Date.now());};
veneer.hms=function(s){return new Date(1000*s).toISOString().split("T")[1].split(".")[0];};
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
	
/*	function curry(fn, arrArgs){
		if(!arrArgs.join){arrArgs=[arrArgs];}
		return function _curried(){return fn.apply(this, arrArgs.concat([].slice.call(arguments))) };
	}
*/	
	
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
	

		// calls the tag definition's update() event ( if defined )
		function changeme(e){ 
			if(def.events && def.events.update){ def.events.update.call(that, {target: that, e:e}); }
		};

		if(def.events && def.events.update){ 
			that.change=changeme; 
			if( !def.events.insert || def.CUSTOM ){  setTimeout(changeme.bind(that,e), 0);  }
		}
		

	};//end create callBack

	

	// watch all attribs for changes, firing change() if needed to sync attrib+props
	aPrototype.attributeChangedCallback= function _change(e,b){		
		if(e=="lang" || e=="class"){return; }
		if(this.change && this._def  && this._def  && this._def.props && this._def.props[e] ){this.change();}		// this line breaks firefox
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
	aPrototype._spawn=document.registerElement(tagName, {
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
}, 50 );
//////////////////////////////////////////////
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-attrib',
	version: '1.0.0', tags: 'native control',
	purpose: 'Uses a wrapped form input to change an attrib on another element, and vice versa (2-way binding if possible)',
	attribs: { 
		target: 'CSS selector pointing to bound element', 
		attrib: 'name of target elm attribute to alter',
		silent: 'if present, keeps targets change event from firing when attribute updates',
		pre: 'text to prepend in front of the raw wrapped input value, good for choosing selectors',
		interval: '# of seconds after which to re-apply the change event, mainly for triggering methods'
	},
	events:  [ 'insert', 'update' ]
 }
**/

//////////////////////////////////////////////


veneer("veneer-attrib", {

props: {
	target: String,
	attrib: veneer.k,
	silent: veneer.bool,
	pre:  veneer.k,
	interval: Number
},
events: {
	insert: function ins(e){
		
		var elm=e.target,x,me,prop;		
		if(this!=elm){return;}
	
		
	
		elm._dest=veneer.$(elm.target);				
		
		if(!elm._dest[0]){ 
			elm.misses=elm.misses||0;
			elm.misses++;	
			if(elm.misses>5){
				return console.error("Missing attribute 'target' on <veneer-attrib> element"); 
			}else{
				return setTimeout(ins.bind(this,e), 70);
			}

		}

		if(!elm.attrib){ // return console.error("Missing attribute 'attrib' on <veneer-attrib> element"); }
			var t=elm._dest[0];
			if(t.value!=null) elm.attrib="value";
			if(t.type=="checkbox" || t.type=="radio") elm.attrib="checked";
		}

		if(!elm.attrib){ return console.error("Missing attribute 'attrib' on <veneer-attrib> element"); }



		
		 me=veneer.$("input,select", elm)[0];
		 prop="value";
		
		if(me.type=="checkbox" || me.type=="radio"){
			prop="checked";					
		}

		elm._input=me;
		
		if(me.type=="button"){
			var elmElm=elm;
			me.onclick=function(e){
				elm._dest.forEach(function(elm){
					if(typeof elm[elmElm.attrib]==="function"){ elm[elmElm.attrib](); }
				}); 
			};
			return ;
		}
	
		me[prop]= me[prop] || elm._dest[elm._dest.length-1][elm.attrib];
		
		//me.onchange=elm.change; 
		me.addEventListener("change", elm.change||Boolean, true);
		
		var elm2=elm; 
		
		elm._dest.map(function(elm){
			
			
			
			if(elm==elm2){return;}
			
			elm.addEventListener("change", function(e){				
			

			//	console.log("change1", e.detail, elm, elm2);
				
				if(elm==elm2){return;}		
				
				if( e.target && e.detail && e.detail.key==elm2.attrib){
					if(me[prop]!=elm[elm2.attrib]){
					
						me[prop]=elm[elm2.attrib];
						
					//	console.log("setting", me, me[prop],elm[elm2.attrib], "|", prop, elm, elm2);
						
					}
				}				
				
			}, true);
			
		});

		if(!elm.silent){ elm.change();}
		if(elm.interval) setInterval(elm.change.bind(elm), elm.interval);
	},
	update: function(e){ 
		
		var prop, elm=e.target;

		if(elm._dest){ 			
			prop="value";
			if(elm._input.type=="checkbox" || elm._input.type=="radio"){
				prop="checked";					
			}
			var val=elm._input[prop],
				attr=elm.attrib; /*     
			console.info("upd", {
				val:val, 
				prop:prop, 
				inp:elm._input, 
				elm:elm, 
				attrib:elm.attrib, 
				inpAtProp: elm._input[prop],
				destAttribValue:elm._dest[0][elm.attrib],
				dest: elm._dest
			});*/  
			elm._dest.map(function(dElm){
				if(elm.pre && val!=null){
					dElm[attr]=elm.pre+val;  
				}else{
					dElm[attr]=val;  
				}
				if( dElm._def && dElm._def.props && dElm._def.props[attr]) return; // veneer tags will change themselves
				veneer.raiseEvent('update', dElm, e.detail );  
				veneer.raiseEvent('input', dElm, e.detail );
				veneer.raiseEvent('change', dElm, e.detail ); 

			});
		}
	}
},
css: "veneer-attrib { display: inline-block; } "
});;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-attriball',
	version: '1.0.0', tags: 'native control',
	purpose: 'syncs many inputs to a single. expects an input inside and a target attrib that points to the inputs you want to sync value or checked to',
	attribs: { 
		target: 'a CSS selector hitting all inputs that should be synced/checked/unchecked' ,
		prop: 'name of target elm property to alter'
	},
	events:  [ 'insert', 'change'	]
 }
**/

//////////////////////////////////////////////
 
veneer("veneer-attriball", {
events: {
	
	insert: function(e){ 
		var elm=e.target,
		prop=elm.prop || "checked",
		inp=elm.querySelector("input,select");
		if(!inp){ return console.error("no input found in veneer-attriball tag", elm); }
		if(!elm.target){ return console.error("no target attrib found on veneer-attriball tag", elm); }
	
		inp.addEventListener("change", function(){		
			var val=inp[prop];
			elm._dest=veneer.$(elm.target);
			elm._dest.forEach(function(a){
				if(a[prop]!=val){ 
					a[prop]=typeof val ==="function" ? val.call(a) : val;
				}
			});
		
			veneer.raiseEvent("change", a);
			
		}, true);
	}
},
props:{
	target: String,
	prop: String
},
defaults:{
	prop: "checked"
}

});
  ;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-attributes',
	version: '1.0.0', tags: 'native ui',
	purpose: 'Add attribs to tags using CSS selectors, good for turning clean markup into bootstrap components.',

	attribs: { 
		target: ' a CSS selector of elements to alter the attributes of',
		rules: ' kinda like CSS: a selector on the left, but in the braces is a list of attribs and values exactly as they would appear in a tag opening'
	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 (function(){
	
	
	
 veneer("veneer-attributes", {
	events: {
	
		update:  function(e){ 
			var elm=e.target, 
			targ=elm.target||"";
					
		//allow inserting an empty tag with a target attrib pointing to another veneer-attributes to re-run:
		if(targ && (targ=veneer.$(targ)) && targ.length==1 && targ[0].tagName.toLowerCase()=="veneer-attributes"){
			return targ[0].change();			
		}
			
		var rules=elm.textContent.split("}")
		 .filter(String)
		 .map(Function.call.bind("".trim))
		 .map(function(a,b){ return a.split("{");})
		.map(function(a,b,c){
			var temp=veneer.elm("div",{},"<b "+a[1]+"></b>").children[0], 
				 o={};
			[].map.call(temp.attributes, function(a){o[a.name]=a.value;});
			return a[0] && [a[0], o];
		}).filter(Boolean);


	
		rules.map(function(rule){
			var elms=veneer.$(rule[0]),
				changes=rule[1];
			if(elms.length===0){return console.warn("veneer-attributes found no attribute list defined inside selector " + rule[0]);}
			
			elms.map(function(element){
				Object.keys(changes).forEach(function(change){
				
					element.setAttribute(change, this[change]);
				}, changes );
			});
		});
					
			 
			  
		}
	},
	props:{
		rules: veneer.k,
		target: veneer.k
	},
	 css: "veneer-attributes{display:none;white-space: pre;}"
  });
  

  

  
 }());;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-bootstrap',
	version: '1.0.0', tags: 'native util bootstrap external',
	purpose: 'Loads bootstrap CSS and JS packages',
	attribs: { 
		js: "should jQuery and bootstrap.js be included?",
		icons: "should font awesome be loaded? ",
		widgets: "should tab, accordion, and modal widget be loaded? (bs-tags)"
	},
	events:  [ 'insert' ]
 }
**/

//////////////////////////////////////////////
veneer("veneer-bootstrap", {
events: {
	insert: function ldr(e){ 
	var elm=e.target, href="", V=veneer;

	if(!V.$("link[href*='bootstrap']")[0]){
		V.$("head")[0].appendChild(V.elm("link",{href:"https://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css", rel: "stylesheet" }));
	}

	if(elm.icons){
		if(!V.$("link[href*='font-awesome']")[0]){
	V.$("head")[0].appendChild(V.elm("link",{href:"https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css", rel: "stylesheet" }));
		}
	}

	if(elm.js && !elm.widgets){			
		if(!window.jQuery){
			V.include(["https://code.jquery.com/jquery-latest.min.js"]);
		}
	}
	
	if(elm.widgets){
		document.body.appendChild(V.elm("veneer-bs"));
		V.include(["http://danml.com/veneer/lib/files/veneer-bs.js"]);
	}
	
	function onJq(){
		if(!window.jQuery){ return setTimeout(onJq, 36); }
		if(elm.js){ V.include("//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"); } 
		eval(elm.innerHTML);
	}
	
	if(elm.innerHTML.trim() && (elm.widgets || elm.js)){
		onJq();
	}
		
	}
},

props:{
	js: veneer.bool,
	widgets: veneer.bool,
	icons: veneer.bool
},

css: "veneer-bootstrap { white-space: pre;display:none; } bs-modal {display:none; }"

});
  ;
/**  veneer.js custom html tag definition {
	tagName: 'veneer-cal',
	version: '1.0.2', tags: 'native date',
	purpose: 'turns a GMT or UTC or ISO Date stamp into a human-friendly month view',
	example: "<veneer-cal></veneer-cal>",
	attribs: { 
		time: 'a standard datestamp parse-able by window.Date() ',
		value: 'alias for time attribute (for API consistency)'},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
(function(){
	
veneer("veneer-cal", {
events: {
	update: function(e){ 
		var elm=e.target;
		elm.innerHTML=calendar(new Date(+elm.time||elm.time||+elm.value||elm.value||+new Date()));
	}
},
css: ".cal td { width: 14.2%; } .cal-day1, .cal-day7 { opacity: 0.8; } .cal-today { font-weight:bold }",
props:{
	time: veneer.k,
	value: veneer.k
}
}); 

function calendar(c){var C,n,fd,sd,a=[],i,b=c=c||new Date,e=[31,28,31,30,31,30,31,31,30,31,30,31],year=b.getYear()+1900,d=b.getDate();if(0==year%4&&0!=year%100||0==year%400)e[1]=29;n=e[b.getMonth()],fd=b,fd.setDate(1),sd=fd.getDay(),a.push("<table class=cal width=100% border=0 cellspacing=0 cellpadding=0><tr><th colspan=7>")," 1 2 3 4 5 6 7 8 9101112".substring(2*b.getMonth(),2*(b.getMonth()+1)),b="JanFebMarAprMayJunJulAugSepOctNovDec".substring(3*b.getMonth(),3*(b.getMonth()+1)),a.push(b+" "+year),a.push("</th></tr>\n	<tr class=daynames><td>Sun</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td>"),a.push("</tr><tr>");for(i=C=0;i<sd;i++)a.push("<td> </td>"),C++;for(i=1;i<=n;i++)a.push("<td data-date='"+c.getMonth()+"-"+i+"'>"),0==C&&a.push('<span class=cal-day1>'),6==C&&a.push('<span class=cal-day7>'),i==d&&a.push('<span class=cal-today>'),a.push(i),6!=C&&0!=C&&i!=d||a.push("</span>"),C++,a.push("</td>"),7==C&&(a.push("</tr><tr>"),C=0);return a.push("</tr></table>"),a.join("\n	")}
}());;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-classes',
	version: '1.0.0', tags: 'native ui',
	purpose: 'Add classes to sub-tags using CSS selectors, good for turning clean markup into bootstrap components.',

	attribs: { 
		target: ' a CSS selector of elements to alter the attributes of',
		rules: ' kinda like CSS: a selector on the left, but in the braces is a list of classes, exactly as they would appear in an html class attribute'
	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 (function(){
 
 
 var used={};
 
 veneer("veneer-classes", {
	events: {
	
		update: function upd(e){ 
			var elm=e.target, rules=elm.rules||"";
			
			if(elm.target){ elm=veneer.$(elm.target)[0]; }
			
			
			rules.trim()
			 .split("}")
			 .filter(String)
			 .map(Function.call.bind("".trim))
			 .map(function(a,b){ b=a.split("{");b[1]=b[1].trim().split(/\s+/).filter(String); return b; })
			 .map(function(a,b,c){
				var sel=a[0], 
				      r=a[1],
					  t=veneer.$(sel, elm);
					  
					  
					  if(!t.length){
							used[sel]=used[sel]||1;
							if(used[sel]++<29) setTimeout( upd.bind(this,e) , 70);
							return ;
						}
					  t.map(function(targ){
						r.map(function(cls){
							
							if(targ.classList)return targ.classList.add(cls);
							
							var _=" ",
								c= _+ (targ.className||"") + _;								
							if(c.indexOf(_+cls+_)===-1){
								targ.className+=" " + s; 
							}
						});//end class map
					  });//end target map
			 });
			
		}
	},
	props:{
		rules: String,
		target: veneer.k
	},
	 css: "veneer-classes{display:inline-block;}"
  });
  
  }());;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-clock', 
	version: '1.0.1', tags: 'native',
	purpose: 'Displays the local time, constantly updated.',
	example: "<veneer-clock></veneer-clock>, w/seconds: <veneer-clock seconds></veneer-clock>",
	attribs: { seconds: 'Should the clock display seconds? ', value: 'the current time as a date object' },
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-clock", {
events: {
update: function(e){ 
	var elm=e.target,
	showSeconds=elm.seconds;
	
	function updateTime(){ 
		var val=elm.value=new Date();
		elm.innerHTML= val
		 .toTimeString()
		 .slice(0, showSeconds ? 8 : 5);
	}
	
	updateTime();
	clearInterval(elm.timer);
	elm.timer=window.setInterval( updateTime, 1000 );
}
},
props: {
	seconds: veneer.bool
},
defaults:{
	seconds: false,
	value: veneer.k
}
});
  

;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-csv',
	version: '1.0.0', tags: 'native data grid',
	purpose: 'Displays an HTML table made from simple comma-separated-values inside the tag ',
	attribs: { 	
		caption: 'text to show above the table',
		src:	'a url from which to load the CSV data',
		interval: 'a number of seconds to wait before re-loading a csv URL, 0 for no reloading'
	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////



veneer("veneer-csv", {
	methods: {
		render: function(data){
			var tab=this.tab;
			this._data=data||this._data||{};
			data.map(function(row, rowNum){
					var tr=tab.insertRow();
					row.map(function(cell){
						 if(!rowNum){ return tr.appendChild(veneer.elm("th")).innerHTML=cell;}
						tr.insertCell().innerHTML=cell;			
					});
				});
				
		},
		renderURL: function(data){
			
			var d=data.query.results.row.map(function(row){
				return Object.keys(row).map(function(col, i){
					return row[col];					
				});
			});
			this.setAttribute("data-done", true );
			this.render(d);
		}
	},
	
	events: {
		insert: function(e){
			var elm=e.target;
			elm.id=elm.id||"csv"+Math.random().toString().slice(-4);
			if(elm.getAttribute("data-done") ){return;}
			var data=elm._data || (elm._data=elm.innerHTML.trim());
			elm.innerHTML="";

			var tab=elm.appendChild(veneer.elm("table"));
			if(elm.caption && String(elm.caption).trim() ){
				tab.appendChild(veneer.elm("caption")).innerHTML=elm.caption;
			}

			elm.tab=tab;
			
			var src= "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20csv%20where%20url%3D'"+
				encodeURIComponent(elm.src) +
			"'%20&format=json&callback="+elm.id+".renderURL";
			if(!elm.src){				
				elm.render(data.split(/\r?\n/).map(function(a){return a.split(",");}));
				elm.setAttribute("data-done", true );
			}else{
				veneer.include(src);
				if(elm.interval){ clearInterval(elm.timer); elm.timer=setInterval(veneer.include.bind(this, src), elm.interval*1000); }
			}
			

		}
	},
	props:{
		caption: veneer.k,
		src: veneer.k,
		interval: Number
	}, 
	css:  "veneer-csv {display: block; white-space: pre; } \n"+
	"veneer-csv table { width: 99%; }   \n"+
	"veneer-csv[data-done] { white-space: normal; }  " 
  });;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-date',
	version: '1.0.2', tags: 'native date',
	purpose: 'turns a GMT or UTC or ISO Date stamp into a human-friendly date in the local timezone, as provided by the browser',
	example: "<veneer-date></veneer-date>",
	attribs: { 
		time: 'a standard datestamp parse-able by window.Date() ',
		value: 'alias for time attribute (for API consistency)'	
	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////

veneer("veneer-date", {
events: {
	update: function(e){ 
		var m=e.target, d=veneer.date(+m.time||m.time||+m.value||m.value||new Date());
		m.innerHTML= [d.getMonth()+1, d.getDate(), d.getFullYear()].map(function(a,b){ 
			return "<span class='dt_seg_"+b+ "'>"+a+"</span>";
		}).join(" / ");
	}
},
props:{
	time: veneer.k,
	value: veneer.k
}
});
  ;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-datediff',
	version: '1.0.2', tags: 'native date',
	purpose: 'turns a GMT or UTC or ISO Date stamp into a human-friendly counter of the hours+mins (etc etc) since or until. highly customizable with CSS classes, ~ selectors, and :first-word pseudos',
	attribs: { 
			time: 'a standard datestamp parse-able by window.Date() ' , 
			continuous: 'a boolean indicating constant updates or not',
			interval: 'the # of seconds after which to update. defaults to 1 with continuous, 0 (disabled) without',
			value: 'alias for time attribute (for API consistency)'	
	},
	example: "<veneer-datediff time='2000-01-01T20:37:38.472Z'></veneer-datediff>",
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////

(function() {


function dateDiff(d1,d2,elm){function parts(date){return date.toISOString().split(/[\-T:.]/).slice(0,-1).map(Number);}
var d=d2-d1,r1=parts(d1),r2=parts(d2),r=r1.map(function(a,b){return this[b]-a;},r2).map(function(a,b){if(a<0){a=[0,12,30,24,60,60][b]+a;}
return a;});if(elm){elm.title=new Date(d1).toLocaleString();}
var empty=true;return r.map(function(a,b){if(!a&&empty){return"";}
empty=false;var d=this[b].replace(a!=1?"X":/s$/,"");if(elm){elm.setAttribute(this[b],a);}
return"<span class='dt_"+this[b]+"'>"+a+" "+d+"</span>";},["years","months","days","hours","mins","secs"]).filter(String).join("<span class=sep>, </span>");}

veneer("veneer-datediff", {
events: {
	insert: function ins(e){
		var elm=e.target || this;
		elm._isCont=elm.hasAttribute("continuous");		
		elm.change();
	},
	update: function upd(e) {
		var elm = e.target || this, buff;
			if (!(elm.time||elm.value))return;
			clearTimeout(elm.timer);

			try{ buff=dateDiff(new Date(+elm.time||elm.time||+elm.value||elm.value||new Date), new Date(), elm); }catch(y){}
			if(buff && buff!=elm._buff) elm.innerHTML= elm._buff=buff;
			if (elm.continuous || (!elm._isCont && elm.interval) ) {
				elm.timer = setTimeout(upd.bind(elm, e), (1000*elm.interval) || 1000);
			}
	}
},
props: {
	time: veneer.k,
	continuous: veneer.bool,
	interval: Number,
	value: veneer.k
}
});
}());
;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-dateformat',
	version: '1.0.1', tags: 'native date',
	purpose: 'turns a GMT or UTC or ISO Date stamp into a custom-formatted date in the local timezone, as provided by the browser. Syntax based on php, coldFusion, et al; See <a href="http://blog.stevenlevithan.com/archives/date-time-format">Steven Levithan\'s docs</a> for info',
	example: "<veneer-dateformat format='dddd, mmmm dS @ h:MM:ss TT' ></veneer-dateformat>",
	attribs: { 
		time: 'a standard datestamp parse-able by window.Date() ',
		format: 'a date formatting string, see docs for details',
		value: 'alias for time attribute (for API consistency)'	
	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
(function(){	
// from http://blog.stevenlevithan.com/archives/date-time-format  ,
//  Date Format 1.2.3 (c) 2007-2009 Steven Levithan <stevenlevithan.com> MIT license
var dateFormat=function(){var s=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,t=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,u=/[^-+\dA-Z]/g,d=function(a,c){a=String(a);for(c=c||2;a.length<c;)a="0"+a;return a};return function(a,c,h){var f=dateFormat;1!=arguments.length||"[object String]"!=Object.prototype.toString.call(a)||/\d/.test(a)||(c=a,a=void 0);a=a?new Date(a):new Date;if(isNaN(a))throw SyntaxError("invalid date");
c=String(f.masks[c]||c||f.masks["default"]);"UTC:"==c.slice(0,4)&&(c=c.slice(4),h=!0);var b=h?"getUTC":"get",g=a[b+"Date"](),m=a[b+"Day"](),k=a[b+"Month"](),n=a[b+"FullYear"](),e=a[b+"Hours"](),p=a[b+"Minutes"](),q=a[b+"Seconds"](),b=a[b+"Milliseconds"](),l=h?0:a.getTimezoneOffset(),r={d:g,dd:d(g),ddd:f.i18n.dayNames[m],dddd:f.i18n.dayNames[m+7],m:k+1,mm:d(k+1),mmm:f.i18n.monthNames[k],mmmm:f.i18n.monthNames[k+12],yy:String(n).slice(2),yyyy:n,h:e%12||12,hh:d(e%12||12),H:e,HH:d(e),M:p,MM:d(p),s:q,
ss:d(q),l:d(b,3),L:d(99<b?Math.round(b/10):b),t:12>e?"a":"p",tt:12>e?"am":"pm",T:12>e?"A":"P",TT:12>e?"AM":"PM",Z:h?"UTC":(String(a).match(t)||[""]).pop().replace(u,""),o:(0<l?"-":"+")+d(100*Math.floor(Math.abs(l)/60)+Math.abs(l)%60,4),S:["th","st","nd","rd"][3<g%10?0:(10!=g%100-g%10)*g%10]};return c.replace(s,function(a){return a in r?r[a]:a.slice(1,a.length-1)})}}();
dateFormat.masks={"default":"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};dateFormat.i18n={dayNames:"Sun Mon Tue Wed Thu Fri Sat Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),monthNames:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec January February March April May June July August September October November December".split(" ")};



 
veneer("veneer-dateformat", {
events: {
	update: function(e){ 
		var elm=e.target;
		elm.innerHTML= dateFormat( new Date(+elm.time||elm.time||+elm.value||elm.value|| new Date()), elm.format.trim() );
	}
},
props:{
	time: veneer.k,
	format: String,
	value: veneer.k
}
});
}());;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-dateinput',
	version: '1.0.0', tags: 'native date input controls',
	purpose: 'a more usable date input with click-able calendar and drop-downs for date parts',
	example: "<veneer-dateinput></veneer-dateinput>",
	attribs: { 
		value: 'a standard datestamp parse-able by window.Date() to set, or a Date object to get ',
		name: 'a field name to use when submitting the date picker, just like an <input>',
		target: 'CSS selector of input(s) to set the value of to the picked date. highly optional.'},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////

(function(){

var V=veneer;

V("veneer-dateinput", {
content: "<span class=dtcont><button type=button  onclick='parentNode.parentNode.next();return false;'> &lt; </button>"+
		"<input value='{{value}}' type=hidden />"+			
		"<button type=button onclick='parentNode.parentNode.next(1);return false;'> &gt; </button>"+
		"</span><veneer-cal time='{{value}}'></veneer-cal>",

events: {
	insert: function(e){
		var E=e.target;
		E._temp= E.innerHTML;			
		E.innerHTML=V.template(E, E._temp);
		if(!E.value){e.value=new Date();}
		E.cal=E.getElementsByTagName("veneer-cal")[0];			
		E.inp=E.getElementsByTagName("input")[0];
		E.inp.onchange=function(){E.value=new Date(this.value);};	
		if(E.name)E.inp.name=E.name;

		function getMonthNames(r){
		  r=[];
		  for(var i=0;i<12;i++)r.push(new Date(2000,i,1).toUTCString().split(/\W+/)[2]);
		  return r;
		}

		function sel(len, offset){
			var os=+offset||0;
			var s=V.elm("select",{"class":"dtchoose"});
			for(var i=os, mx=(len||31)+os;i<mx;i++){
				s.options[s.options.length]=new Option(i+1);
			}
			return s;
		}

		var p=E.inp.parentNode;

		function add(tag, ch){
			var e=p.insertBefore( tag , E.inp);
			e.onchange=ch;
			return e;
		}		

		(E.monthPick=add(V.elm("select"), function(){
			var st=E.value;
			st.setMonth(this.selectedIndex);				
			E.value=st;
		})).title="Choose a Month";			
		getMonthNames().forEach(function(a,b){E.monthPick.options[b]=new Option(a);}); 

		(E.dayPick=add( sel(31), function(){
			var st=E.value, d=st.getMonth();
			st.setDate(this.value);				
			E.value=st;
		})).title="Choose a Date";

		(E.yearPick=add( sel(20, E.value.getFullYear()-10) , function(){
			var st=E.value;
			st.setYear(this.value);				
			E.value=st;
		})).title="Choose a Year";

		E.next=function(isPos){
			var st=E.value, d=st.getMonth();
			st.setMonth(isPos ? d+1 : d-1);				
			E.value=st;
		};		

		E.cal.onclick=function(e){
			var t=e.target,x;
			if(x=+t.textContent){
				var st=E.value, d=st.getDate();
				st.setDate(x);
				E.value=st;
			}
		};

		E.change();

	},

	update: function upd(e){ 
		var E=e.target, 
		val=E.value;
		E.cal.time=val;			
		E.inp.value=val.toUTCString();			
		E.monthPick.value=val.toUTCString().split(/\W+/)[2];
		E.dayPick.value=val.getDate();
		E.yearPick.value=val.getFullYear();
		if(E.target){ veneer.$(E.target).map(function(a){a.value=E.inp.value;});}
	}
},
props: {
	value: veneer.date,
	name: veneer.k,
	target: veneer.k

},
css: ("X {display:inline-block} "+
	"X button { float:right}"+
	"X tr>* {text-align:center}"+
	"X button:first-child{float:left}"+
	"X [colspan='7']{display:none}"+
	"X .cal{cursor:pointer}"+
	"X table.cal {min-height: 10em;}"+
	"X .cal-today{outline: 1px solid #008000;min-width: 2em;display: inline-block;}"+
	"X .dtcont{text-align:center;display:block;margin-bottom:-1em;}"+
	"X select, X button { min-height: 2em;background:none;border:0}"+
	"X button:hover{color:blue}").replace(/X/g,"veneer-dateinput")
});

}());;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-datetime',
	version: '1.0.1', tags: 'native date',
	purpose: 'turns a GMT or UTC or ISO Date stamp into a human-friendly time and date in the local timezone, as provided by the browser',
	example: "<veneer-datetime></veneer-datetime>",
	attribs: { 
		time: 'a standard datestamp parse-able by window.Date() ',
		value: 'alias for time attribute (for API consistency)'	
	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////

veneer("veneer-datetime", {
events: {
	update: function(e){ 
		var m=e.target, d=veneer.date(+m.time||m.time||+m.value||m.value||new Date());
		m.innerHTML=d.toLocaleString();
	}
},
props:{
	time: veneer.k,
	value: veneer.k
}
});;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-file',
	version: '1.0.0', tags: 'native ui',
	purpose: 'A better file upload box, with file meta, and file content change events.',
	example: '<veneer-file multiple accept=image/* ></veneer-file>',
	depends: ['filesize'],
	attribs: { 
		watch: 'if present, watches populated files for changes can re-dispatches the change event when the source file changes on the disk (by another app)',
		name: ' used on the file input for submitting with forms ',
		accept: 'a mime type and/or file name filter to suggest to the OS which kinda of files should be shown in the open dialog',
		multiple: 'should the user be allow to select more than one file? ',
		value: 'used to pre-populate the name that is show, functioning like placeholder on text inputs'
	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 (function(){
		
	
 veneer("veneer-file", {
	content: '<input type="file" /> <label><span class=btn>Choose File...</span></label>',
	events: {
	
	update: function upd(e){ 
	
		var elm=e.target, 
		file,
		inp=elm.children[0],
		url,
		lastDate,
		temp="{{date}} (<veneer-filesize data={{size}}></veneer-filesize>): <b>{{name}}</b> ",
		metaBox=veneer.elm("div", {});
		
		elm.files=inp.files;
		
		if(elm.accept){
			inp.accept=elm.accept;
		}
		
		if(elm.value){
			veneer.$("label span", elm)[0].innerHTML=elm.value;
		}
		
		if(elm.multiple){
			inp.multiple=elm.multiple;
		}
		elm.appendChild(metaBox);

		function updateMeta(){
			
			metaBox.innerHTML= veneer._(inp.files).map(function(file){
				return veneer.template(file, temp);
			}).join("<br>");
		}
		
		function refreshFiles(){
			
			if(veneer._(inp.files).filter(function(file){
				if(file.lastDate==file.lastModifiedDate){return;}
				
				console.log(file);
				
				file.date=new Date(file.lastModifiedDate).toLocaleDateString();
				file.lastDate=file.lastModifiedDate;

				if(window.URL){
					if(file.url){ window.URL.revokeObjectURL(file.url); }
					file.url=window.URL.createObjectURL(file);
				}
				
				return true;
			}).length){
				updateMeta();
			}
			
			
		}
		

		inp.onchange=function(e){
			e.cancelBubble=true;
			e.stopPropagation();
			
			if(!inp.files.length){return;}
			
			elm.files=veneer._(inp.files);
			refreshFiles();
			var oe=elm.getAttribute("onchange");
			if(oe){ setTimeout( Function(oe).bind(elm) , 250); }
			return false;
		};
		
		if(elm.watch){
			clearInterval(upd.timer);
			upd.timer=setInterval(refreshFiles, 1333 );
			
		}
		
		if(elm.name){ inp.name= elm.name; }
		
		
		
		inp.id="i"+Math.random().toString(36).slice(-4);
		veneer.$("label", elm)[0].htmlFor=inp.id;
		
	   }	
	},
	props:{
		name: veneer.k,
		value: veneer.k,
		watch: veneer.bool,
		multiple: veneer.bool,
		accept: veneer.k
	},
	 css: "veneer-file{display:inline-block;} veneer-file input[type=file]{opacity:0.0; display:inline-block; overflow:hidden; width: 5px; height: 3px; } "+
	 "veneer-file div {display: inline-block; padding-left:0.7em; vertical-align: top; }"+
	 "veneer-file span { border: 1px solid #bbb; background:#ddd; text-align: center; display: inline-block; min-width: 5em;  }"
  });
  
  
  
 }());;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-filesize',
	version: '1.0.0', tags: 'native numbers',
	purpose: 'Displays a number of bytes as a human-readable filesize ',
	attribs: { 
		data: 'what number to convert to a file size?',
		places: 'how many decimal places to show? '
	},
	example: "<veneer-filesize data=90210></veneer-filesize>",
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
   veneer("veneer-filesize", {
	
	events: {
		update: function upd(e){ 
		
		function fileSize(f,a){a||0===a||(a=2);
				for(var c=Number(f/1024),d=[["KB",0],["MB",1024],["GB",1048576],["TB",1073741824]],b=d.length,e;b--;)
				  if(e=d[b][1],c>=e)
				      return(b?c/e:c).toFixed(a)+d[b][0];
		}


			var elm=e.target;
			elm.innerHTML=fileSize(elm.data, elm.places)
		}
	},
	props:{
		data: String,
		places: Number
	},
	defaults:{
		places: 2
	},
	css:   ""
  });
  ;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-filter',
	version: '1.0.4', tags: 'native ui ',
	purpose: 'Filters the children of an element using a keyword to search the content or a specific attribute. copies required, type, value, pattern, and placeholder attributes to inner search form input ',
	attribs: { 
		target: 'Selector of element to filter the children of',
		many: 'Switches target to take a css selector of actually filtered elements instead of parent',
		attrib: 'specifies an attribute to filter by, like title, rel, data-category, class, etc',
		prop: 'in lieu of attrib, specifies the DOM property to compare with the term to filter by.',
		expr:	'in lieu of attrib and prop, an expression to run on the element using "this" to point to the element, ex: this.dataset.lastName'
	},
	events:  [ 'insert', 'update', 'filtered' ]
 }
**/

//////////////////////////////////////////////

veneer("veneer-filter", {

events: {
	update: function(e){
	},
	insert: function upd(e){ 
		var elm=e.target,
		 dest=elm._dest=veneer.$(elm.target),
		 inp=elm.children[0],
		 x;
		 
		elm._total=false;
		elm._shown=false;
			
		if(!inp){ inp=elm.appendChild(veneer.elm("input",{type:"search"})); }
		
		inp.title=inp.title="Enter search term to filter:\n Use space to seperate terms\n Use quoted for an exact match\n Use a /RegExp/i for power";

		"placeholder,pattern,required,value,type,min,max".split(",").forEach(function(k){
			var at=elm.getAttribute(k);	
			if(at) inp[k]=at;
		});
	
		function show(e) {e.style.display='';}
		function hide(e) {e.style.display='none';}

		function kickit(){
			var dest=elm._dest=veneer.$(elm.target);
		
			var total=0, shown=0;
			elm._value=inp.value.toLowerCase().trim();
			
			dest.forEach(function(dest){
				var kids= elm.many ? [dest] : veneer._(dest.children),
				 prop=elm.prop || "textContent",
				 attrib=elm.attrib || "",
				 xpr=elm.expr || "",
				 s=inp.value.toLowerCase().trim(),
				 str=s.split(/\s+/).filter(String),
				 V= function (elm){
					return elm[prop] !=null ? elm[prop] : "";
				};
				
				if(attrib){
					V=function (elm){
						return elm.getAttribute(attrib)||"";
					};
				}
				
				if(xpr){
					V=Function.call.bind(Function("a", "return "+xpr));
				}
				
				function findOne(a){
					if( String(  V(a) ).toLowerCase().indexOf(str)!==-1){ 
						show(a); 
						shown++;
					}else{
						hide(a);
					}
				}
				function findMany(a){
					if( str.every(function(x){return String(  V(a)  ).toLowerCase().indexOf(x)!==-1;})){ 
						show(a); 
						shown++;
					}else{
						hide(a);
					}
				}
				function findRX(a){
					if( str.test( V(a) )  ){ 
						show(a); 
						shown++;
					}else{
						hide(a);
					}
				}

				total+=kids.length;
				
				if(s.slice(0,1)==='"' && s.slice(-1)==='"'){ str=[s.slice(1,-1)]; }//handle literals as all one

				if( /^\/[\w\W]+\/[igm]*$/.test(s) ){ try{str=rx(s);}catch(y){return;} return kids.forEach(findRX); }
				if( !str[0] ){ return kids.forEach(show); }
				if( str.length<2 ){ str=str[0]; return kids.forEach(findOne); }

				kids.forEach(findMany);

			});//end dest map
			
			elm._total=total;
			elm._shown=elm._value ? shown : total ;
			veneer.raiseEvent("filtered", elm);	
			elm.change();
			
		}//end kickit()

		
	inp.oninput=function kick(){
		clearTimeout(kick.timer);
		kick.timer=setTimeout(kickit, 200);			
	};

	function rx(r){
		var s=String(r),
		p=s.split(/\//).slice(1),
		flags=p.pop(),
		bod=p.join("/");
		return new RegExp(bod, flags);
	}

		
	//if(inp.value) 
	setTimeout(kickit, 200);
	
	}//end insert
},
props:{
	target: String,
	many: veneer.bool,
	attrib: veneer.k,
	prop: veneer.k,
	expr: veneer.k
},
defaults:{
	prop: "textContent"
},
css:   ""
});
  ;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-html',
	version: '1.0.0', tags: 'native text',
	purpose: 'Displays HTML code for humans to read. see also: [veneer-syntax] ',
	example: '<veneer-html> A BR tag (<br />) inserts line breaks</veneer-html>',
	attribs: { },
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-html", {
	events: {
		insert: function(e){ 
			var op=new Option(e.target.innerHTML);
			e.target.innerHTML=op.innerHTML;
			e.target.className="busy";
			setTimeout(function(){e.target.className="";}, 250);
		}
	},
	css: "veneer-html { white-space: pre-wrap; } "
  });
  ;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-input',
	version: '1.0.0', tags: 'native ui',
	purpose: 'Makes wrapped form inputs self-publish to attributes, allowing html snapshots to retain input state',
	example: '<veneer-input> watch value attrib via inspector while typing: <input></veneer-input>',
	attribs: { 
		
	},
	events:  [ 'insert' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-input", {
	events: {
	
		insert: function ins(e){ 
			var elm=e.target,
				kids=veneer.$("input,select", elm);
				if(kids.length===0){
					return setTimeout(ins.bind(this, e), 500);
				}
				//console.log(kids);
				elm._kids=kids;
				kids.map(function(inp){
					inp._input=elm;
					
					function handleUpdate(e){
						if(inp.options){
							var si=inp.selectedIndex;
							
							veneer.$(":selected").map(function(a){
								a.removeAttribute("selected");
							});
							return inp.options[si].selected=true;
						}
						
						if(inp.type=="radio"||inp.type=="checkbox"){return inp.checked ? inp.setAttribute("checked","") : inp.removeAttribute("checked");}
						return inp.setAttribute("value", inp.value);
					
					}
					
					inp.addEventListener("input", handleUpdate , false);
					inp.addEventListener("change", handleUpdate , false);
					
				});

		}
	},
	css: "veneer-input{ display: inline-block; }",
	props:{
		
	}
  });
  ;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-item',
	version: '1.0.0', tags: 'native control',
	purpose: 'Builds or Displays an object from a set of form elements',
	example: ' inspect the value property of the item tag: <veneer-item>age:<input name=age type=number> <br />city:<input name=city></veneer-item>', 
	attribs: { value: 'an object keyed by id/name and valued by values of form controls inside the tag',
			query: '[read-only] a string representing the serialized value of the items (what a form would GET if submitted)' },
	events:  [ 'insert' ],
	methods: {
		reset: 'returns the wrapped form elements to initial values/states'
	}
 }
**/

//////////////////////////////////////////////

(function(){
	
	function val(inp){
		if(inp.type=="radio"||inp.type=="checkbox"){return inp.checked;}
		if(inp.type=="number"||inp.type=="range"){return +inp.value;}
		return inp.value;
	}
	
	function sVal(inp, v){
		if(inp.type=="radio"||inp.type=="checkbox"){return inp.checked=v;}
		return inp.value=v;
	}

veneer("veneer-item", {  
	methods: {
		reset: function(){
			var blank={}, inp=veneer.$("input,select,textarea", this)[0]||this;
			Object.keys(this.value).forEach(function(k){this[k]=""}, blank);
			this.render(blank);
			if(inp.focus){inp.focus();}
			return this;
		},
		render: function(v){this._val=this.value=v||this.value;  return this;}
	},
	events: {
		insert: function upd(e){ 
			var elm=e.target;
			if(!elm._temp){ elm._temp=elm.innerHTML; }			
			if(elm.onchange) elm.onchange();
			if(elm.change) veneer.$("input,select,textarea", elm).forEach(function(e){
				e.addEventListener("change", function(){ elm.change(); });
			});
		}
	},
	props:{ 
		query: {
		
			attr: "query",
			observe: false,
			type: String,
			value: "",
			get: function(){ 
				var ret="", x=encodeURIComponent;
				veneer.$("input,select,textarea", this).forEach(function(a){
					if(a.type==="checked"||a.type==="radio"){
						if(!a.checked) return ;
					}
					if(a.id||a.name){ 
						return ret+="&"+x(a.id||a.name)+"="+x(val(a));
					}
				});
				return ret.slice(1);
			},
			set: function(){}
		},
		
		value: {
		
			attr: "val",
			observe: true,
			type: Object,
			value: {},
			get: function(){ 
				var ret={};
				veneer.$("input,select,textarea", this).forEach(function(a){
					if(a.id||a.name){ ret[a.id||a.name]=val(a); }
				});
				return ret;
			},
			set: function(v){
				var elm=this;
				elm._val=v;
				Object.keys(v).map(function(k){
					var inp=veneer.$("[name='"+k+"'],[id='"+k+"']", elm)[0];
					if(inp){ sVal(inp, v[k]); }
				}, v);
				//elm.render();
			}			
		}
	},
	css:  "veneer-item {display: inline-block;  }  " 
});


}());//end privacy;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-loader',
	version: '1.0.0', tags: 'native util',
	purpose: 'Loads a list of resources by URL(s), one per line. should be a css or js url, or use a CSS: or JS: prefix on non-resty URLs ',
	attribs: { },
	events:  [ 'insert' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-loader", {
	events: {
		insert: function ldr(e){ 
		 var cache=veneer.loader||(veneer.loader={});
		 
		var elm=e.target;
			
			var lines=elm.innerHTML.trim().split(/\s+/).filter(Boolean).map(function(a){return a.trim();}),
			 css=lines.filter(/./.test, /(^CSS:)|(\.css([\?#]|$))/i),
			 js=lines.filter(/./.test, /(^JS:)|(\.js([#\?]|$))/i);
			 
					
             js=js.filter(function(href){
				try{if(cache[href]  || veneer.$("script[src*='"+href.split("/").filter(Boolean).pop()+"']")[0] ){return;}}catch(y){}
				return cache[href]=+new Date();
			 }); 
			
			veneer.include(js);
			
			var hd=veneer.$("head")[0];
			css.filter(Boolean).map(function(href){
				href=String(href).trim();
				if(cache[href] || veneer.$("link[href*='"+href.split("/").filter(Boolean).pop()+"']")[0] ){return;}
				    cache[href]=+new Date();
					hd.appendChild(veneer.elm("link",{href:href, rel: "stylesheet" }));
					
			});
		}
	},
	css: "veneer-loader { white-space: pre;display:none; } "
  });
  ;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-map',
	version: '1.0.0', tags: 'native ui geo external',
	purpose: 'Displays a google map via lat, lon, and zoom coords given as attribs ',
	attribs: { 
		lat: 'the latitude of the top-left corner of the map' ,
		lon: 'the longitude of the top-left corner of the map' ,
		zoom: 'what zoom level should the map be at ? ~(5-25)' ,
		height: 'how many pixels tall should the map be? ' ,
		width: 'how many pixels wide should the map be?' 
	},
	events:  [ 'click', 'update' ]
 }
**/

//////////////////////////////////////////////



veneer("veneer-map", {
	content:  "<img />",
	events: { 
		update: function(e){
			var elm=e.target;
			elm.children[0].src="http://maps.googleapis.com/maps/api/staticmap?center="+this.lat+
				","+this.lon+"&zoom="+this.zoom+"&size="+this.width+"x"+this.height;

			elm.className+=" busy";
			setTimeout(function(){elm.className=elm.className.replace(/\bbusy\b/,"").trim();}, 333 );
		}
	},


	props:{ // prop/attrib value casting function (name remains identical on both attrib and prop)
		lat:	Number,
		lon:	Number,
		zoom:	Number,
		height: Number,
		width: Number

	},

	defaults:{ //default values for props:
		lat:	40.714728,
		lon:	-73.998672,
		zoom:	5,
		width: 400,
		height: 400
	}
  });;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-mustache',
	version: '1.0.6', tags: 'text template',
	purpose: 'Turns a mustache template (inside) to a fancy html view by calling render() with some data',
	attribs: { 
		url: 'a jsonp URL calling the element.render method to update the template',
		src: 'the URL location of a standard JSON resource to update the templated data',
		object: 'the JS window path of an existing object to render the template with',
		target: 'renders the template content to another tag, chosen by this CSS selector',
		interval: '# of seconds after which to auto-re-render or reload external content',
		static: 'if present, tag will never update after first render, and wont respond to interval to save RAM/CPU',
		tag: 'the name of a temp tag to use when parsing mustache output, normally div, but alllows tbody for generating TR tags'
	},
	externals: ['//js.zapjs.com/js/zap.plugin.mustache.js'],
	methods: {
		render:'(objData) - updates the html by apply the tags mustache template to the data',
		prepend:'(opt_objData) - runs the template and prepends the result to the target',
		apppend:'(opt_objData) - runs the template and appends the result to the target'
		},
	events:  [ 'insert', 'update' ]
 } 
**/

//////////////////////////////////////////////
(function(){

// mostache, mo'mustache 8.2a (mustache 8.1 fork )
;(function(A,h){"object"==typeof exports&&exports?h(exports):"function"==typeof define&&define.amd?define(["exports"],h):h(A.Mustache={}),h.global=A})(this,function mostache(h){function D(a,c){return c.split(/[\.,]/).reduce(function(b,a){return b&&b[a]},a)}function v(a){return"function"==typeof a}function x(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function E(a,c){function b(a){"string"==typeof a&&(a=a.split(F,2));if(!y(a)||2!==a.length)throw Error("Invalid tags: "+a);d=new RegExp(x(a[0])+"\\s*"),r=new RegExp("\\s*"+x(a[1])),B=new RegExp("\\s*"+x("}"+a[1]))}if(!a)return[];var f=[],e=[],w=[],m=!1,l=!1,d,r,B;b(c||h.tags);for(var g=new u(a),p,k,n,t;!g.eos();){p=g.pos;if(n=g.scanUntil(d)){t=0;for(var q=n.length;t<q;++t)if(k=n.charAt(t),G.call(H,k)?l=!0:w.push(e.length),e.push(["text",k,p,p+1]),p+=1,"\n"===k){if(m&&!l)for(;w.length;)delete e[w.pop()];else w=[];l=m=!1}}if(!g.scan(d))break;m=!0,k=g.scan(I)||"name",g.scan(J),"="===k?(n=g.scanUntil(C),g.scan(C),g.scanUntil(r)):"{"===k?(n=g.scanUntil(B),g.scan(K),g.scanUntil(r),k="&"):n=g.scanUntil(r);if(!g.scan(r))throw Error("Unclosed tag at "+g.pos);t=[k,n,p,g.pos],e.push(t);if("#"===k||"^"===k)f.push(t);else if("/"===k){k=f.pop();if(!k)throw Error('Unopened section "'+n+'" at '+p);if(k[1]!==n)throw Error('Unclosed section "'+k[1]+'" at '+p)}else"name"===k||"{"===k||"&"===k?l=!0:"="===k&&b(n)}if(k=f.pop())throw Error('Unclosed section "'+k[1]+'" at '+g.pos);return L(M(e))}function M(a){for(var c=[],b,f,e=0,h=a.length;e<h;++e)(b=a[e])&&("text"===b[0]&&f&&"text"===f[0]?(f[1]+=b[1],f[3]=b[3]):(c.push(b),f=b));return c}function L(a){for(var c=[],b=c,f=[],e,h=0,m=a.length;h<m;++h)switch(e=a[h],e[0]){case"#":case"^":b.push(e),f.push(e),b=e[4]=[];break;case"/":b=f.pop(),b[5]=e[2],b=0<f.length?f[f.length-1][4]:c;break;default:b.push(e)}return c}function u(a){this.tail=this.string=a,this.pos=0}function q(a,c){this.view=null==a?{}:a,this.cache={".":this.view},this.parent=c}function s(){this.cache={}}var N=Object.prototype.toString,y=Array.isArray||function(a){return"[object Array]"===N.call(a)},G=RegExp.prototype.test,H=/\S/,O={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},J=/\s*/,F=/\s+/,C=/\s*=/,K=/\s*\}/,I=/#|\^|\/|>|\{|&|=|!/;u.prototype.eos=function(){return""===this.tail},u.prototype.scan=function(a){return a=this.tail.match(a),!a||0!==a.index?"":(a=a[0],this.tail=this.tail.substring(a.length),this.pos+=a.length,a)},u.prototype.scanUntil=function(a){a=this.tail.search(a);var c;switch(a){case-1:c=this.tail,this.tail="";break;case 0:c="";break;default:c=this.tail.substring(0,a),this.tail=this.tail.substring(a)}return this.pos+=c.length,c},q.prototype.push=function(a){return new q(a,this)},q.prototype.lookup=function(a){var c=this.cache,b,f,e=[],h;-1!==a.indexOf("|")&&(f=a.trim().split(/\s*\|\s*/).map(function(a,b){return"."===a.slice(0,1)&&(e[b-1]=!0,a=a.slice(1)),a}),a=f.shift());if(a in c)b=c[a];else{for(var m=this,l,d;m;){if(0<a.indexOf("."))for(b=m.view,l=a.split("."),d=0;null!=b&&d<l.length;)h=b,b=b[l[d++]];else b=m.view[a];if(null!=b)break;m=m.parent}c[a]=b}return f&&f.forEach(function(c,f){var g=c.split("(");c=g.shift(),g.length&&(g=g[0].trim().split(")")[0].trim().split(/\s*\,\s*/).map(function(a){try{return JSON.parse(a)}catch(b){return a}}));var d=D(e[f]?void 0===b?a:b:mostache.global,c);if("function"==typeof d){void 0===b&&(b=a);try{if(e[f])g.length?b=d.apply(b,g):b=d.call(b);else if(g.length)switch(g.length){case 1:return b=d(b,g[0]);case 2:return b=d(b,g[0],g[1]);case 3:return b=d(b,g[0],g[1],g[2]);default:return d.apply(this,[b].concat(g))}else b=d(b)}catch(h){}}}),v(b)&&(-1!==String(b).indexOf("[native code]")&&h?b=b.call(h):b=b.call(this.view)),b},s.prototype.clearCache=function(){this.cache={}},s.prototype.parse=function(a,c){var b=this.cache,f=b[a];return null==f&&(f=b[a]=E(a,c)),f},s.prototype.render=function(a,c,b){var f=this.parse(a);return c=c instanceof q?c:new q(c),this.renderTokens(f,c,b,a)},s.prototype.renderTokens=function(a,c,b,f,e){function q(a){return m.render(a,c,b)}e="";for(var m=this,l,d,r="$1",s=/\{SEP\}([\w\W]+?)\{\/SEP\}/g,g=0,p=a.length;g<p;++g)switch(l=a[g],l[0]){case"#":d=c.lookup(l[1]);if(!d)continue;if(y(d))for(var k=0,n=d.length;k<n;++k)r=n-1===k?"":"$1",e+=this.renderTokens(l[4],c.push(d[k]),b,f).replace(/\{INDEX\}/g,k+1).replace(s,r);else if("object"==typeof d||"string"==typeof d)e+=this.renderTokens(l[4],c.push(d),b,f).replace(s,r);else if(v(d)){if("string"!=typeof f)throw Error("Cannot use higher-order sections without the original template");d=d.call(c.view,f.slice(l[3],l[5]),q),null!=d&&(e+=d)}else e+=this.renderTokens(l[4],c,b,f);break;case"^":d=c.lookup(l[1]);if(!d||y(d)&&0===d.length)e+=this.renderTokens(l[4],c,b,f);break;case">":if(!b)continue;d=v(b)?b(l[1]):b[l[1]],null!=d&&(e+=this.renderTokens(this.parse(d),c,b,d));break;case"&":d=c.lookup(l[1]),null!=d&&(e+=d);break;case"name":d=c.lookup(l[1]),null!=d&&(e+=h.escape(d));break;case"text":e+=l[1]}return e},h.name="mustache.js",h.version="0.8.1mo",h.tags=["{{","}}"];var z=new s;h.clearCache=function(){return z.clearCache()},h.parse=function(a,c){return z.parse(a,c)},h.render=function(a,c,b){return z.render(a,c,b)},h.to_html=function(a,c,b,f){a=h.render(a,c,b);if(!v(f))return a;f(a)},h.escape=function(a){return String(a).replace(/[&<>"'\/]/g,function(a){return O[a]})},h.Scanner=u,h.Context=q,h.Writer=s});





	
	
 veneer("veneer-mustache", {
	events: {
	insert: function(e){
		var elm=e.target;
		
		if(elm.parentNode && elm.parentNode.tagName.match(/^BS\-/i)){ return; } //defer bs widget loading, it will be re-appending in a moment
		
		elm.updateObject=function(){
			try{ elm._data=Function("return 0||"+elm.object)(); }catch(y){}
		};
		
		
		if(!elm._temp){
			var x;
			if((x=veneer.$("template, [type*='template']", elm))[0]){

				function getParents(elm){
				  var r=[elm];
				  while(elm=elm.parentNode) r.push(elm);
				  return r;
				}

				var x3=x.slice(0);
				
				x=x.filter(function(a){
				   var p=getParents(a), 
				   ok=false;
					p.some(function(aa){ 
					   if(aa && aa.tagName && aa.tagName.toLowerCase()=="veneer-mustache"){
							if(aa===elm){ return ok=true;} // next up mustache tag is elm, use this template
							return true;// next up mustache tag is not elm, skip this template
						}
					});
				   return ok;
				});
				
				elm._temp=(x[0]||elm).innerHTML;
			}else{
				elm._temp=elm.innerHTML;
			}
		}
		

		elm.render=function(data){
			if(!data){
				if(elm.object && !elm._data ){
					data=elm._data;
				}else{ 
					data=elm._data || {};
				}
			}
			elm._data=data;
			elm.change();
		};
		
		elm.append=function(data, blnPre){
		
			if(!data){
				if(elm.object && elm.updateObject) elm.updateObject();
				if(elm._data) data=elm._data;
			}
		
			if(!data || !elm._temp){
				return false;
			} 
			
			var t=veneer.elm(elm.tag||"div", {}, Mustache.to_html(elm._temp.replace(/@src=/g,"src=").trim()+" ", data));
			var targ=elm.target && veneer.$(elm.target)[0] || elm;
			if(blnPre===true){
				veneer._(t.children).forEach(function(a){targ.insertBefore(a, targ.firstChild);});	
			}else{
				veneer._(t.children).forEach(targ.appendChild.bind(targ));	
			}
			elm.change();			
		};

		elm.prepend=function(data){
			elm.append(data, true);		
		};
		
					
		function doRender(){	
			if(elm.url)veneer.include(elm.url);				
			if(elm.src)veneer.ajax(elm.src, function(e){ elm.render(elm._data=JSON.parse(e)); });
			if(elm._data)elm.render(elm._data);
		}//end dorender
		
		if(elm.interval){ elm._timer=setInterval(doRender, elm.interval * 1000 ); }
		if(elm.object && !elm.data) elm.updateObject();
		doRender(); 
	},
		
	update: function upd(e){ 			
		var elm=e.target;
		elm._data=elm._data||"";

		if(elm.object && elm.updateObject){
			elm.updateObject();
		}
		
		var targ=elm.target && veneer.$(elm.target)[0] || elm;
		
		if(elm._data){
			var b1=elm._last, b2=Mustache.to_html(elm._temp.replace(/@src=/g,"src="), elm._data);
			if(b1!=b2){elm._last=targ.innerHTML=b2;}
		} 
		
		veneer.$("script", targ).forEach(function(script){
			if(script.src){
				veneer.include(script.src);
			}else{
				try{Function("e", script.textContent).call(window, e);}catch(y){}
			}
		});
		
		if(elm.onchange  )	elm.onchange(e);
		if(elm.oninput )	elm.oninput();
		
		if(elm.static){
			elm.interval=elm.object=elm.src=elm.url=elm._data=elm._temp=elm._last="";
			clearInterval(elm._timer); 
		}
		
	}
	},
	props: {
		url: veneer.k,
		src: veneer.k,
		object: veneer.k,
		target: veneer.k,
		"static": veneer.bool,
		interval: Number,
		tag: veneer.k
	},
	css: "veneer-mustache {  } "
  });
  
  
 }());;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-notify',
	version: '1.0.0', tags: 'native interaction',
	purpose: 'Shows a desktop notification to the user, the parts of which are specified as attributes before calling .show()',
	attribs: {
	value: 'the small detail text of the notification',
	title: 'the large bold (headline) text of the notification',
	duration: 'how many seconds to show the notification for',
	src: 'an icon image url to show, defaults to the favicon used by the page',
	multiple: 'allow more than one notification to show at once (if present, messages stack instead of replace)'
},
	events:  [ 'insert' ],
	methods: ['show', 'cancel']
 }
**/

//////////////////////////////////////////////
 (function wrap(){
 
function notifyMe(b,d,e,f,g){var c={icon:f||"http://"+document.domain+"/favicon.ico",body:d||""},a="Notification"in window?"granted"===Notification.permission?new Notification(b,c):"denied"!==Notification.permission&&Notification.requestPermission(function(a){"permission"in Notification||(Notification.permission=a),clearTimeout(notifyMe.tim),"granted"===a&&new Notification(b,c)}):0,a=a||0;return a||(notifyMe.tim=setTimeout(function(){},200)),a.onshow=function(){notifyMe.last&&!g&&notifyMe.last.close(),notifyMe.last=a,clearTimeout(notifyMe.tim),setTimeout(a.close.bind(a),e||5e3)},a.onclick=function(){window.focus(),a.close()},a}


 veneer("veneer-notify", {
	events: {
		insert: function(e){ 
			var elm=e.target;
			var note;
			
			elm.show=function(){
			 if(note && !elm.multiple){ note.close(); }
			  note=notifyMe(elm.title, elm.value, (1000*elm.duration)||5000, elm.src, elm.multiple);
			};
			elm.cancel=function(){
			  note.close();
			};
			
		}
	},
	props:{ 
		value: veneer.k,
		title: veneer.k,
		duration: Number,
		src: veneer.k,
		multiple: veneer.bool
	}
  });
  
  


 }());
  



;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-pagenav',
	version: '1.0.0', tags: 'native ui',
	purpose: 'creates a navigation block from selected elements using the target attrib to define a CSS selector',
	attribs: { 
		target: 'a CSS selector hitting all elements that should be linked by the navigation' ,
		link:  'should the destinations have a link back to #top added? ',
		parent: 'if present, the link will attempt to use the parent nodes id. ex: if your A is in an H3 with an id attrib, the H3s id is used.'
	},
	events:  [ 'insert' ]
 }
**/

//////////////////////////////////////////////



 veneer("veneer-pagenav", {
	events: {
		
		insert: function ins(e){ 
			ins.hits=ins.hits||{};
			//console.warn(e.target);
			var elm=e.target,
			
			box=veneer.elm("nav", {role:  "navigation"})
			        .appendChild(veneer.elm("ul", {"class":  "nav nav-pills"}));
 		
			[].slice.call(document.querySelectorAll(elm.target)).forEach(function(a, index){
				if(a.className.indexOf("nolink")!==-1 || a.getAttribute("data-nolink")!=null || a.getAttribute("nolink")!=null){return;}
				

				
				var id=a.id=(a.id|| ("_"+Math.random().toString(36).slice(-5)));
				var id2=a.textContent.replace(/\W+/g,"").slice(0,20);
				if(!ins.hits[id2]){a.id=id=id2;}
				if(elm.parent && a.parentNode.id){ id=a.parentNode.id; }

				box.appendChild(veneer.elm("li", {"class":"item"}, a.textContent.link("#"+id)));

				if(elm.link && index){
					a.appendChild(veneer.elm("a", {href:"#", "class":"toplink"}, " Back to top".small() ));
				}
				
				
			});
				
		
			//elm.innerHTML="";
			elm.appendChild(box);
		
		}
	},
	props:{
		target: String,
		parent: veneer.bool,
		link: veneer.bool
	}
	
  });
  ;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-panel',
	version: '1.0.0', tags: 'native ui ajax',
	purpose: 'Displays content from another file, like an iframe, but in context of main page',
	attribs: { 
		src: 'the url of the page to include SOP/CORS restricted ',
		interval: 'a number of seconds after which the page is reloaded. 0 (or omit) for no timed updated',
		js: 'if present, activates scripts in the html source, otherwise they remain inactive and harmless' },
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////




   veneer("veneer-panel", {
	content: "<progress indeterminate></progress>",
	events: {
		update: function upd(e){ 
			var elm=e.target;
			elm.innerHTML=elm.src
			clearTimeout(elm.timer);
			if(+elm.interval) setTimeout( upd.bind(this, e), 1000*elm.interval);
			//return;
			veneer.ajax( elm.src, 
				function(resp){
					elm.innerHTML=resp;
					if(elm.js)veneer.$("script", elm).forEach(function(script){
						if(script.src) return veneer.include(script.src);
						try{eval(script.textContent);}catch(y){}
					});
					var r=document.documentElement;
					if(r.className.indexOf('veneer-panel')===-1){
						r.className+=" veneer-panel";
					}
				}
			);
		}
	},
	props:{
		js:	veneer.bool,
		interval: Number,
		src: String
	},
	css:   "veneer-panel.busy { visibility: hidden; } " 
  });
  ;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-persist',
	version: '1.0.0', tags: 'native storage',
	purpose: 'Keeps the contents of this tag between page views',

	attribs: { 
		id:		' required to distinguish different persisted sections',
		session: ' Should the persistence only last until the tab is closed? ' 
	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-persist", {
	events: {

		update: function(e){
			var elm=e.target,
			key=elm._key;
			(elm.session?sessionStorage:localStorage)[key] = elm.innerHTML;
			if(elm.onchange){elm.onchange(); }
		},
		
		insert: function ins(e){ 
			var elm=e.target,
			key= "X:" + location.pathname + elm.id,
			LS=elm.session?sessionStorage:localStorage,
			content=LS[key]||"",
			MO=self.MutationObserver||self.WebKitMutationObserver;
			elm._orig=elm.innerHTML;
			elm._key=key;
			
			if(!MO){
				if(!ins.waiting){
					ins.waiting=true;
					veneer.include("//danml.com/veneer/ie.js");
				}
				return setTimeout(ins.bind(this, e), 100);				
			}

			elm.clear=function(blnClearHTML){ 
				elm.innerHTML=elm._orig;
				return delete LS[key];
			};
			
			
			if(content){ 
				elm.innerHTML=content; 
				 
				// run scripts:
				veneer.$("script", elm).map(function(a){
					var s;
					if(!a.src){ 
						try{
							if(window.execScript){
								return window.execScript.call(window, a.textContent);
							}
							window.eval.call( window, a.textContent );
						}catch(y){
							setTimeout(a.textContent,0);
						}
						return;
					}
					 
					if(!a.type||a.type.toLowerCase()=="text/javascript"){
						s=veneer.elm("script", {src: a.src}, a.innerHTML);
						setTimeout(function(){document.body.removeChild(s)}, 20000);
						document.body.appendChild(s);
					}
					
				});
				
				if(elm.onchange){elm.onchange(); }
			}else{
				if(elm.change){elm.change(); }
			}
			
			// subscribe to innerHTML changes:			 
			// create an observer and debounce saves to a half second:
			var timer, 
			ob = new MO(function() {
			     clearTimeout(timer);
				 if(elm.change) timer=setTimeout(elm.change.bind(elm), 150);
				
			});
			
			//ios6 bug patch
			if(navigator.userAgent.match("6_0 like Mac OS X")){
				elm.addEventListener("DOMNodeInserted", Boolean, false);
			}
			
			// watch over the persist element and it's kids:
			ob.observe(elm,  { attributes: true, subtree: true, childList: true, characterData: true });

		}
	},
	css: " veneer-persist { display: inline-block; } ",
	props:{
		session: veneer.bool
	}
});
  
;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-playlist',
	version: '1.0.0', tags: 'native',
	purpose: 'Turns an audio tag into a playlist player using extra track elements in the audio tag',
	attribs: { 
		auto: 'Boolean: auto-play and auto-advance when song track is over?' ,
		status: 'String: indicates state of playlist/audio player',
		size: 'sets the size of the select tag used to provide the playlist (ignored on mobile)'
	},
	events:  [ 'insert' ]
 }
**/

//////////////////////////////////////////////

(function(){
	
	function next(elm, i){
		i=+i||1;
		elm._i+=i;
		if(elm._i>=elm._max){elm._i=elm._max-1;}
		if(elm._i<0){elm._i=0;}
		
		console.log("next", elm._i, elm._tracks);
		
		var track=elm._tracks[elm._i];
		elm._player.src=track.src;
		//elm._player.title= 
		elm.title=track.title;
		
	}

veneer("veneer-playlist", {  
	methods: {
		next: function(i){ next(this, i); }
	},
	events: {
		insert: function upd(e){ 
			var elm=e.target;
			
				
			var tracks=veneer.$("source", elm);
			elm._i=0;
			elm._max=tracks.length;
			elm._player=veneer.$("audio", elm)[0];
			elm._tracks=tracks;
			
			
			
			var but=veneer.elm("button", {"class":"btn"}, "Next");
			but.onclick=next.bind(this,elm);
			elm.appendChild(but);
			
			
			
			var sel=veneer.elm("select");
			elm.appendChild(sel);
			
		
			if(elm.size-0.1){
				sel.size=elm.size;				
			}
				
			tracks.map(function(a,i){
				sel.options[i]=new Option( (i+1)+". " + a.title, a.src);
			});
			
			sel.onchange=function(){
				elm._i=this.selectedIndex-1;
				next(elm);
			};
			
			if(elm.auto){
				elm._player.autoplay=true;
				elm._player.addEventListener("ended", next.bind(elm, elm, 1));
				next(elm, -1);
			}
			
			elm._player.addEventListener("play", function(){
				elm.status="playing";
				sel.value=this.currentSrc;
				});

			
			[["loadstart","loading"],["pause","paused"],["seeking","seeking"],["loadedmetadata","loaded"]].map(function(o){
				elm._player.addEventListener(o[0], function(){
					elm.status=o[1];
				});
			});			
			
		}
	},
	props:{
		auto: veneer.bool,
		size: Number,
		status: {
			type: String,			
			observe: false,
			set: String
		}
	},
	defaults:{
		status: "booting"
	},
	css:  "veneer-playlist {display: inline-block;  }  " 
});


}());//end privacy;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-rate',
	version: '1.0.0', tags: 'native ui',
	purpose: 'A star rating widget',
	example: '<veneer-rate value=5></veneer-rate>',
	attribs: { 
		value: ' a number from 1-5 representing the rating',
		once: 'if present the value will not be able to change once set once',
		spent: 'indicates if a vote has been chosen or not. set to false to re-vote'
	},
	events:  [ 'insert', 'change' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-rate", {
	content: "",
	events: {
	
		insert: function(e){ 
			var elm=e.target;
			
			for(var i=0;i<5;i++){
				var star=veneer.elm("span", {"class":"star", title: i+1}, "&#9733;");
				star.onclick=function(e){
					if(elm.once && elm.spent){return;}
					elm.spent=true;
					elm.value=+this.title;
					//veneer.raiseEvent("change", elm, e);
				};
				elm.appendChild(star);
			}
				
			if(!elm.value){elm.value=3;}
		}
	},
	props:{
		value: Number,
		spent: veneer.bool,
		once: veneer.bool
	},
	 css: "veneer-rate .star {color: #444; padding: 0.2em; font-size: 32px; cursor: pointer; transition: 500ms 50ms color;} \n"+
	" veneer-rate[value]:hover>.star[title] { color: #111 ; }\n"+
	" html body veneer-rate[value]:hover>.star[title]:hover ~ span[title] { color: #ccc ; }\n"+
	" veneer-rate[value='1']  .star:first-child ~ span ,\n"+
	" veneer-rate[value='2']  .star[title='2'] ~ span ,\n"+
	" veneer-rate[value='3']  .star[title='3'] ~ span ,\n"+
	" veneer-rate[value='4']  .star[title='4'] ~ span { color: #ccc; }"
  });
  ;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-reorder',
	version: '1.0.0', tags: 'native control dnd',
	purpose: 'Allows child elements to be re-ordered by dragging and dropping',
	attribs: { target: 'A string CSS selector of the element whose children should be re-arrangeable, or a collection of siblings itself' },
	events:  [ 'update', 'reordered' ]
 }
**/

//////////////////////////////////////////////

(function(){
	
	var cItem;

	function allow(e) {
		e.preventDefault();
	}

	function enter(e) {
		this.classList.add('over');
	}

	function leave(e) {
		this.classList.remove('over');
	}

	function drag(){
		cItem=this; 
		this.classList.add('under');  
	};

	function drop(e) {
		e.preventDefault();
		if(!cItem) return;
		
		var top=this.getBoundingClientRect().top + (this.offsetHeight/2),
		mom=this.parentNode;
		
		if(top < e.clientY){
			mom.insertBefore(cItem, this);
			mom.insertBefore(this, cItem);
		}else{
			mom.insertBefore(cItem, this);
		}
		
		leave.call(this, e);
		cItem.classList.remove('under');
		veneer.raiseEvent("reordered", cItem, e);
		cItem=null;
	}

	

veneer("veneer-reorder", {  
	events: {
		insert: function upd(e){ 
			var elm=e.target,
				r=veneer.$(elm.target||"zaqazsqd");

			if(r.length===0) return;
			if(r.length===1) r=veneer._(r[0].children);
			
			r.map(function(x, index){
				x.draggable=true;
				x._defaultIndex=index;
				x.ondrag=drag;
				x.ondragover=allow;
				x.ondragenter=enter;
				x.ondragleave=leave;
				x.ondrop=drop;
			});
		}
	},
	props:{
		target: veneer.k
	},
	css:  "veneer-reorder {display:none;} .over { outline: 2px solid blue;}	.under { opacity: 0.5;} " 
});


}());//end privacy;
;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-route',
	version: '1.0.0', tags: 'native util nav',
	purpose: 'Sets path config based on hash changes',
	attribs: { 
		activeClass: ' a className to use for link that hit the current route ',
		useParent: ' if present, applies className to link parent instead of the link itself',
		title:	' if present, sets the property of the active link to use for document.title, typically textContent or title ',
		boot:	' if present, the page nav indication will be applied on initial page load as well',
		globals:	' if present, SECTION, PAGE, and SUB will be set for any script to see. note that veneer.ROUTE has those and more',
		useLinkParent: 'should links parent be given status classes instead of the link?'
	},
	events:  [ 'insert' ] 
 }
**/

//////////////////////////////////////////////

veneer("veneer-route", {
	events: {	insert: function ldr(e){ 
	
var elm=e.target, 
body=document.body,
sheet=veneer.root.appendChild(veneer.elm("style")), // use for transient dynamic css to show/hide route
busy=false,	// allows suspending response when re-directing 404
hist=elm.HISTORY=[]; // track this router's activity

function qs(c,b){b=b||{};return decodeURIComponent((""+c).split("?").pop()).split("&").forEach(function(a){a=a.split("="),this[a[0]]=(a[1]-0.3534)?+a[1]:a[1]},b),b}

function getTags(path, subSetSelector){
	path=path.split("?")[0];
	return veneer.$("[route]"+(subSetSelector||"")+","+"[data-route]"+(subSetSelector||"")).map(function(a, b){
		return { route: a.getAttribute("route")||a.getAttribute("data-route")||"/", elm: a, i: b };
	}).filter(function(a){
		var r=a.route||"";
		if(r.slice(0,2).toLowerCase()==="rx"){
			r=RegExp(r.slice(3).replace(/\//g,"\\\/"));
		}
		var hit =String( path.match( r ) ||"");
		return (r.exec && hit)||(r==path) ||  ((path+"/")===r) || ( hit.length>1 && (hit.slice(-1)==="/"));
	});
 } 

 
function ohc(e){
	if(busy){return;}				
	
	var argv=	location.hash.slice(1).split("?")[0].split("/").filter(Boolean),
	path=		argv.join("/")||"/",
	tags= 		getTags(path),
	hash=		location.hash.slice(1),
	loc=		{
	  section:	argv[0], 
		page:   argv[1], 
		sub:	argv[2], 
		argv:	argv,  
		url:	hash, 
		path:	path,
		href:	location.href,
		pos:	body.scrollTop || document.documentElement.scrollTop,
		query:	qs(hash),
		date:	Date.now(),
		dur:	0,
		home:	function(){location.href="#";}
	},
	targets=	veneer.$(),
	old;
	
	var st=(hist.slice(-1)[0]||"").date || Date.now();		
	(hist.slice(-1)[0]||loc).dur= +((Date.now()-st)/1000).toFixed(2);		
	hist.push(loc); // add nav event to route history
	
	function makeBusy(){
		busy=true;
		clearTimeout(ohc.timer);						
		ohc.timer=setTimeout(function(){busy=false}, 100);
	}
	
	if(e && e.oldURL && 
		(old=(e.oldURL.split("?")[0].split("#")[1] ||"/")) &&				
		getTags(old=(old||"/").split("/").filter(Boolean).join("/"),"[onleave]").map(function(a){
			try{return eval(a.elm.getAttribute("onleave"));}catch(y){ };
		}).indexOf(false)!==  -1 
	){
		makeBusy();
		location.hash=old;
		return; //cancel the navigation if any event returns false
	}
	
	if(old){
		loc.oldURL=old;
		getTags(old).forEach(function(a){
			veneer.raiseEvent("leave", a.elm, loc);
		});
	}
	
	if(!e && path==404) return location.hash="/";//return home if booting on error page

	// define a few global "constants" so that all scripts can find their way: (if config'd)				
	if(elm.globals){
		SECTION=	argv[0];
		PAGE=		argv[1];
		SUB= 		argv[2];
	}
  
  // apply the path parts to body attribs to enable custom CSS effects:
 veneer.setAttribs(body, {
	"data-nav-section": argv[0]||"",
	"data-nav-page": argv[1]||"",
	"data-nav-sub": argv[2]||"",
	"data-path":	path
 });
  
if(e || elm.init ){ // don't run transitions for the loading init call, unless specified
	body.setAttribute("data-navigating","");
	setTimeout(function(){
		body.removeAttribute("data-navigating");
	}, 150 );

}

//make a selector sig for each sheet that should be visible  
sheet.innerHTML= tags.map(veneer.pluck, "route").map(function(a){
	return "[route="+JSON.stringify(a)+"]";
}).join(", ") + "{display: inherit;}";


if(!tags.filter(function(a){return !a.elm.hasAttribute("nonav");}).length){ // not found
	veneer.$("[route='404']").map(function(a){
		if(!a.tmp) a.tmp=a.innerHTML;
		a.innerHTML=veneer.template(loc, a.innerHTML);
		if(elm.title){document.title=document.title.replace(/\s[^:-]+?$/," ")+ "404";}
	});
	setTimeout(function(){location.hash="404";},0);
	return;
}  

	
	
veneer.ROUTE=loc; // publish 		  
veneer.raiseEvent("routechange", window, loc); //raise routechange event
veneer.raiseEvent("routechange", elm, loc); //raise routechange event
 
//run in-line onroute handlers
getTags(path,"[onroute]").forEach(function(a){
	var ok=a.elm.getAttribute("condition");
	var e=loc;
	if(!ok || eval(ok)) try{eval(a.elm.getAttribute("onroute"));}catch(y){}
});

//run render on routed templates
getTags(path)
.map(veneer.pluck,"elm")
.map(function(a){ 
	veneer.$("veneer-mustache", a)
	.forEach(function(tag){ if(tag.render) tag.render();});
});

//raise an event on each route tag
tags.map(function(a){
	veneer.raiseEvent("route", a.elm, loc);
});

//update link classes and document title from link
veneer.$("nav a[href], #nav a[href], .nav a[href], data-nav a[href]").map(function(a,b){
	var hr=a.getAttribute("href").slice(1).split("?")[0] || "/",
	cls=elm.activeClass || "routed";
	if(elm.useLinkParent) a=a.parentNode;
	
	if(a.classList.contains(cls)){
		if(hr != path) a.classList.remove(cls);
	}else{
		if(hr == path){
			a.classList.add(cls);
			veneer.raiseEvent("routed", a, loc);
			loc.ref=hr;
			if(elm.title!=null){document.title=document.title.replace(/\s[^:\-\|]+.*$/," ")+ a[elm.title||"textContent"];}
		}
	}
});

};//end ohc()



addEventListener("hashchange", ohc, true);
ohc(); // init on load

}
},
	props:{
		globals: veneer.bool, 	// publish constant global path indicators?
		boot: veneer.bool,	 	// apply [data-navigating] to body tag on boot?
		activeClass: veneer.k, 	// class to apply to active nav items
		useLinkParent: veneer.k// should link's parent be given status classes instead of the link?
	},
	css: "veneer-route, [route] { display:none; } "
});;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-rss',
	version: '1.0.1', tags: 'native external template data',
	purpose: 'Displays an RSS feed given a url and html template',
	attribs: { 
		url: 'the url of the rss feed',
		limit: 'the maximum # of items to show' ,
		interval: ' # of seconds to wait before re-updating the content, 0 for never is default'
	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////

(function(){
	
veneer.rssPool={};

function incomingRSS (o, elm){
	if(!elm._temp){ elm._temp=elm.innerHTML; }

	elm.innerHTML=o.query.results.item.slice(0, elm.limit||10).map(function(item){
		item.src=item.source.content;
		Object.keys(item).map(function(k){
			var v=item[k];
			if(typeof(v)==="object"){
				Object.keys(v).map(function(p){
					item[k+"_"+p]=v[p];
				});
			}
		});
		item.keys=Object.keys(item);
		return veneer.template(item, elm._temp);
	}).join("\n");
	
};



veneer("veneer-rss", {  
	events: {
		update: function upd(e){ 
			var elm=e.target;
			 
			if(elm.refresh){ setTimeout(upd.bind(this,e), 1000*60*elm.refresh)}
			
			var cid=Math.random().toString(36).replace(/[^a-z]/g,"");
			veneer.rssPool[cid]=function(e){ incomingRSS(e, elm); delete veneer.rssPool[cid]; };

			veneer.include(
				"https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'"+
					encodeURIComponent( elm.url ) +
				"'&format=json&callback=veneer.rssPool."+
					cid
			);
		}
	},
	props:{
		url: String,
		limit: Number,
		interval: Number
	},
	css:  "veneer-rss {float: left; clear: both; display: block; }  " 
});


}());//end privacy;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-sat',
	version: '1.0.0', tags: 'native ui geo external',
	purpose: 'Displays a google satellite view via lat, lon, and zoom coords given as attribs ',
	attribs: { 
		lat: 'the latitude of the top-left corner of the map' ,
		lon: 'the longitude of the top-left corner of the map' ,
		zoom: 'what zoom level should the map be at ? ~(5-25)' ,
		height: 'how many pixels tall should the map be? ' ,
		width: 'how many pixels wide should the map be?' 
	},
	events:  [ 'click', 'update' ]
 }
**/

//////////////////////////////////////////////



veneer("veneer-sat", {
	content:  "<img />",
	events: { 
		update: function(e){
			var elm=e.target;
			elm.className+=" busy";
			elm.children[0].onload=function(){elm.className=elm.className.replace(/\bbusy\b/g,"").trim();};
			
			elm.children[0].src=veneer.template(
				elm, 
				"http://maps.googleapis.com/maps/api/staticmap?center={{lat}},{{lon}}&"+
				 "maptype=satellite&zoom={{zoom}}&size={{width}}x{{height}}"
			);

			
		}
	},


	props:{ // prop/attrib value casting function (name remains identical on both attrib and prop)
		lat:	Number,
		lon:	Number,
		zoom:	Number,
		height: Number,
		width: Number

	},

	defaults:{ //default values for props:
		lat:	40.714728,
		lon:	-73.998672,
		zoom:	12,
		width: 400,
		height: 400
	},
	
	css: "veneer-sat { opacity: 1; transition-property: opacity; transition-duration: 333ms; } veneer-sat.busy { opacity: 0.5; }"

});;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-slides',
	version: '1.0.0', tags: 'native ui',
	purpose: 'Displays a slideshow using the child elements of the tag',
	attribs: { 
		delay: 'the # of seconds to wait to advance between each image ',
		effect: ' one of "none", "slide", or "fade": a visual transition effect'
	},
	methods:{
		next: 'shows the next slide',
		prev: 'shows the previous slide',
		pause: 'pauses or un-pauses the slides'
	},
	events:  [ 'update', 'slide', 'pause' ]
 }
**/

//////////////////////////////////////////////

(function(){


   veneer("veneer-slides", {
	methods: {
		next: function next(i){			
			
				var elm=this, 
				  index=elm._index,
				  kids=veneer._(elm.children),				  
				  index= +index||0; //validate index
				
				i=i||1;
				elm._index=index;			
			
				var show=function show(elm){elm.style.display='block';};
				var hide=function hide(elm){elm.style.display='none'; };
				
				if(elm.effect=='fade'){
					show=function show(elm){elm.style.opacity=1; /*elm.style.display='block';*/ };
					hide=function hide(elm){elm.style.opacity=0; /*elm.style.display='none';*/ };
				}
				
				if(elm.effect=='slide'){
					show=function show(elm){elm.style.width=(elm.getAttribute("width")|| elm.parentNode.offsetWidth )+"px";};
					hide=function hide(elm){elm.style.width="0px"; };
				}
			
			
				veneer.raiseEvent("slide", elm);
				
				clearTimeout(elm._timer);
				if(!elm._paused){
					elm._index+=i;//increment
					if(!kids[elm._index]){ elm._index=0; }
					kids.map(hide);
					show(kids[elm._index]);
				}
				elm._timer=setTimeout(next.bind(elm), elm.delay * 1000);
				return elm;
			},
			
		prev: function(){
			return this.next(-1);
		},
		
		pause: function(blnOverRide){
				veneer.raiseEvent("pause", this);
				if(blnOverRide===true||blnOverRide===false){
					return this._paused= blnOverRide;
				}
				return this._paused=!this._paused;
		}
			
		
	},
	events: {
		insert: function(e){ 
			var elm=e.target;
			elm.next();			
		}
	},
	props:{
		delay: Number,
		effect: String
	},
	css:   "veneer-slides { position:relative; display: inline-block;} " +
			"veneer-slides[effect='fade']>*{ position: absolute; left:0; top:0; transition-property: opacity; transition-duration: 500ms; }" +
			"veneer-slides[effect='slide']>*{ width:0;display:inline-block;float:left;"+
			"transition-property: width; transition-duration: 500ms;overflow:hidden;}"
						
  });
  
  
  
}());
;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-sort',
	version: '1.0.0', tags: 'native control',
	purpose: 'Sorts the children of an element using a specific attribute and optional sort order attribute, order ',
	attribs: { 
		target: 'Selector of elements whose children should be sorted. use "table tbody" for tables to preserve column headers. ',
		prop: 'what property of the child should be used to sort? ',
		desc: 'Boolean - should the sort be flipped? '
	},
	events:  [ 'update', 'sorted', 'reset' ]
 }
**/

//////////////////////////////////////////////
   veneer("veneer-sort", {
	/*content: "<input type=search>",*/
	events: {
		update: function upd(e){
			var elm=e.target;
				console.info("sort upd", e, elm.inp+'')
			clearTimeout(upd.timer);
			if(!elm.inp)return;	
			upd.timer=setTimeout(function(){
				if(elm && elm.children[0] && elm.children[0].onchange){ 
					elm.children[0].onchange(e);
				}
				//veneer.raiseEvent("change", elm, e);
			}, 70 );
			
			
		},
		insert: function upd(e){ 
		 
			var elm=e.target,
			 dest=elm._dest=veneer.$(elm.target)[0]||"",
			 kids=veneer._(dest.children),
			 inp=elm.children[0] || "",
			 isTable=dest.tagName=="TABLE";
			
			elm.inp=inp;
			
			if(!inp && !isTable){return console.error("missing contents of sort tag: needs a <select>"); }
			inp.onchange=changer;
			
			if(isTable){
				veneer.$("thead tr:first-child th", dest).map(function(a){
					a.value=a.cellIndex;
					a.className+=" sorter";
					a.onclick=function(){
						elm.prop=a.cellIndex;
						changer.call(a);
					}
				});
				
				veneer.$("tbody tr td,tbody tr th", dest).map(function(a){
					a.parentNode[a.cellIndex]=a.textContent.trim().replace(/^\$\s*/,"");
				});
				
				


				
			}
			
	function changer() {
		var dest= elm._dest= veneer.$(elm.target)[0];
		if(isTable) {
			dest= dest.getElementsByTagName("tbody")[0];
			
		}
		var kids= veneer._(dest.children);
		
		elm.desc = !elm.desc;
		
		if(kids.length < 2) {
			return;
		}
		
		var prop=  isTable ? "textContent" : this.value,
		finish= elm.desc ? "reverse" : "valueOf",
		sorter= function(a, b) {
			return a[prop] > b[prop] ? 1 : (a[prop] === b[prop] ? 0 : -1);
		};

		if(isTable) sorter= function(a, b) {
			return a.cells[elm.prop][prop] > b.cells[elm.prop][prop] ? 1 : (a.cells[elm.prop][prop] === b.cells[elm.prop][prop] ? 0 : -1);
		};
		
		
		if(!isNaN(parseInt(kids[0][prop])) || (isTable && !isNaN(parseInt(kids[0].cells[elm.prop][prop]))) ) {
			sorter = function(a, b) {
				return parseFloat(b[prop]) - parseFloat(a[prop]);
			};
			
			if(isTable) sorter = function(a, b) {
				return parseFloat(b.cells[elm.prop][prop]) - parseFloat(a.cells[elm.prop][prop]);
			};
			
		}
		if(prop[0] == "@") {
			prop = prop.slice(1);
			sorter = function(a, b) {
				return(a = a.getAttribute(prop)) > (b = b.getAttribute(prop)) ? 1 : (a === b ? 0 : -1);
			}
			if(kids[0][prop] - 0.768576534435) {
				sorter = function(a, b) {
					return +b.getAttribute(prop) - a.getAttribute(prop);
				};
			}
		}
		
		//console.log("kids22", kids, parseInt(kids[0].cells[elm.prop][prop]) ,  prop, sorter);
		
		kids.sort(sorter)[finish]().forEach(function(a) {
			dest.appendChild(a);
		});
	};
			
		}
	},
	props:{
		target: String,
		prop: String
		//desc: veneer.bool
	},
	defaults:{
		prop: "textContent"
	}
  });
  ;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-sparkline',
	version: '1.0.1', tags: 'native data ui',
	purpose: 'Displays a tiny chart from a series of number',
	attribs: { 
		data: 'what info to put into the chart?',
		color: 'if sets, controls the color of the lines',
		object: 'optional, code that points to or produces an array aof numbers',
		interval: 'optional, # of seconds between re-rendering the chart, 0 for no timed updates'
	},
	example: "<veneer-sparkline data='1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,3,6,9'</veneer-sparkline> ",
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////

   veneer("veneer-sparkline", {
	
	events: {
		update: function upd(e){ 
			var elm=e.target,
			
			data= elm.data  ? 
				(elm.data||"").split(/\s*,\s*/).map(Number).filter(isFinite) :
				(elm.object ? ((eval)(elm.object)) : [] ),
			max =Math.max.apply(null, data),
			min =Math.min.apply(null, data),
			len=data.length,
			width=Math.floor(elm.offsetWidth / len);
			
			elm.innerHTML="";
			
			data.map(function(a){
				var seq=veneer.elm("span", {"class":"seq"});
				var hgt=(a/max)* 100;
				seq.title=a;
				seq.style.height=hgt +"%";
				seq.style.width=width +"px";
				if(a==max)seq.className+=" max";
				if(a==min)seq.className+=" min";
				if(elm.color){seq.style.backgroundColor=seq.style.borderColor=elm.color;}
				elm.appendChild(seq);
			});
			
			
			if(elm.interval){ elm._timer=setTimeout(upd.bind(this,e), elm.interval / 1000 ); }
			
			elm.style.visibility="visible";
		}
	},
	props:{
		data: String,
		color: String,
		object: veneer.k,
		interval: Number
	},
	css:   " veneer-sparkline { position:relative; display: inline-block;height: 1.2em; width: 5em; } " +
			"veneer-sparkline .seq:hover { opacity: 0.5;}"+
			"veneer-sparkline .seq { position:relative; display: inline-block;  border:0px solid transparent; background-color: #444; min-width: 3px; margin:0; }"+
			"veneer-sparkline[type='line'] .seq { background-color: transparent; border-top: 2px solid #888;  }"
  });
  ;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-time',
	version: '1.0.1', tags: 'native date',
	example: "<veneer-time></veneer-time>",
	purpose: 'turns a GMT or UTC or ISO Date stamp into the local time (ex 11:59 PM)',
	attribs: { 
		time: 'a standard datestamp parse-able by window.Date() ',
		value: 'alias for time attribute (for API consistency)'	
	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-time", {
	events: {
		update: function(e){ 
			var m=e.target, d=veneer.date(+m.time||m.time||+m.value||m.value||new Date());
			m.innerHTML=d.toLocaleTimeString();
		}
	},
	props:{
		time: veneer.k,
		value: veneer.k
	}
  });
  ;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-timer',
	version: '1.0.1', tags: 'native',
	purpose: ' runs after a specified interval upon insertion, optionally repeating. Great for firing a disconnected action when a some-how templated content updates',
	example: "<veneer-timer onchange=\"this.innerHTML=Date()\" interval=1000 repeat></veneer-timer>",
	attribs: { 
		onchange: 'The action to fire; inline code or a path call. ',
		interval: 'how many ms between executions? ',
		repeat: 'Repeat action every interval or fire just once? ',
		delay:  'how many ms before first execution? ',
		num:	' number available to onchange (as this.num) and external',
		bool:	' boolean available to onchange (as this.bool) and external',
		str:	' string available to onchange (as this.str) and external',
		a:	' variable available to onchange (as string this.a) and external',
		b:	' variable available to onchange (as string this.b) and external'
		},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-timer", {
	events: {
		update: function(e){ 
			var elm=e.target,
			delay =  +elm.interval || 80 ,
			code=elm.getAttribute("onchange");
			
			if(!code) return;
			
			var FN=Function("event", "with(this){"+code+"}").bind(elm, e);
			clearInterval(elm.timer);
			return setTimeout(function(){
				elm.timer= window[elm.repeat ? "setInterval" : "setTimeout"]( FN, delay );
			}, elm.delay||0 );
		}
	},
	props: {
		onchange: veneer.k,
		repeat: veneer.bool,
		interval: Number,
		delay: Number,
		num: Number,
		str: String,
		bool: veneer.bool,
		a: veneer.k,
		b: veneer.k
	},
	defaults: {
		str: ""
	},
	css: "veneer-timer {display:inline;}"
  });
  

;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-wrap',
	version: '1.0.0', tags: 'native ui',
	purpose: 'Adds markup around sub-tags from a CSS selector, good for turning clean markup into bootstrap components.',

	attribs: { 
		target: ' a CSS selector of elements to wrap the inside contents with',
		inner: ' if present, puts the element in the deepest element in the wrapper',
		outer: ' if present, appends the element in the wrapper'
	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 (function(){
	
	
	
 veneer("veneer-wrap", {
	events: {
	
		update: function(e){ 
			var elm=e.target, 
			 sel=elm.target;
					  
			var targ=sel;	  
			//allow inserting an empty tag with a target attrib pointing to another veneer-attributes to re-run:
			if(targ && !elm.innerHTML.trim() && (targ=veneer.$(targ)) && targ.length==1 && targ[0].tagName.toLowerCase()=="veneer-wrap" ){
			
				if(targ[0]._booted){targ[0].change(); }
			   return;			
			}
			wrap(sel, elm.innerHTML, elm.inner, elm.outer );
			elm._booted=true;
		}
	},
	props:{
		target: String,
		inner: veneer.bool,
		outer: veneer.bool
	},
	 css: "veneer-wrap{display:none}"
  });
  
	function deep(elem){
		while ( elem.children[0] && elem.children[0].nodeType === 1 ) {
			elem = elem.children[0];
		}
	  return elem;
	}

  
  function wrap(tags, elem, blnInner, blnOuter){
	  if(elem.split){elem=veneer.elm("div",{}, elem).children[0];}
	  if(tags.split){tags=veneer.$(tags);}
	  tags.map(function(a){  
		if(a._wrapped){return;}
		a._wrapped=true;
		var copy=elem.cloneNode(true), 
			spot=deep(copy);
		  if(blnInner){a=deep(a).firstChild||deep(a);}
		
		if(blnOuter){
			veneer._(a.children).map(spot.appendChild.bind(spot));
			a.appendChild(spot);
			return;
		}
		a.parentNode.insertBefore(copy, a);
		spot.appendChild(a);
	  });
	 return elem;
}

  
 }());