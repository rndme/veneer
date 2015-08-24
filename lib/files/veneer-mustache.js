/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-mustache',
	version: '1.0.6', tags: 'text template',
	purpose: 'Turns a mustache template (inside) to a fancy html view by calling render() with some data',
	attribs: { 
		url: 'a jsonp URL calling the element.render method to update the template',
		src: 'the URL location of a standard JSON resource to update the templated data',
		href: 'the URL of a template content file, used instead of the tags inner HTML',
		object: 'the JS window path of an existing object to render the template with',
		target: 'renders the template content to another tag, chosen by this CSS selector',
		interval: '# of seconds after which to auto-re-render or reload external content',
		static: 'if present, tag will never update after first render, and wont respond to interval to save RAM/CPU',
		tag: 'the name of a temp tag to use when parsing mustache output, normally div, but alllows tbody for generating TR tags',
		hidden: 'an easy way to hide a template using the default css ',
		
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
// mostache, mo'mustache 2.1.3m (mustache.js fork )
(function(B,m){"object"==typeof exports&&exports&&"string"!=typeof exports.nodeName?m(exports):"function"==typeof define&&define.amd?define(["exports"],m):(B.Mustache={},m(Mustache)),m.global=B})(this,function mustacheFactory(m){function w(a){return"function"==typeof a}function y(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function C(a,c){return null!=a&&"object"==typeof a&&c in a}function E(a,c){function b(a){"string"==typeof a&&(a=a.split(F,2));if(!x(a)||2!==a.length)throw Error("Invalid tags: "+a);z=new RegExp(y(a[0])+"\\s*"),u=new RegExp("\\s*"+y(a[1])),r=new RegExp("\\s*"+y("}"+a[1]))}if(!a)return[];var d=[],g=[],l=[],h=!1,e=!1,z,u,r;b(c||m.tags);for(var f=new v(a),t,n,q,k;!f.eos();){t=f.pos;if(q=f.scanUntil(z)){k=0;for(var p=q.length;k<p;++k)if(n=q.charAt(k),G.call(H,n)?e=!0:l.push(g.length),g.push(["text",n,t,t+1]),t+=1,"\n"===n){if(h&&!e)for(;l.length;)delete g[l.pop()];else l=[];e=h=!1}}if(!f.scan(z))break;h=!0,n=f.scan(I)||"name",f.scan(J),"="===n?(q=f.scanUntil(D),f.scan(D),f.scanUntil(u)):"{"===n?(q=f.scanUntil(r),f.scan(K),f.scanUntil(u),n="&"):q=f.scanUntil(u);if(!f.scan(u))throw Error("Unclosed tag at "+f.pos);k=[n,q,t,f.pos],g.push(k);if("#"===n||"^"===n)d.push(k);else if("/"===n){n=d.pop();if(!n)throw Error('Unopened section "'+q+'" at '+t);if(n[1]!==q)throw Error('Unclosed section "'+n[1]+'" at '+t)}else"name"===n||"{"===n||"&"===n?e=!0:"="===n&&b(q)}if(n=d.pop())throw Error('Unclosed section "'+n[1]+'" at '+f.pos);return L(M(g))}function M(a){for(var c=[],b,d,g=0,l=a.length;g<l;++g)(b=a[g])&&("text"===b[0]&&d&&"text"===d[0]?(d[1]+=b[1],d[3]=b[3]):(c.push(b),d=b));return c}function L(a){for(var c=[],b=c,d=[],g,l=0,h=a.length;l<h;++l)switch(g=a[l],g[0]){case"#":case"^":b.push(g),d.push(g),b=g[4]=[];break;case"/":b=d.pop(),b[5]=g[2],b=0<d.length?d[d.length-1][4]:c;break;default:b.push(g)}return c}function v(a){this.tail=this.string=a,this.pos=0}function p(a,c){this.view=a,this.cache={".":this.view},this.parent=c}function k(){this.cache={}}var N=Object.prototype.toString,x=Array.isArray||function(a){return"[object Array]"===N.call(a)},G=RegExp.prototype.test,H=/\S/,O={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},J=/\s*/,F=/\s+/,D=/\s*=/,K=/\s*\}/,I=/#|\^|\/|>|\{|&|=|!/;v.prototype.eos=function(){return""===this.tail},v.prototype.scan=function(a){return a=this.tail.match(a),!a||0!==a.index?"":(a=a[0],this.tail=this.tail.substring(a.length),this.pos+=a.length,a)},v.prototype.scanUntil=function(a){a=this.tail.search(a);var c;switch(a){case-1:c=this.tail,this.tail="";break;case 0:c="";break;default:c=this.tail.substring(0,a),this.tail=this.tail.substring(a)}return this.pos+=c.length,c},p.prototype.push=function(a){return new p(a,this)},p.prototype.lookup=function(a){var c=this.cache,b,d,g=[];-1!==a.indexOf("|")&&(d=a.trim().split(/\s*\|\s*/).map(function(a,b){return"."===a.slice(0,1)&&(g[b-1]=!0,a=a.slice(1)),a}),a=d.shift());if(c.hasOwnProperty(a))b=c[a];else{for(var l=this,h,e,k=!1;l;){if(0<a.indexOf("."))for(b=l.view,h=a.split("."),e=0;null!=b&&e<h.length;)e===h.length-1&&(k=C(b,h[e])),b=b[h[e++]];else b=l.view[a],k=C(l.view,a);if(k)break;l=l.parent}c[a]=b}return d&&d.forEach(function(c,d){var f=c.split("(");c=f.shift(),f.length&&(f=f[0].trim().split(")")[0].trim().split(/\s*\,\s*/).map(function(a){try{return JSON.parse(a)}catch(b){return a}}));var e=function(a,b){return b.split(/[\.,]/).reduce(function(a,b){return a&&a[b]},a)}(g[d]?void 0===b?a:b:mustacheFactory.global,c);if("function"==typeof e){void 0===b&&(b=a);try{if(g[d])f.length?b=e.apply(b,f):b=e.call(b);else if(f.length)switch(f.length){case 1:return b=e(b,f[0]);case 2:return b=e(b,f[0],f[1]);case 3:return b=e(b,f[0],f[1],f[2]);default:return e.apply(this,[b].concat(f))}else b=e(b)}catch(h){}}}),w(b)&&(String(b).indexOf("[native code]"),b=b.call(this.view)),b},k.prototype.clearCache=function(){this.cache={}},k.prototype.parse=function(a,c){var b=this.cache,d=b[a];return null==d&&(d=b[a]=E(a,c)),d},k.prototype.render=function(a,c,b){var d=this.parse(a);return c=c instanceof p?c:new p(c),this.renderTokens(d,c,b,a)},k.prototype.renderTokens=function(a,c,b,d){for(var g="",l,h,e,k=0,m=a.length;k<m;++k)e=void 0,l=a[k],h=l[0],"#"===h?e=this.renderSection(l,c,b,d):"^"===h?e=this.renderInverted(l,c,b,d):">"===h?e=this.renderPartial(l,c,b,d):"&"===h?e=this.unescapedValue(l,c):"name"===h?e=this.escapedValue(l,c):"text"===h&&(e=this.rawValue(l)),void 0!==e&&(g+=e);return g},k.prototype.renderSection=function(a,c,b,d){function g(a){return k.render(a,c,b)}var k=this,h="",e=c.lookup(a[1]),m="$1",p=/\{SEP\}([\w\W]+?)\{\/SEP\}/g;if(e){if(x(e))for(var r=0,f=e.length;r<f;++r)m=f-1===r?"":"$1",h+=this.renderTokens(a[4],c.push(e[r]),b,d).replace(/\{INDEX\}/g,r+1).replace(p,m);else if("object"==typeof e||"string"==typeof e||"number"==typeof e)h+=this.renderTokens(a[4],c.push(e),b,d).replace(p,m);else if(w(e)){if("string"!=typeof d)throw Error("Cannot use higher-order sections without the original template");e=e.call(c.view,d.slice(a[3],a[5]),g),null!=e&&(h+=e)}else h+=this.renderTokens(a[4],c,b,d);return h}},k.prototype.renderInverted=function(a,c,b,d){var g=c.lookup(a[1]);if(!g||x(g)&&0===g.length)return this.renderTokens(a[4],c,b,d)},k.prototype.renderPartial=function(a,c,b){if(b&&(a=w(b)?b(a[1]):b[a[1]],null!=a))return this.renderTokens(this.parse(a),c,b,a)},k.prototype.unescapedValue=function(a,c){var b=c.lookup(a[1]);if(null!=b)return b},k.prototype.escapedValue=function(a,c){var b=c.lookup(a[1]);if(null!=b)return m.escape(b)},k.prototype.rawValue=function(a){return a[1]},m.name="mustache.js",m.version="2.1.3",m.tags=["{{","}}"];var A=new k;m.clearCache=function(){return A.clearCache()},m.parse=function(a,c){return A.parse(a,c)},m.render=function(a,c,b){if("string"!=typeof a)throw c=TypeError,a=x(a)?"array":typeof a,new c('Invalid template! Template should be a "string" but "'+a+'" was given as the first argument for mustache#render(template, view, partials)');return A.render(a,c,b)},m.to_html=function(a,c,b,d){a=m.render(a,c,b);if(!w(d))return a;d(a)},m.escape=function(a){return String(a).replace(/[&<>"'\/]/g,function(a){return O[a]})},m.Scanner=v,m.Context=p,m.Writer=k})

;


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
	
	//allow panels to render up before executing?
	if(elm.href){
		elm.reloadTemplate=gatherExternalTemplate;
		gatherExternalTemplate();
	}else{
		finishInsert();
	}
	
	function gatherExternalTemplate(){
		veneer.ajax(elm.href, function(s){
			elm._temp=s;
			finishInsert();
		});
	}
		
	function finishInsert(){
		if(elm.interval){ elm._timer=setInterval(doRender, elm.interval * 1000 ); }
		if(elm.object && !elm.data) elm.updateObject();
		doRender(); 
	}
	
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
	href: veneer.k,
	tag: veneer.k,
	hidden: veneer.bool
}
});
}());