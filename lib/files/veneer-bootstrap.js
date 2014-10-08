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
  