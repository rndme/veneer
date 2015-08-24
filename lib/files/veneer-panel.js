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
remove: function(e){ clearTimeout(e.target._timer); },
update: function upd(e){
	var elm=e.target;
	elm.innerHTML=elm.src
	clearTimeout(elm.timer);
	if(+elm.interval &&!elm.replace) elm._timer=setInterval( upd.bind(this, e), 1000*elm.interval);
	
	veneer.ajax( elm.src, 
		function(resp){
			var pn=elm.parentNode;
			elm.innerHTML=resp;
			elm.ready=true;
			veneer.raiseEvent("ready", elm, elm);
			if(elm.replace && pn){
				veneer._(elm.childNodes).forEach(function(a,b,c){
					pn.insertBefore(a, elm);
				});
				pn.removeChild(elm);
			}
			if(elm.js)veneer.$("script:not([type]),script[type='text/javascript']", elm).forEach(function(s){
				if(s.src) return veneer.include(s.src);
				try{eval(s.textContent);}catch(y){}
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
	src: String,
	ready: veneer.bool,
	replace: veneer.bool
},
css:   "veneer-panel.busy { visibility: hidden; } " 
});