/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-attributes',
	version: '1.0.0', tags: 'native ui',
	purpose: 'Add attribs to tags using CSS selectors, good for turning clean markup into bootstrap components.',
	example: "<veneer-attributes>body {bgcolor=red }</veneer-attributes>\n (inspect body tag to see result)",
	attribs: { 
		target: ' a CSS selector of elements to alter the attributes of',
		rules: ' kinda like CSS: a selector on the left, but in the braces is a list of attribs and values exactly as they would appear in a tag opening'
	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////

veneer("veneer-attributes", {
events: {
update:  function(e){ 
	var elm=e.target, 
	targ=elm.target||"";
	
	//allow inserting an empty tag with a target attrib pointing to another veneer-attributes to re-run:
	if(targ && (targ=veneer.$(targ)) && targ.length==1 && targ[0].tagName.toLowerCase()=="veneer-attributes"){
		return targ[0].change();			
	}
		
	var rules=elm.textContent.split("}")
	.filter(String)
	.map(Function.call.bind("".trim))
	.map(function(a,b){ return a.split("{");})
	.map(function(a,b,c){
		var temp=veneer.elm("div",{},"<b "+a[1]+"></b>").children[0], 
		o={};
		[].forEach.call(temp.attributes, function(a){this[a.name]=a.value;},o);
		return a[0] && [a[0], o];
	}).filter(Boolean);



	rules.forEach(function(rule){
		var elms=veneer.$(rule[0]),
			changes=rule[1];
		if(elms.length===0)return console.warn("veneer-attributes found no attribute list defined inside selector " + rule[0]);
		
		elms.forEach(function(element){
			Object.keys(changes).forEach(function(k){			
				element.setAttribute(k, this[k]);
			}, changes);
		});
	});
	}
},
props:{
	rules: veneer.k,
	target: veneer.k
},
 css: "veneer-attributes{display:none;white-space: pre;}"
});