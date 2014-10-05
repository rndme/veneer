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
  