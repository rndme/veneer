//veneer.full.src.js
//86,480b of code compiled Wednesday, October 08, 2014 7:58:13 PM

/* custom HTML components. like polymer.js, but tiny and fast instead of huge and slow. tested in IE9+

What is does: allows custom HTML tags names, syncs those tag's properties and attributes, and provides a structure for scripting basic interactivity.


*/

// (C) WebReflection document.registerElement() Polyfill  
// Mit Style License. from https://github.com/WebReflection/document-register-element   
if(!document.registerElement){
(function(e,t,n,r){"use strict";function R(e,t){for(var n=0,r=e.length;n<r;n++)Q(e[n],t)}function U(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],K(r,c[X(r)])}function z(){B=0,R(t.querySelectorAll(h),"attached")}function W(e){return function(t){g.call(L,t)&&(Q(t,e),R(t.querySelectorAll(h),e))}}function X(e){var t=e.getAttribute("is");return d.call(l,t?t.toUpperCase():e.nodeName)}function V(e){var t=e.currentTarget,n=e.attrChange,r=e.prevValue,i=e.newValue;t.attributeChangedCallback&&t.attributeChangedCallback(e.attrName,n===e.ADDITION?null:r,n===e.REMOVAL?null:i)}function $(e){var t=W(e);return function(e){t(e.target)}}function J(e,t){var n=this;O.call(n,e,t),j.call(n,{target:n})}function K(e,t){N(e,t),q?q.observe(e,_):(H&&(e.setAttribute=J,e[i]=I(e),e.addEventListener(u,j)),e.addEventListener(o,V)),e.createdCallback&&(e.created=!0,e.createdCallback(),e.created=!1)}function Q(e,t){var n,r=X(e),i="attached",s="detached";-1<r&&(C(e,c[r]),r=0,t===i&&!e[i]?(e[s]=!1,e[i]=!0,r=1):t===s&&!e[s]&&(e[i]=!1,e[s]=!0,r=1),r&&(n=e[t+"Callback"])&&n.call(e))}if(r in t)return;var i="__"+r+(Math.random()*1e5>>0),s="extends",o="DOMAttrModified",u="DOMSubtreeModified",a=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,f=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],l=[],c=[],h="",p=t.documentElement,d=l.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},v=n.prototype,m=v.hasOwnProperty,g=v.isPrototypeOf,y=n.defineProperty,b=n.getOwnPropertyDescriptor,w=n.getOwnPropertyNames,E=n.getPrototypeOf,S=n.setPrototypeOf,x=!!n.__proto__,T=n.create||function G(e){return e?(G.prototype=e,new G):this},N=S||(x?function(e,t){return e.__proto__=t,e}:b?function(){function e(e,t){for(var n,r=w(t),i=0,s=r.length;i<s;i++)n=r[i],m.call(e,n)||y(e,n,b(t,n))}return function(t,n){do e(t,n);while(n=E(n));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),C=S||x?function(e,t){g.call(t,e)||K(e,t)}:function(e,t){e[i]||(e[i]=n(!0),K(e,t))},k=e.MutationObserver||e.WebKitMutationObserver,L=(e.HTMLElement||e.Element||e.Node).prototype,A=L.cloneNode,O=L.setAttribute,M=t.createElement,_=k&&{attributes:!0,characterData:!0,attributeOldValue:!0},D=k||function(e){H=!1,p.removeEventListener(o,D)},P=!1,H=!0,B=0,j,F,I,q;k||(p.addEventListener(o,D),p.setAttribute(i,1),p.removeAttribute(i),H&&(j=function(e){var t=this,n,r,s;if(t===e.target){n=t[i],t[i]=r=I(t);for(s in r){if(!(s in n))return F(0,t,s,n[s],r[s],"ADDITION");if(r[s]!==n[s])return F(1,t,s,n[s],r[s],"MODIFICATION")}for(s in n)if(!(s in r))return F(2,t,s,n[s],r[s],"REMOVAL")}},F=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,V(o)},I=function(e){for(var t,n={},r=e.attributes,i=0,s=r.length;i<s;i++)t=r[i],n[t.name]=t.value;return n})),t[r]=function(n,r){y=n.toUpperCase(),P||(P=!0,k?(q=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new k(function(r){for(var i,s,o=0,u=r.length;o<u;o++)i=r[o],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,s.attributeChangedCallback&&s.attributeChangedCallback(i.attributeName,i.oldValue,s.getAttribute(i.attributeName)))})}(W("attached"),W("detached")),q.observe(t,{childList:!0,subtree:!0})):(t.addEventListener("DOMNodeInserted",$("attached")),t.addEventListener("DOMNodeRemoved",$("detached"))),t.createElement=function(e,n){var r,i=M.apply(t,arguments);return n&&i.setAttribute("is",e=n.toLowerCase()),r=d.call(l,e.toUpperCase()),-1<r&&K(i,c[r]),i},L.cloneNode=function(e){var t=A.call(this,!!e),n=X(t);return-1<n&&K(t,c[n]),e&&U(t.querySelectorAll(h)),t});if(-1<d.call(l,y))throw new Error("A "+n+" type is already registered");if(!a.test(y)||-1<d.call(f,y))throw new Error("The type "+n+" is invalid");var i=function(){return t.createElement(p,u&&y)},o=r||v,u=m.call(o,s),p=u?r[s]:y,g=l.push(y)-1,y;return h=h.concat(h.length?",":"",u?p+'[is="'+n.toLowerCase()+'"]':p),i.prototype=c[g]=m.call(o,"prototype")?o.prototype:T(L),clearTimeout(B),B=setTimeout(z),i}})(window,document,Object,"registerElement");
}
 
 /* create a style tag to hold CSS for all the custom components */
 (function(x,d){d=document, x=d.getElementsByTagName("script")[0]; if(!x){return;}
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
		 
		 var req=u.split(/[?#]/);
		 d.src=req[0]; 
		 
		 function inject(){
			doc.documentElement.children[0].appendChild(d);
		 }
		 
		if(!req[1]){
			inject();
		}else{
			//wait for depend, then inject
			(function waiter(){
				var need=veneer.$("script[src*='"+req[1]+"']")[0];
				if(need && need.loaded){inject();}else{setTimeout(waiter, 37);}
			}());
			
		}
		 return d;
	});
};

veneer.on=function on(base, event, selector, fn){
  var u,b=base,m=b.matches||b.webkitMatchesSelector||b.mozMatchesSelector||b.msMatchesSelector, 
  f=fn.call?fn:Function("e",fn);
  (event+'').split(",").map(function(s){b.addEventListener(s.trim(), function(e){ 
     return m.call(e.target, selector) ? f.call(e.target, e) : u;
  }, true);});
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
		/*
		//cache native veneer defs:
		if( /^\w+$/.test(a){
			prefix="veneer-"
				
			if(x=localStorage["veneer_"+a]){
			
				try{return eval(x);}catch(y){console.error(y);}
			}else{
				var filePath=(base2||"") +prefix+a+".js" ;
				setTimeout(function(){			
					veneer.ajax(filePath, function(str){
						localStorage["veneer_"+a]=str;
					});
				}, (n *2000)+7000);
			
			}
		
		}

		*/
	
		//setTimeout(function(){ veneer.include( filePath ); },n*20);
	});
};

//this is where loaded tag defs go, so imports can check for depends
veneer.tags={};


//collection to array:
veneer._=Function.call.bind([].slice);

//like jQuery's selection tool:
veneer.$=function $(css,root){ return veneer._((root||document.documentElement).querySelectorAll(css)||[]); };

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

//get a groupg of related elements by group attrib
veneer.group=function group(strGroup){
	if(strGroup.group){strGroup=strGroup.group;}
	return veneer.$( strGroup ? ("[group~='"+strGroup+"']") : "[group]")
	
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
		
		css: (veneer.$('style', elm)[0]||"").innerHTML.trim()
	};
	
	elm._frag=temp;	
	
   var at=veneer.getAttribs(elm);
   if(at.proto){
	  def.proto=eval(at.proto).prototype;
	  delete at.proto;
   }
   
  
   
   var code=(veneer.$('script[type="shadow"]', elm)[0]||"").innerHTML || "";
   
    //console.info(veneer.$('script[type="shadow"]', elm), code);
	

   
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
	
	function curry(fn, arrArgs){
		if(!arrArgs.join){arrArgs=[arrArgs];}
		return function _curried(){return fn.apply(this, arrArgs.concat([].slice.call(arguments))) };
	}
	
	
	def.events=def.events||{};
	
	var  props=def.props||{},
	 defs=def.defaults||(def.defaults={}),
	 methods = def.methods||{},
	 aPrototype = Object.create( def.proto || HTMLElement.prototype );

	 if(!props.group){props.group=veneer.k;}
	// if(!defs.group){defs.group="";}

		

	//this fires on each custom tag at time of creation via markup or createElement():
	aPrototype.createdCallback = function _init(e){

		var that=this; // lets "this" be known as "that" in html event handlers

		that.lang="shadow"; // abuse lang to hit with css and filter event
		that._def=def; 

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
	
		//this[evt].bind(that)  needs to bve wrapped and filter bubbling so that only the true elm fires the event, not dub-custom-tags
		
		// apply any defaults to "missing" props/attribs
		if(defs){ 
			Object.keys(defs).forEach(function(k){ 
			
				if(!that.hasAttribute(k) && this[k]!==false ){ that.setAttribute(k, this[k]); that[k]=this[k];} 
			}, defs); 
		}
	
	

		


		// calls the tag definition's update() event ( if defined )
		function changeme(){ 
			if(def.events && def.events.update){ def.events.update.call(that, {target: that}); }
		};

		if(def.events && def.events.update){ 
			that.change=changeme; 
			if( !def.events.insert || def.CUSTOM ){  setTimeout(changeme, 0);  }
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
	
	//aPrototype.attachedCallback=curry(veneer.raiseEvent, "insert" );
	aPrototype.detachedCallback=curry(veneer.raiseEvent, "remove" );



	// bind all methods:
	Object.keys(methods).map(function(method){
		aPrototype[method]=this[method];
	}, methods);
	
	// bind all props to attribs of the same name and subscribe to changes:
	Object.keys(props).map(function(prop){

	
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

//		if(cfg.value !==undefined){
//			aPrototype[prop]=cfg.value;
//		}



	
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
	
};//end veneer()


// boot all custom declarative tags now and later without iteration:
veneer("veneer-element", {
	events: {
		insert: function(){veneer.parseElement(this);}
	}
});

setTimeout(function(){
	document.documentElement.className+=" veneer";
}, 50 );
//////////////////////////////////////////////
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-attrib',
	version: '1.0.0', tags: 'native control group',
	purpose: 'Uses a wrapped form input to change an attrib on another element, and vice versa (2-way binding if possible)',
	attribs: { 
		target: 'CSS selector pointing to bound element', 
		attrib: 'name of target elm attribute to alter',
		group:  'Group id of element(s) to control' 
	},
	events:  [ 'insert', 'update' ]
 }
**/

//////////////////////////////////////////////


veneer("veneer-attrib", {

props: {
	target: String,
	attrib: String,
	silent: veneer.bool,
	pre:  veneer.k,
	group:	String
},
events: {
	insert: function ins(e){
		
		var elm=e.target,x,me,prop;		
		if(this!=elm){return;}
	
		
	
		elm._dest=veneer.$(elm.target);				
		x=elm.group && veneer.group(elm.group).filter(function(a){return a.tagName!="VENEER-ATTRIB"});
		
		if(x.length ){ 
			[].push.apply(elm._dest, x);
		}
		
		if(!elm._dest[0]){ 
			elm.misses=elm.misses||0;
			elm.misses++;	
			if(elm.misses>5){
				return console.error("Missing attribute 'target' or 'group' on <veneer-attrib> element"); 
			}else{
				return setTimeout(ins.bind(this,e), 50);
			}

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
	},
	update: function(e){ 
		
		var prop, elm=e.target, me=veneer.$("input,select,button", elm)[0];

		if(elm._dest){ 			
			prop="value";
			if(elm._input.type=="checkbox" || elm._input.type=="radio"){
				prop="checked";					
			}
			elm._dest.map(function(dElm){
				if(elm.pre && elm._input[prop]){
					dElm[elm.attrib]=elm.pre+elm._input[prop];  
				}else{
					dElm[elm.attrib]=elm._input[prop];  
				}
				veneer.raiseEvent('update', dElm );  
				veneer.raiseEvent('input', dElm );
				veneer.raiseEvent('change', dElm );

			});
		}
	}
},
css: "veneer-attrib { display: inline-block; } "
});;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-attriball',
	version: '1.0.0', tags: 'native control group',
	purpose: 'syncs many inputs to a single. expects an input inside and a target attrib that points to the inputs you want to sync value or checked to',
	attribs: { 
		target: 'a CSS selector hitting all inputs that should be synced/checked/unchecked' ,
		prop: 'name of target elm property to alter',
		group:  'Group id of element(s) to control' 
	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-attriball", {
	events: {
		
		insert: function(e){ 
			var elm=e.target;
			var prop=elm.prop || "checked";
			var master=elm.querySelector("input,select");
			if(!master){ return console.error("no input found in veneer-checkall tag", tag); }
			
			
			
			master.addEventListener("change", function(){
			
			
				elm._dest=[].slice.call(document.querySelectorAll(elm.target));
				
				var x=elm.group && veneer.group(elm.group).filter(function(a){return a.tagName!="VENEER-ATTRIBALL"});
				
				if(x && x.length ){ 
					[].push.apply(elm._dest, x);
				}
				
				
				var val=master[prop];	
				
				elm._dest.forEach(function(a){
					a[prop]=val;
				});
				
				
				
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
				
			if(elms.length===0){return;}
			
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
		icons: "should font awesome be loaded? "
	},
	events:  [ 'insert' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-bootstrap", {
	proto: HTMLInputElement.prototype,
	events: {
		insert: function ldr(e){ 
		var elm=e.target;
		
		var href="";
		
			if(!veneer.$("link[href*='bootstrap']")[0]){
				veneer.$("head")[0].appendChild(veneer.elm("link",{href:"//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css", rel: "stylesheet" }));
			}
		
			if(elm.icons){
				if(!veneer.$("link[href*='font-awesome']")[0]){
			veneer.$("head")[0].appendChild(veneer.elm("link",{href:"//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css", rel: "stylesheet" }));
			}
			}
		
			if(elm.js && !elm.widgets){
			
				if(!window.jQuery){
					veneer.include(["//code.jquery.com/jquery-latest.min.js"]);
				}
			}
			
			if(elm.widgets){
				document.body.appendChild(veneer.elm("veneer-bs"));
				veneer.include(["http://danml.com/veneer/lib/files/veneer-bs.js"]);
			}
			
			function onJq(){
				if(!window.jQuery){ return setTimeout(onJq, 36); }
				if(elm.js){ veneer.include("//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"); } 
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
	css: "veneer-bootstrap { white-space: pre;display:none; } "
  });
  ;
/**  veneer.js custom html tag definition {
	tagName: 'veneer-cal',
	version: '1.0.0', tags: 'native date',
	purpose: 'turns a GMT or UTC or ISO Date stamp into a human-friendly month view',
	example: "<veneer-cal></veneer-cal>",
	attribs: { time: 'a standard datestamp parse-able by window.Date() ' },
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 (function(){
	
 veneer("veneer-cal", {
	events: {
		update: function(e){ 
			var elm=e.target;
			elm.innerHTML=calendar(  new Date(  +elm.time || elm.time || +new Date() ) );
		}
	},
	css: ".cal td { width: 14.2%; } .cal-day1, .cal-day7 { opacity: 0.8; }",
	props:{
		time: veneer.k
	}
  });
  
  
  
  function calendar(c){var a=[],b=c=c||new Date,d,e=[31,28,31,30,31,30,31,31,30,31,30,31];year=b.getYear()+1900,d=b.getDate();if(0==year%4&&0!=year%100||0==year%400)e[1]=29;nDays=e[b.getMonth()],firstDay=b,firstDay.setDate(1),startDay=firstDay.getDay(),a.push("<TABLE class=cal width=100% BORDER='0' cellspacing='0' CELLPADDING=\"0\"><TR><TH COLSPAN=7>")," 1 2 3 4 5 6 7 8 9101112".substring(2*b.getMonth(),2*(b.getMonth()+1)),b="JanFebMarAprMayJunJulAugSepOctNovDec".substring(3*b.getMonth(),3*(b.getMonth()+1)),a.push(b+" "+year),a.push("</TH></TR>\n	<TR class=daynames><TD>Sun</TD><TD>Mon</TD><TD>Tue</TD><TD>Wed</TD><TD>Thu</TD><TD>Fri</TD><TD>Sat</TD>"),a.push("</TR><TR>");for(i=column=0;i<startDay;i++)a.push("<TD> </TD>"),column++;for(i=1;i<=nDays;i++)a.push("<TD data-date='"+c.getMonth()+"-"+i+"'>"),0==column&&a.push('<span class=cal-day1>'),6==column&&a.push('<span class=cal-day7>'),i==d&&a.push('<span class=cal-today>'),a.push(i),6!=column&&0!=column&&i!=d||a.push("</FONT>"),column++,a.push("</td>"),7==column&&(a.push("</TR><TR>"),column=0);return a.push("</TR></TABLE><P>"),a.join("\n	")}
  
  
 }());;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-classes',
	version: '1.0.0', tags: 'native ui',
	purpose: 'Add classes to sub-tags using CSS selectors, good for turning clean markup into bootstrap components.',

	attribs: { 
		
	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-classes", {
	events: {
	
		update: function(e){ 
			var elm=e.target, rules=elm.rules||"";
			rules.trim()
			 .split("}")
			 .filter(String)
			 .map(Function.call.bind("".trim))
			 .map(function(a,b){ b=a.split("{");b[1]=b[1].trim().split(/\s+/).filter(String); return b; })
			 .map(function(a,b,c){
				var sel=a[0], 
				      r=a[1],
					  t=veneer.$(sel, elm);
					  
					  //console.log(sel, r, t);
					  
					  if(!t[0]){return;}
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
		rules: String
	},
	 css: "veneer-classes{display:inline-block;}"
  });
  ;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-clock',
	version: '1.0.0', tags: 'native',
	purpose: 'Displays the local time, constantly updated.',
	example: "<veneer-clock></veneer-clock>",
	attribs: { seconds: 'Should the clock display seconds? ' },
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-clock", {
	events: {
		update: function(e){ 
			var elm=e.target;
			var showSeconds =  elm.seconds; //hasAttribute("seconds");
			
			
			
			function updateTime(){ 
				elm.innerHTML=new Date()
					.toTimeString()
					.slice(0, showSeconds ? 8 : 5);
			}
			
			clearInterval(elm.timer);
			elm.timer=window.setInterval( updateTime, 1000 );
		}
	},
	props: {
			seconds: veneer.bool
	},
	defaults:{
		seconds: false
	}
  });
  

;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-csv',
	version: '1.0.0', tags: 'native data grid',
	purpose: 'Displays an HTML table made from simple comma-separated-values inside the tag ',
	attribs: { 	caption: 'text to show above the table' },
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////



veneer("veneer-csv", {
	methods: {
		render: function(data){
			var tab=this.tab;
			this._data=data;
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
			}
			

		}
	},
	props:{
		caption: veneer.k,
		src: veneer.k
	}, 
	css:  "veneer-csv {display: block; white-space: pre; } \n"+
	"veneer-csv table { width: 99%; }   \n"+
	"veneer-csv[data-done] { white-space: normal; }  " 
  });;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-date',
	version: '1.0.0', tags: 'native date',
	purpose: 'turns a GMT or UTC or ISO Date stamp into a human-friendly date in the local timezone, as provided by the browser',
	example: "<veneer-date></veneer-date>",
	attribs: { time: 'a standard datestamp parse-able by window.Date() ' },
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-date", {
	events: {
		update: function(e){ 
			e.target.innerHTML=new Date(+e.target.time  || e.target.time || new Date() ).toLocaleDateString();
			e.target.className="busy";
			setTimeout(function(){e.target.className="time";}, 250);
		}
	},
	props:{
		time: veneer.k
	}
  });
  ;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-datediff',
	version: '1.0.0', tags: 'native date',
	purpose: 'turns a GMT or UTC or ISO Date stamp into a human-friendly counter of the hours+mins (etc etc) since or until',
	attribs: { 
			time: 'a standard datestamp parse-able by window.Date() ' , 
			continuous: 'a boolean indicating constant updates or not' 
	},
	example: "<veneer-datediff time='2000-01-01T20:37:38.472Z'></veneer-datediff>",
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 (function(){
	
	
	function dateDiff(d1, d2, elm){

	  function parts(date){
		  return date.toISOString().split(/[\-T:.]/).slice(0,-1).map(Number);
	  }

	  var d=d2-d1, 
		 r1=parts(d1),
		 r2=parts(d2),
		 r=r1.map(function(a,b){return this[b]-a;},r2).map(function(a,b){
		   if(a<0){  a=[0,12,30,24,60,60][b]+a;}
		   return a;
		 });

	   if(elm){elm.title=new Date(d1).toLocaleString();}
	  
	  return r.map(function(a,b){
		if(!a){return "";}
		var d=this[b].replace( a!=1 ? "X" : /s$/, "");
		
		//if(elm){elm[this[b]]=a;}
		//if(elm){elm.setAttribute(this[b], a);}
		
		return "<span class='dt_"+this[b]+"'>"+a+" "+d+"</span>";
	   },["years","months","days","hours","mins","secs"]).filter(String).join("<span class=sep>, </span>");

	}


 veneer("veneer-datediff",  {
	events: {
		update: function upd(e){ 
			var elm=e.target||this;

			
			
			
			function render(){
				if(!elm.time){return;}
				
			
				clearTimeout(elm.timer);
				
				
				try{elm.innerHTML=dateDiff(new Date(elm.time), new Date(), elm);}catch(y){
									
				}
				
				//var bb=dateDiff(new Date(elm.time), new Date(), elm);
				 
				 if(elm.continuous){ elm.timer=setTimeout( render, 1000 ); }
				
			}
			render();		

			
		}
	},
	props:{
		time: veneer.k,
		continuous: veneer.bool /*,
		
		secs: Number,
		mins: Number,
		hours: Number,
		days: Number,
		months: Number,
		years: Number
*/


	}
  });
  
  
  
  
 }());
 ;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-dateformat',
	version: '1.0.0', tags: 'native date',
	purpose: 'turns a GMT or UTC or ISO Date stamp into a custom-formatted date in the local timezone, as provided by the browser. Syntax based on php, coldFusion, et al; See <a href="http://blog.stevenlevithan.com/archives/date-time-format">Steven Levithan\'s docs</a> for info',
	example: "<veneer-dateformat format='dddd, mmmm dS @ h:MM:ss TT' ></veneer-dateformat>",
	attribs: { 
		time: 'a standard datestamp parse-able by window.Date() ',
		format: 'a date formatting string, see docs for details'
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
			elm.innerHTML= dateFormat( new Date(elm.time || new Date() ), elm.format.trim() );
			
			e.target.className="busy";
			setTimeout(function(){e.target.className="time";}, 250);
		}
	},
	props:{
		time: veneer.k,
		format: String
	}
  });
  
  
 }());;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-datetime',
	version: '1.0.0', tags: 'native date',
	purpose: 'turns a GMT or UTC or ISO Date stamp into a human-friendly time and date in the local timezone, as provided by the browser',
		example: "<veneer-datetime></veneer-datetime>",
	attribs: { time: 'a standard datestamp parse-able by window.Date() ' },
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-datetime", {
	events: {
		update: function(e){ 
			e.target.innerHTML=new Date( +e.target.time  || e.target.time || new Date() ).toLocaleString();
			e.target.className="busy";
			setTimeout(function(){e.target.className="time";}, 250);
		}
	},
	props:{
		time: veneer.k
	}
  });
  ;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-file',
	version: '1.0.0', tags: 'native ui',
	purpose: 'A better file upload box, with file meta, and file content change events.',

	attribs: { 
		target: ' '
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
	
	console.info("updatre file");
	
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
				for(var c=Number(f/1024),d=[["kB",0],["MB",1024],["GB",1048576],["TB",1073741824]],b=d.length,e;b--;)
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
	version: '1.0.0', tags: 'native ui group ',
	purpose: 'Filters the children of an element using a keyword to search the content or a specific attribute ',
	attribs: { 
		target: 'Selector of element to filter',
		group:  'Group id of element(s) to filter' 
	},
	events:  [ 'insert', 'filtered' ]
 }
**/

//////////////////////////////////////////////
   veneer("veneer-filter", {

	events: {
		update: function(e){
			var elm=e.target,
			dest=elm._dest=veneer.$(elm.target),			
			x;
			
			if(elm.group && (x=veneer.group(elm.group)).length ){
				[].push.apply(dest, x);
			}
			
		},
		insert: function upd(e){ 
		 
			
		 
			var elm=e.target,
			 dest=elm._dest=veneer.$(elm.target);
			 
			 
			 
			 var inp=elm.children[0],
			 x;
			 
			if(!inp){ inp=elm.appendChild(veneer.elm("input",{type:"search"})); }
			 
			inp.title=inp.title="Enter search term to filter:\n Use space to seperate terms\n Use quoted for an exact match\n Use a /RegExp/i for power";

			if(elm.group && (x=veneer.group(elm.group)).length ){
				[].push.apply(dest, x);
			}
		
			
			if(x=elm.getAttribute("placeholder")){ inp.placeholder=x; }
			if(x=elm.getAttribute("pattern")){ inp.pattern=x; }
			if(x=elm.hasAttribute("required")){ inp.required=x; }
		
			
			function show(e){e.style.display='';}
			function hide(e){e.style.display='none';}




				function kickit(){

					var dest=elm._dest=veneer.$(elm.target);
				
					dest.forEach(function(dest){
						var kids=veneer._(dest.children),
						 prop=elm.prop || "textContent",
						 s=inp.value.toLowerCase().trim(),
						 str=s.split(/\s+/).filter(String);
					 
						function findOne(a){
							if( String( a[prop] ).toLowerCase().indexOf(str)!==-1){ 
								show(a); 
							}else{
								hide(a);
							}
						}

						function findMany(a){
							if( str.every(function(x){return String( a[prop] ).toLowerCase().indexOf(x)!==-1;})){ 
								show(a); 
							}else{
								hide(a);
							}
						}

						function findRX(a){
							if( str.test( a[prop] )  ){ 
								show(a); 
							}else{
								hide(a);
							}
						}

						if(s.slice(0,1)==='"' && s.slice(-1)==='"'){ str=[s.slice(1,-1)]; }//handle literals as all one
	
						if( /^\/[\w\W]+\/[igm]*$/.test(s) ){ try{str=rx(s);}catch(y){return;} return kids.forEach(findRX); }
						if( !str[0] ){ return kids.forEach(show); }
						if( str.length<2 ){ str=str[0]; return kids.forEach(findOne); }
	
						kids.forEach(findMany);

					});//end dest map
					veneer.raiseEvent("filtered", elm);	

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


			
		}
	},
	props:{
		target: String,
		prop: String
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
	example: '<veneer-html><br /></veneer-html>',
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
				
				kids.map(function(inp){
					inp._input=elm;
					
					inp.addEventListener("input", function(e){
						if(inp.options){
							var si=inp.selectedIndex;
							
							veneer.$(":selected").map(function(a){
								a.removeAttribute("selected");
							});
							return inp.options[si].selected=true;
						}
						
						if(inp.type=="radio"||inp.type=="checkbox"){return inp.checked ? inp.setAttribute("checked","") : inp.removeAttribute("checked");}
						return inp.setAttribute("value", inp.value);
					
					}, false);
					
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
	attribs: { },
	events:  [ 'update' ]
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
			var blank={}, inp=veneer.$("input,select", this)[0]||this;
			Object.keys(this.value).forEach(function(k){this[k]=""}, blank);
			this.render(blank);
			if(inp.focus){inp.focus();}
		},
		render: function(v){this._val=this.value=v||this.value;  return this;},
		publish: function(){
			var x, i;
			if(this.collection){
				try{
					x=eval(this.collection);
					}catch(y){
					return console.error(y);
				}
				if(x){
					i=x.indexOf(this._val);
					if(i===-1){return;}
					x[i]=this._val=this.value;
					 
				}
				var col=veneer.$("[collection='"+this.collection+"']").filter(function(a){return a!=this;}, this);
				if(col.length){
					col.forEach(function(el){
						el.render();
					});
				}
				
			}
			
		}
	},
	events: {
		insert: function upd(e){ 
			var elm=e.target;
			if(!elm._temp){ elm._temp=elm.innerHTML; }
				
			veneer.$("input,select,textarea", this).forEach(function(a){
				a.addEventListener("input", function(e){
					elm.publish();					
				}, true);
			});				
			
		}
	},
	props:{
		collection: String,
		
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
				if(cache[href]  || veneer.$("script[src*='"+href.split("/").filter(Boolean).pop()+"']")[0] ){return;}
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
	version: '1.0.0', tags: 'text template',
	purpose: 'Turns a mustache template (inside) to a fancy html view by calling render() with some data',
	attribs: { 
		url: 'a jsonp URL calling the element.render method to update the template',
		src: 'the URL location of a standard JSON resource to update the templated data',
		object: 'the JS window path of an existing object to render the template with'
	},
	externals: ['//js.zapjs.com/js/zap.plugin.mustache.js'],
	methods: ["render(objData) - updates the html by apply the tag's moustache template to the data"],
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////

 (function(){ 
	//mostache, mo'mustache (mustache 8.1 fork )
	
	(function(A,g){"object"==typeof exports&&exports?g(exports):"function"==typeof define&&define.amd?define(["exports"],g):g(A.Mustache={});g.global=A})(this,function mostache(g){function D(a,c){return c.split(/[\.,]/).reduce(function(a,c){return a&&a[c]},a)}function v(a){return"function"==typeof a}function x(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function E(a,c){function b(a){"string"==typeof a&&(a=a.split(F,2));if(!y(a)||2!==a.length)throw Error("Invalid tags: "+a);f=new RegExp(x(a[0])+
"\\s*");r=new RegExp("\\s*"+x(a[1]));B=new RegExp("\\s*"+x("}"+a[1]))}if(!a)return[];var e=[],d=[],w=[],m=!1,k=!1,f,r,B;b(c||g.tags);for(var l=new u(a),p,h,n,t;!l.eos();){p=l.pos;if(n=l.scanUntil(f)){t=0;for(var q=n.length;t<q;++t)if(h=n.charAt(t),G.call(H,h)?k=!0:w.push(d.length),d.push(["text",h,p,p+1]),p+=1,"\n"===h){if(m&&!k)for(;w.length;)delete d[w.pop()];else w=[];k=m=!1}}if(!l.scan(f))break;m=!0;h=l.scan(I)||"name";l.scan(J);"="===h?(n=l.scanUntil(C),l.scan(C),l.scanUntil(r)):"{"===h?(n=l.scanUntil(B),
l.scan(K),l.scanUntil(r),h="&"):n=l.scanUntil(r);if(!l.scan(r))throw Error("Unclosed tag at "+l.pos);t=[h,n,p,l.pos];d.push(t);if("#"===h||"^"===h)e.push(t);else if("/"===h){h=e.pop();if(!h)throw Error('Unopened section "'+n+'" at '+p);if(h[1]!==n)throw Error('Unclosed section "'+h[1]+'" at '+p);}else"name"===h||"{"===h||"&"===h?k=!0:"="===h&&b(n)}if(h=e.pop())throw Error('Unclosed section "'+h[1]+'" at '+l.pos);return L(M(d))}function M(a){for(var c=[],b,e,d=0,g=a.length;d<g;++d)(b=a[d])&&("text"===
b[0]&&e&&"text"===e[0]?(e[1]+=b[1],e[3]=b[3]):(c.push(b),e=b));return c}function L(a){for(var c=[],b=c,e=[],d,g=0,m=a.length;g<m;++g)switch(d=a[g],d[0]){case "#":case "^":b.push(d);e.push(d);b=d[4]=[];break;case "/":b=e.pop();b[5]=d[2];b=0<e.length?e[e.length-1][4]:c;break;default:b.push(d)}return c}function u(a){this.tail=this.string=a;this.pos=0}function q(a,c){this.view=null==a?{}:a;this.cache={".":this.view};this.parent=c}function s(){this.cache={}}var N=Object.prototype.toString,y=Array.isArray||
function(a){return"[object Array]"===N.call(a)},G=RegExp.prototype.test,H=/\S/,O={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},J=/\s*/,F=/\s+/,C=/\s*=/,K=/\s*\}/,I=/#|\^|\/|>|\{|&|=|!/;u.prototype.eos=function(){return""===this.tail};u.prototype.scan=function(a){a=this.tail.match(a);if(!a||0!==a.index)return"";a=a[0];return this.tail=this.tail.substring(a.length),this.pos+=a.length,a};u.prototype.scanUntil=function(a){a=this.tail.search(a);var c;switch(a){case -1:c=this.tail;
this.tail="";break;case 0:c="";break;default:c=this.tail.substring(0,a),this.tail=this.tail.substring(a)}return this.pos+=c.length,c};q.prototype.push=function(a){return new q(a,this)};q.prototype.lookup=function(a){var c=this.cache,b,e,d=[],g;-1!==a.indexOf("|")&&(e=a.trim().split(/\s*\|\s*/).map(function(a,b){return"."===a.slice(0,1)&&(d[b-1]=!0,a=a.slice(1)),a}),a=e.shift());if(a in c)b=c[a];else{for(var m=this,k,f;m;){if(0<a.indexOf("."))for(b=m.view,k=a.split("."),f=0;null!=b&&f<k.length;)g=
b,b=b[k[f++]];else b=m.view[a];if(null!=b)break;m=m.parent}c[a]=b}return e&&e.forEach(function(c,e){var f=D(d[e]?void 0===b?a:b:mostache.global,c);if("function"==typeof f){void 0===b&&(b=a);try{d[e]?b=f.call(b):b=f(b)}catch(g){}}}),v(b)&&(-1!==String(b).indexOf("[native code]")&&g?b=b.call(g):b=b.call(this.view)),b};s.prototype.clearCache=function(){this.cache={}};s.prototype.parse=function(a,c){var b=this.cache,e=b[a];return null==e&&(e=b[a]=E(a,c)),e};s.prototype.render=function(a,c,b){var e=this.parse(a);
c=c instanceof q?c:new q(c);return this.renderTokens(e,c,b,a)};s.prototype.renderTokens=function(a,c,b,e,d){function q(a){return m.render(a,c,b)}d="";for(var m=this,k,f,r="$1",s=/\{SEP\}([\w\W]+?)\{\/SEP\}/g,l=0,p=a.length;l<p;++l)switch(k=a[l],k[0]){case "#":f=c.lookup(k[1]);if(!f)continue;if(y(f))for(var h=0,n=f.length;h<n;++h)r=n-1===h?"":"$1",d+=this.renderTokens(k[4],c.push(f[h]),b,e).replace(/\{INDEX\}/g,h+1).replace(s,r);else if("object"==typeof f||"string"==typeof f)d+=this.renderTokens(k[4],
c.push(f),b,e).replace(s,r);else if(v(f)){if("string"!=typeof e)throw Error("Cannot use higher-order sections without the original template");f=f.call(c.view,e.slice(k[3],k[5]),q);null!=f&&(d+=f)}else d+=this.renderTokens(k[4],c,b,e);break;case "^":f=c.lookup(k[1]);if(!f||y(f)&&0===f.length)d+=this.renderTokens(k[4],c,b,e);break;case ">":if(!b)continue;f=v(b)?b(k[1]):b[k[1]];null!=f&&(d+=this.renderTokens(this.parse(f),c,b,f));break;case "&":f=c.lookup(k[1]);null!=f&&(d+=f);break;case "name":f=c.lookup(k[1]);
null!=f&&(d+=g.escape(f));break;case "text":d+=k[1]}return d};g.name="mustache.js";g.version="0.8.1";g.tags=["{{","}}"];var z=new s;g.clearCache=function(){return z.clearCache()};g.parse=function(a,c){return z.parse(a,c)};g.render=function(a,c,b){return z.render(a,c,b)};g.to_html=function(a,c,b,e){a=g.render(a,c,b);if(!v(e))return a;e(a)};g.escape=function(a){return String(a).replace(/[&<>"'\/]/g,function(a){return O[a]})};g.Scanner=u;g.Context=q;g.Writer=s});






	
	
 veneer("veneer-mustache", {
	events: {
		insert: function(e){
			var elm=e.target;
			
			if(!elm._temp){
				var x;
				if(x=veneer.$("template", elm)[0]){
					elm._temp=x.innerHTML;
				}else{
					elm._temp=elm.innerHTML;
				}
			}
			
			
			elm.render=function(data){
				if(!data){
					if(elm.object){
						try{ data=eval(elm.object);}catch(y){console.error(y);}
					}
					data=elm._data || {};
				}
				elm._data=data;
				elm.change();
				elm.className="";
			};
			
			elm.append=function(data){
				if(!data || !elm._temp){
					return false;
				} 
				elm.change();
				var t=veneer.elm("div", {}, Mustache.to_html(elm._temp.replace(/@src=/g,"src=").trim()+" ", data));
				var targ=elm.target && veneer.$(elm.target)[0] || elm;
				veneer._(t.children).forEach(targ.appendChild.bind(targ));	
				
				elm.className="";				
			};
			
						
						
						
			if(elm.object){
			//  defaults.pageTypes
				try{ elm._data=eval(elm.object);}catch(y){}
			}
			
			if(elm.url){
				veneer.include(elm.url);
			}

			if(elm.src){
				veneer.ajax(elm.src, function(e){ elm.render(elm._data=JSON.parse(e)); });
			}
			
			
			if(elm._data){
				elm.render(elm._data);
			}
			
		},
		
		update: function upd(e){ 
			
			var elm=e.target;

			elm._data=elm._data||"";
		/*	
			if(!elm._temp){
				var x;
				if(x=veneer.$("template", elm)[0]){
					elm._temp=x.innerHTML;
				}else{
					elm._temp=elm.innerHTML;
				}
			}
		*/
	
			if(elm.object){
				try{ elm._data=eval(elm.object);}catch(y){}
			}
			
			if(elm._data){
				elm.innerHTML=Mustache.to_html(elm._temp.replace(/@src=/g,"src="), elm._data);
			}
			
			if(elm.onchange && elm._data ){elm.onchange(e);}
			
			//elm.className="busy";
			//setTimeout(function(){elm.className="";}, 250);
		}
	},
	props: {
		url: veneer.k,
		src: veneer.k,
		object: veneer.k,
		target: veneer.k
	},
	css: "veneer-mustache {  } "
  });
  
  
 }());;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-notify',
	version: '1.0.0', tags: 'native interaction',
	purpose: 'Shows a desktop notification to the user, the parts of which are specified as attributes',
	attribs: { time: 'a standard datestamp parse-able by window.Date() ' },
	events:  [ 'insert' ]
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
		link:  'should the destinations have a link back to #top added? '
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
 		
			[].slice.call(document.querySelectorAll(elm.target)).map(function(a, index){
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
	attribs: { src: 'the url of the page to include SOP/CORS restricted '	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////




   veneer("veneer-panel", {
	content: "<progress indeterminate></progress>",
	events: {
		update: function(e){ 
			var elm=e.target;
			elm.innerHTML=elm.src
			
			//return;
			veneer.ajax( elm.src, 
				function(resp){
					elm.className = elm.className.replace(/\bbusy\b/g,"").trim();
					elm.innerHTML=resp;
				}
			);
		}
	},
	props:{
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
			key="X:" + location.pathname + elm.id;

			(elm.session?sessionStorage:localStorage)[key] = elm.innerHTML;
		},
		
		insert: function ins(e){ 


			var elm=e.target,
			key= "X:" + location.pathname + elm.id,
			content=(elm.session?sessionStorage:localStorage)[key]||"";
		
			
			var MO=self.MutationObserver||self.WebKitMutationObserver;
		
			if(!MO){
				if(!ins.waiting){
					ins.waiting=true;
					veneer.include("/veneer/ie.js");
				}
				return setTimeout(ins.bind(this, e), 100);
				
			}
			
			
			
			elm._orig=elm.innerHTML;
			
			elm.clear=function(blnClearHTML){ 
				elm.innerHTML=elm._orig;
				return delete (elm.session?sessionStorage:localStorage)[key];
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
				
			}else{
				if(elm.change){elm.change(); }
			}
			
			// subscribe to innerHTML changes:			 
			// create an observer and debounce saves to a half second:
			var timer, 
			ob = new MO(function() {
			     clearTimeout(timer);
				 if(elm.change) timer=setTimeout(elm.change.bind(elm), 500);
				
			});
			
			//ios6 bug patch
			if(navigator.userAgent.match("6_0 like Mac OS X")){
				elm.addEventListener("DOMNodeInserted", Boolean, false);
			}
			
			// watch over the perist element and it's kids:
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
		status: 'String: indicates state of playlist/audio player'
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

	attribs: { 
		
	},
	events:  [ 'insert' ]
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
				star.onclick=function(){
					if(elm.once && elm.spent){return;}
					elm.spent=true;
					elm.value=+this.title;
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
	tagName: 'veneer-require',
	version: '1.0.0', tags: 'native ui',
	purpose: 'loads scripts from cdnjs ',

	attribs: { 
		
	},
	events:  [ 'insert' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-require", {
	events: {
	
		insert: function(e){ 
			var elm=e.target;
				
		}
	}
 });
	;
;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-route',
	version: '1.0.0', tags: 'native util nav',
	purpose: 'Sets path config based on hash changes',
	attribs: { 
		
	},
	events:  [ 'insert' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-route", {
	proto: HTMLInputElement.prototype,
	events: {
		insert: function ldr(e){ 
			var elm=e.target, 
			 code=elm.innerHTML.trim();
			 if(code){ eval(code); }
			 
			 
			function ohc(){
			  var argv=location.hash.slice(1).split("/").filter(Boolean); 
			  SECTION =argv[0];
			  PAGE= argv[1];
			  SUB= argv[2];
			  document.body.setAttribute("data-nav-section", SECTION||"");
			  document.body.setAttribute("data-nav-page", PAGE||"");
			  document.body.setAttribute("data-nav-sub", SUB||"");
			};
	
			addEventListener("hashchange", ohc, true);
			ohc();
		
		}
	},
	props:{
		js: veneer.bool
	},
	css: "veneer-route { display:none; } "
  });
  ;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-rss',
	version: '1.0.0', tags: 'native external template data',
	purpose: 'Displays an RSS feed given a url and html template',
	attribs: { 
		url: 'the url of the rss feed',
		limit: 'the maximum # of items to show' },
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
		return veneer.template(item, elm._temp);
	}).join("\n");
	elm.style.visibility="visible";
};



veneer("veneer-rss", {  
	events: {
		update: function upd(e){ 
			var elm=e.target;
			 
			if(elm.refresh){ setTimeout(upd.bind(this,e), 1000*60*elm.refresh)}
			elm.className="busy";
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
		refresh: Number
	},
	css:  "veneer-rss.busy { visibility: hidden; } veneer-rss {float: left: clear: both;  }  " 
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
						
			clearTimeout(upd.timer);
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
			
			function changer(){
				var dest=elm._dest=veneer.$(elm.target)[0];
				if(isTable){ dest=dest.getElementsByTagName("tbody")[0]; }

				var kids=veneer._(dest.children);
				
				if(kids.length<2){return;}
			
				var prop = elm.prop=this.value;
				var finish=elm.desc?"reverse":"valueOf";
				elm.desc=!elm.desc;
				
								
				var sorter=function(a,b){
						return a[prop]>b[prop] ? 1 : (a[prop]===b[prop]?0:-1);
				};
				 
				if( !isNaN(parseInt(kids[0][prop])) ){ 
						sorter=function(a,b){
							return parseFloat(a[prop])-parseFloat(b[prop]);					
						};
				}
				
				
				if(prop[0]=="@"){
					prop=prop.slice(1);
					sorter=function(a,b){
						return (a=a.getAttribute(prop))>(b=b.getAttribute(prop)) ? 1 : (a===b?0:-1);
					}
					
					if( kids[0][prop]-0.768576534435 ){ 
						sorter=function(a,b){
							return a.getAttribute(prop)-b.getAttribute(prop);
						};
					}
					  
				}
				
				
				
				kids.sort(sorter)[finish]().forEach(function(a){
					dest.appendChild(a);
				});
				
				
				//veneer.raiseEvent("sorted", elm);
				
			};
			
		}
	},
	props:{
		target: String,
		prop: String,
		desc: veneer.bool
	},
	defaults:{
		prop: "textContent"
	}
  });
  ;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-sparkline',
	version: '1.0.0', tags: 'native data ui',
	purpose: 'Displays a tiny chart from a series of number',
	attribs: { 
		data: 'what info to put into the chart?'
		
	},
	example: "<veneer-sparkline data='1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,3,6,9'</veneer-sparkline> ",
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////

   veneer("veneer-sparkline", {
	
	events: {
		update: function upd(e){ 
			var elm=e.target;
			var data=(elm.data||"").split(/\s*,\s*/).map(Number).filter(isFinite);
			var max =Math.max.apply(null, data);
			var min =Math.min.apply(null, data);
			var len=data.length;
			var width=Math.floor(elm.offsetWidth / len);
			
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
			
			
			
			
			elm.style.visibility="visible";
		}
	},
	props:{
		data: String,
		color: String
	},
	css:   " veneer-sparkline { position:relative; display: inline-block;height: 1.2em; width: 5em; } " +
			"veneer-sparkline .seq { position:relative; display: inline-block;  border:0px solid transparent; background-color: #444; min-width: 3px; margin:0; }"+
			"veneer-sparkline[type='line'] .seq { background-color: transparent; border-top: 2px solid #888;  }"
  });
  ;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-stock',
	version: '1.0.0', tags: 'native external',
	purpose: 'Displays stock price info from a given quote symbol attrib',
	example: "<veneer-stock symbol='GOOG'></veneer-stock>",
	attribs: { symbol: 'the stock ticker symbol to display information about'	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////

   veneer._incomingStock=function incomingStock(o){
	var elms=veneer.$("[symbol='"+o.query.results.quote.symbol+"']");
	
	elms.map(function(a){
		if(!a._temp){a._temp=a.innerHTML;}
		a.className="";
		a.innerHTML=veneer.template(o.query.results.quote, a._temp);
	});
   };



   veneer("veneer-stock", {
	content: "<b>{{Symbol}}</b>	{{Name}} <br /> <b>${{Bid}} ({{Change}}%)</b> {{Volume}} </small>",
	events: {
		update: function(e){ 
			e.target.className="busy";
			veneer.include(
				"https://query.yahooapis.com/v1/public/yql?q="+
				"select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20%3D%20%22"+
				    e.target.symbol +
				"%22%0A%09%09&format=json&env=http%3A%2F%2Fdatatables.org%2Falltables.env"+
				"&callback=veneer._incomingStock"
			);
		}
	},
	props:{
		symbol: String
	},
	css:   "veneer-stock.busy { visibility: hidden; } veneer-stock {float: left: clear: both;  }  " 
  });
  ;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-time',
	version: '1.0.0', tags: 'native date',
	example: "<veneer-time></veneer-time>",
	purpose: 'turns a GMT or UTC or ISO Date stamp into the local time (ex 11:59 PM)',
	attribs: { time: 'a standard datestamp parse-able by window.Date() ' },
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-time", {
	events: {
		update: function(e){ 
			e.target.innerHTML=new Date( +e.target.time  || e.target.time || new Date()).toLocaleTimeString();
			e.target.className="busy";
			setTimeout(function(){e.target.className="time";}, 250);
		}
	},
	props:{
		time: veneer.k
	}
  });
  ;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-viewsource',
	version: '1.0.0', tags: 'native dev text',
	example: '<veneer-viewsource target=title>hello world</veneer-viewsource>',
	purpose: 'shows the source of HTML, the whole document, or the sources of elements found via CSS selector(s) as target',
	attribs: { target: 'a CSS selector hitting all code that should be displayed' },
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-viewsource", {
	content: "\n\t <button class='shadow update'> Update </button> ",
	events: {
		update: function(e){
			
			
		},
		init: function(e){
				
		},
		
		insert: function(e){ 
			var elm=e.target,
			 prop=elm.prop || "checked",
			 sources=veneer._(document.querySelectorAll(elm.target||"html")),
			 box=veneer.elm("code");
			elm.appendChild(box);
			elm.children[0].onclick=repaint;
						
			
			function repaint(){
				box.innerHTML=sources.map(function(elm){
					return elm.outerHTML
					.replace(/&/g, '&amp;')
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;')
					.replace(/\"/g, '&quot;')
					.replace(/\'/g, '&#39;') ;
				}).join("\n").trim();
			};
			
			repaint();
			
		}
	},
	 css: " html body [data-veneer-pre] { white-space: pre-wrap !important; }"+
	 "veneer-viewsource code{ white-space: pre-wrap; font:monospace;  font-size: menu;display: block; overflow: auto; max-height: 13em; }",
	props:{
		target: String	
	},
	defaults:{
		target: "html"
	}
	
  });
  ;
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-wrap',
	version: '1.0.0', tags: 'native ui',
	purpose: 'Adds markup around sub-tags from a CSS selector, good for turning clean markup into bootstrap components.',

	attribs: { 
		target: ' a CSS selector of elements to wrap the inside contents with'
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
			  wrap(sel, elm.innerHTML, elm.inner );
			 elm._booted=true;
			
		}
	},
	props:{
		target: String,
		inner: veneer.k
	},
	 css: "veneer-wrap{display:none}"
  });
  
	function deep(elem){
		while ( elem.children[0] && elem.children[0].nodeType === 1 ) {
			elem = elem.children[0];
		}
	  return elem;
	}

  
  function wrap(tags, elem, blnInner){
	  if(elem.split){elem=veneer.elm("div",{}, elem).children[0];}
	  if(tags.split){tags=veneer.$(tags);}
	  tags.map(function(a){  
		if(a._wrapped){return;}
		a._wrapped=true;
		var copy=elem.cloneNode(true), 
			spot=deep(copy);
		  if(blnInner){a=deep(a).firstChild||deep(a);}
		a.parentNode.insertBefore(copy, a);
		spot.appendChild(a);
	  });
	 return elem;
}

  
 }());