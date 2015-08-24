/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-attriball',
	version: '1.0.0', tags: 'native control',
	purpose: 'syncs many inputs to a single. expects an input inside and a target attrib that points to the inputs you want to sync value or checked to',
	attribs: { 
		target: 'a CSS selector hitting all inputs that should be synced/checked/unchecked' ,
		prop: 'name of target elm property to alter'
	},
	events:  [ 'insert', 'change'	]
 }
**/

//////////////////////////////////////////////
 
veneer("veneer-attriball", {
events: {
update: function(e){
	var elm=e.target,		
	prop=elm.prop||"checked",
	val=elm._inp[prop]||"";
	elm._dest=veneer.$(elm.target);
	elm._prop=prop;
	elm._dest.forEach(function(a){
		if(a[prop]!=val){ a[prop]=typeof val ==="function" ? val.call(a) : val;  veneer.raiseEvent("change", a); }
	});	
	veneer.raiseEvent("change", elm);
},
insert: function(e){ 
	var elm=e.target,
	prop=elm.prop || "checked",
	inp=elm.querySelector("input,select,[value]");
	if(!inp)return console.error("no input found in veneer-attriball tag", elm);
	if(!elm.target)return console.error("no target attrib found on veneer-attriball tag", elm);
	elm._inp=inp;
	inp.addEventListener("change", elm.change.bind(elm), true);
}
},
props:{
	target: veneer.k,
	prop: veneer.k
}
});
  