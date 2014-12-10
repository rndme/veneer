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
	
	insert: function(e){ 
		var elm=e.target,
		prop=elm.prop || "checked",
		inp=elm.querySelector("input,select");
		if(!inp){ return console.error("no input found in veneer-attriball tag", elm); }
		if(!elm.target){ return console.error("no target attrib found on veneer-attriball tag", elm); }
	
		inp.addEventListener("change", function(){		
			var val=inp[prop];
			elm._dest=veneer.$(elm.target);
			elm._dest.forEach(function(a){
				if(a[prop]!=val){ 
					a[prop]=typeof val ==="function" ? val.call(a) : val;
				}
			});
		
			veneer.raiseEvent("change", a);
			
		}, true);
	}
},
props:{
	target: String,
	prop: String
},
defaults:{
	prop: "checked"
}

});
  