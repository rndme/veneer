/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-require',
	version: '1.0.0', tags: 'native ui',
	purpose: 'loads scripts from cdnjs ',

	attribs: { 
		
	},
	events:  [ 'insert' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-require", {
	events: {
	
		insert: function(e){ 
			var elm=e.target;
				
		}
	}
 });
	