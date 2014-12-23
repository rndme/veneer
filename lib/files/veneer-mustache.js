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
		tag: 'the name of a temp tag to use when parsing mustache output, normally div, but alllows tbody for generating TR tags',
		hidden: 'an easy way to hide a template using the default css '
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



function getParents(elm){
	var r=[elm];
	while(elm=elm.parentNode) r.push(elm);
	return r;
}	

	
veneer("veneer-mustache", {
methods: {
	template: function(data){ return Mustache.to_html(this._temp.replace(/@src=/g,"src=").trim(), data); }
},
events: {
remove: function(e){ clearTimeout(e.target._timer); },
insert: function(e){
	var elm=e.target, x, x3;
	
	//defer bs widget loading, it will be re-appending in a moment:
	if(elm.parentNode && elm.parentNode.tagName.match(/^BS\-/i)){ return; } 
	
	elm.updateObject=function(){
		if(elm.object) try{ elm._data=Function("return 0||"+elm.object)(); }catch(y){}
	};	
	
	if(!elm._temp){
		if((x=veneer.$("template, [type*='template']", elm))[0]){
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
	}//end if _temp?

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
		
		var t=veneer.elm(elm.tag||"div", {}, elm.template(data)+" "   ),
		targ=elm.target && veneer.$(elm.target)[0] || elm;
		var div;
		veneer._(t.children).map(function(a,b){
			a._data=data;
			if(!b)div=a;
			return a;
		}).forEach(blnPre===true ? 
			function(a){targ.insertBefore(a, targ.firstChild);}	: 
			targ.appendChild.bind(targ) 
		);	
		
		elm.change();
		return div;
	};

	elm.prepend=function(data){
		return elm.append(data, true);		
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

	if(elm.static && elm._static) return;
	if(elm.object && elm.updateObject){
		elm.updateObject();
	}
	
	var targ=elm.target && veneer.$(elm.target)[0] || elm;
	
	if(elm._data){
		var b1=elm._last, 
		b2=Mustache.to_html(elm._temp.replace(/@src=/g,"src="), elm._data);
		if(b1!=b2){elm._last=targ.innerHTML=b2;}
	} 
	
	veneer.$("script:not([type]),script[type='text/javascript']", targ).forEach(function(s){
		if(s.src) return veneer.include(s.src);  
		try{eval(s.textContent);}catch(y){}
	});
	
	if(elm.onchange  )	elm.onchange(e);
	if(elm.oninput )	elm.oninput();
	
	if(elm.static){
		elm._static=true;
		clearInterval(elm._timer); 
	}
	
}
},
css:"veneer-mustache{display: inline-block;}veneer-mustache[hidden]{display:none;}",
props: {
	url: veneer.k,
	src: veneer.k,
	object: veneer.k,
	target: veneer.k,
	"static": veneer.bool,
	interval: Number,
	tag: veneer.k,
	hidden: veneer.bool
}
});
}());