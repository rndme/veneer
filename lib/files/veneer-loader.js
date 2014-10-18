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
  