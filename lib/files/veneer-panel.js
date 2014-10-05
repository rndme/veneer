/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-panel',
	version: '1.0.0', tags: 'native ui ajax',
	purpose: 'Displays content from another file, like an iframe, but in context of main page',
	attribs: { src: 'the url of the page to include SOP/CORS restricted '	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////




   veneer("veneer-panel", {
	content: "<progress indeterminate></progress>",
	events: {
		update: function(e){ 
			var elm=e.target;
			elm.innerHTML=elm.src
			
			//return;
			veneer.ajax( elm.src, 
				function(resp){
					elm.className = elm.className.replace(/\bbusy\b/g,"").trim();
					elm.innerHTML=resp;
				}
			);
		}
	},
	props:{
		src: String
	},
	css:   "veneer-panel.busy { visibility: hidden; } " 
  });
  