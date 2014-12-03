/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-wrap',
	version: '1.0.0', tags: 'native ui',
	purpose: 'Adds markup around sub-tags from a CSS selector, good for turning clean markup into bootstrap components.',

	attribs: { 
		target: ' a CSS selector of elements to wrap the inside contents with',
		inner: ' if present, puts the element in the deepest element in the wrapper',
		outer: ' if present, appends the element in the wrapper'
	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 (function(){
	
	
	
 veneer("veneer-wrap", {
	events: {
	
		update: function(e){ 
			var elm=e.target, 
			 sel=elm.target;
					  
			var targ=sel;	  
			//allow inserting an empty tag with a target attrib pointing to another veneer-attributes to re-run:
			if(targ && !elm.innerHTML.trim() && (targ=veneer.$(targ)) && targ.length==1 && targ[0].tagName.toLowerCase()=="veneer-wrap" ){
			
				if(targ[0]._booted){targ[0].change(); }
			   return;			
			}
			wrap(sel, elm.innerHTML, elm.inner, elm.outer );
			elm._booted=true;
		}
	},
	props:{
		target: String,
		inner: veneer.bool,
		outer: veneer.bool
	},
	 css: "veneer-wrap{display:none}"
  });
  
	function deep(elem){
		while ( elem.children[0] && elem.children[0].nodeType === 1 ) {
			elem = elem.children[0];
		}
	  return elem;
	}

  
  function wrap(tags, elem, blnInner, blnOuter){
	  if(elem.split){elem=veneer.elm("div",{}, elem).children[0];}
	  if(tags.split){tags=veneer.$(tags);}
	  tags.map(function(a){  
		if(a._wrapped){return;}
		a._wrapped=true;
		var copy=elem.cloneNode(true), 
			spot=deep(copy);
		  if(blnInner){a=deep(a).firstChild||deep(a);}
		
		if(blnOuter){
			veneer._(a.children).map(spot.appendChild.bind(spot));
			a.appendChild(spot);
			return;
		}
		a.parentNode.insertBefore(copy, a);
		spot.appendChild(a);
	  });
	 return elem;
}

  
 }());