/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-classes',
	version: '1.0.0', tags: 'native ui',
	purpose: 'Add classes to sub-tags using CSS selectors, good for turning clean markup into bootstrap components.',

	attribs: { 
		
	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-classes", {
	events: {
	
		update: function(e){ 
			var elm=e.target, rules=elm.rules||"";
			rules.trim()
			 .split("}")
			 .filter(String)
			 .map(Function.call.bind("".trim))
			 .map(function(a,b){ b=a.split("{");b[1]=b[1].trim().split(/\s+/).filter(String); return b; })
			 .map(function(a,b,c){
				var sel=a[0], 
				      r=a[1],
					  t=veneer.$(sel, elm);
					  
					  //console.log(sel, r, t);
					  
					  if(!t[0]){return;}
					  t.map(function(targ){
						r.map(function(cls){
							
							if(targ.classList)return targ.classList.add(cls);
							
							var _=" ",
								c= _+ (targ.className||"") + _;								
							if(c.indexOf(_+cls+_)===-1){
								targ.className+=" " + s; 
							}
						});//end class map
					  });//end target map
			 });
			
		}
	},
	props:{
		rules: String
	},
	 css: "veneer-classes{display:inline-block;}"
  });
  