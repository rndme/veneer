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
  
  
 }());