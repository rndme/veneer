/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-persist',
	version: '1.0.0', tags: 'native storage',
	purpose: 'Keeps the contents of this tag between page views',

	attribs: { 
		id:		' required to distinguish different persisted sections',
		session: ' Should the persistence only last until the tab is closed? ' 
	},
	events:  [ 'update' ],
	methods: {clear: 'returns to the hard-coded html content and deletes any saved changes'}
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
	}
	// run scripts:
	veneer.$("script:not([type]),script[type='text/javascript']", elm).forEach(function(a){
		var s;
		if(!a.src)try{return eval(a.textContent);}catch(y){return;}
		veneer.include(a.src);
	});

	
//	if(elm.onchange)elm.onchange();
//
	if(elm.change) elm.change();
	
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
  
