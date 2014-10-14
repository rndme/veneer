/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-pagenav',
	version: '1.0.0', tags: 'native ui',
	purpose: 'creates a navigation block from selected elements using the target attrib to define a CSS selector',
	attribs: { 
		target: 'a CSS selector hitting all elements that should be linked by the navigation' ,
		link:  'should the destinations have a link back to #top added? ',
		parent: 'if present, the link will attempt to use the parent nodes id. ex: if your A is in an H3 with an id attrib, the H3s id is used.'
	},
	events:  [ 'insert' ]
 }
**/

//////////////////////////////////////////////



 veneer("veneer-pagenav", {
	events: {
		
		insert: function ins(e){ 
			ins.hits=ins.hits||{};
			//console.warn(e.target);
			var elm=e.target,
			
			box=veneer.elm("nav", {role:  "navigation"})
			        .appendChild(veneer.elm("ul", {"class":  "nav nav-pills"}));
 		
			[].slice.call(document.querySelectorAll(elm.target)).forEach(function(a, index){
				if(a.className.indexOf("nolink")!==-1 || a.getAttribute("data-nolink")!=null || a.getAttribute("nolink")!=null){return;}
				

				
				var id=a.id=(a.id|| ("_"+Math.random().toString(36).slice(-5)));
				var id2=a.textContent.replace(/\W+/g,"").slice(0,20);
				if(!ins.hits[id2]){a.id=id=id2;}
				if(elm.parent && a.parentNode.id){ id=a.parentNode.id; }

				box.appendChild(veneer.elm("li", {"class":"item"}, a.textContent.link("#"+id)));

				if(elm.link && index){
					a.appendChild(veneer.elm("a", {href:"#", "class":"toplink"}, " Back to top".small() ));
				}
				
				
			});
				
		
			//elm.innerHTML="";
			elm.appendChild(box);
		
		}
	},
	props:{
		target: String,
		parent: veneer.bool,
		link: veneer.bool
	}
	
  });
  