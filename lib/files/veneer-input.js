/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-input',
	version: '1.0.0', tags: 'native ui',
	purpose: 'Makes wrapped form inputs self-publish to attributes, allowing html snapshots to retain input state',
	example: '<veneer-input> watch value attrib via inspector while typing: <input></veneer-input>',
	attribs: { 
		
	},
	events:  [ 'insert' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-input", {
	events: {
	
		insert: function ins(e){ 
			var elm=e.target,
				kids=veneer.$("input,select", elm);
				if(kids.length===0){
					return setTimeout(ins.bind(this, e), 500);
				}
				//console.log(kids);
				
				kids.map(function(inp){
					inp._input=elm;
					
					inp.addEventListener("input", function(e){
						if(inp.options){
							var si=inp.selectedIndex;
							
							veneer.$(":selected").map(function(a){
								a.removeAttribute("selected");
							});
							return inp.options[si].selected=true;
						}
						
						if(inp.type=="radio"||inp.type=="checkbox"){return inp.checked ? inp.setAttribute("checked","") : inp.removeAttribute("checked");}
						return inp.setAttribute("value", inp.value);
					
					}, false);
					
				});

		}
	},
	css: "veneer-input{ display: inline-block; }",
	props:{
		
	}
  });
  