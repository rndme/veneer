/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-attriball',
	version: '1.0.0', tags: 'native control group',
	purpose: 'syncs many inputs to a single. expects an input inside and a target attrib that points to the inputs you want to sync value or checked to',
	attribs: { 
		target: 'a CSS selector hitting all inputs that should be synced/checked/unchecked' ,
		prop: 'name of target elm property to alter',
		group:  'Group id of element(s) to control' ,
		publish: 'if present, fires a change event on the attriball tag when the state changes'
	},
	events:  [ 'insert', 'change'	]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-attriball", {
	events: {
		
		insert: function(e){ 
			var elm=e.target;
			var prop=elm.prop || "checked";
			var master=elm.querySelector("input,select");
			if(!master){ return console.error("no input found in veneer-attriball tag", tag); }
			
			
			
			master.addEventListener("change", function(){
			
			
				elm._dest=[].slice.call(document.querySelectorAll(elm.target));
				
				var x=elm.group && veneer.group(elm.group).filter(function(a){return a.tagName!="VENEER-ATTRIBALL"});
				
				if(x && x.length ){ 
					[].push.apply(elm._dest, x);
				}
				
				
				var val=master[prop];	
				
				
				elm._dest.forEach(function(a){
					var o=a[prop];
					if(o!=val){ 
						a[prop]=typeof val ==="function" ? val.call(a) : val;
						if(elm.publish) veneer.raiseEvent("change", a);
					}
				});
				
				
				
			}, true);
			
		}
	},
	props:{
		target: String,
		prop: String,
		publish: veneer.bool
	},
	defaults:{
		prop: "checked"
	}
	
  });
  