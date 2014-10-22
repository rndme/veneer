/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-hello',
	version: '1.0.0',
	purpose: 'defines a <hello-world> element that says hello to the who attribute value. (for the helloworld.html demo) ',
	attribs: { who: 'a string name' },
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
veneer("hello-world", {
	content: "Hello  <strong></strong> :)", 
	events: {
		update: function(e){ 
			var elm=e.target;
			elm.children[0].innerHTML=elm.who;		
		}
	},
	props:{
		who: String
	},
	defaults:{
		who: "Anon"
	}
});
