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
			veneer.$("head")[0].appendChild(veneer.elm("link",{href:"//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css", rel: "stylesheet" }));
		
			if(elm.icons){
			veneer.$("head")[0].appendChild(veneer.elm("link",{href:"//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css", rel: "stylesheet" }));
			}
		
			if(elm.js && !elm.widgets){
				veneer.include(["//code.jquery.com/jquery-latest.min.js"])[0].onload=function(){
					veneer.include("//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js");
				}
				
			}
			
			if(elm.widgets){
				veneer.include(["http://danml.com/veneer/lib/files/veneer-bs.js"]);
				document.body.appendChild(veneer.elm("veneer-bs"));
			}
			
			function onJq(){
				if(!window.jQuery){ return setTimeout(onJq, 36); }
				eval(elm.innerHTML)
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
  