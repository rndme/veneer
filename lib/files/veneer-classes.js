/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-classes',
	version: '1.0.0', tags: 'native ui',
	purpose: 'Add classes to sub-tags using CSS selectors, good for turning clean markup into bootstrap components.',

	attribs: { 
		target: ' a CSS selector of elements to alter the attributes of',
		rules: ' kinda like CSS: a selector on the left, but in the braces is a list of classes, exactly as they would appear in an html class attribute'
	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 (function(){
 
 
 var used={};
 
 veneer("veneer-classes", {
	events: {
	
		update: function upd(e){ 
			var elm=e.target, rules=elm.rules||"";
			
			if(elm.target){ elm=veneer.$(elm.target)[0]; }
			
			
			rules.trim()
			 .split("}")
			 .filter(String)
			 .map(Function.call.bind("".trim))
			 .map(function(a,b){ b=a.split("{");b[1]=b[1].trim().split(/\s+/).filter(String); return b; })
			 .map(function(a,b,c){
				var sel=a[0], 
				      r=a[1],
					  t=veneer.$(sel, elm);
					  
					  
					  if(!t.length){
							used[sel]=used[sel]||1;
							if(used[sel]++<29) setTimeout( upd.bind(this,e) , 70);
							return ;
						}
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
		rules: String,
		target: veneer.k
	},
	 css: "veneer-classes{display:inline-block;}"
  });
  
  }());