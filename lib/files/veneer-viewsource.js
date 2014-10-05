/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-viewsource',
	version: '1.0.0', tags: 'native dev text',
	example: '<veneer-viewsource target=title>hello world</veneer-viewsource>',
	purpose: 'shows the source of HTML, the whole document, or the sources of elements found via CSS selector(s) as target',
	attribs: { target: 'a CSS selector hitting all code that should be displayed' },
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-viewsource", {
	content: "\n\t <button class='shadow update'> Update </button> ",
	events: {
		update: function(e){
			
			
		},
		init: function(e){
				
		},
		
		insert: function(e){ 
			var elm=e.target,
			 prop=elm.prop || "checked",
			 sources=veneer._(document.querySelectorAll(elm.target||"html")),
			 box=veneer.elm("code");
			elm.appendChild(box);
			elm.children[0].onclick=repaint;
						
			
			function repaint(){
				box.innerHTML=sources.map(function(elm){
					return elm.outerHTML
					.replace(/&/g, '&amp;')
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;')
					.replace(/\"/g, '&quot;')
					.replace(/\'/g, '&#39;') ;
				}).join("\n").trim();
			};
			
			repaint();
			
		}
	},
	 css: " html body [data-veneer-pre] { white-space: pre-wrap !important; }"+
	 "veneer-viewsource code{ white-space: pre-wrap; font:monospace;  font-size: menu;display: block; overflow: auto; max-height: 13em; }",
	props:{
		target: String	
	},
	defaults:{
		target: "html"
	}
	
  });
  