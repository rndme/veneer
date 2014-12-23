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
  