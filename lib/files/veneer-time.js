/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-time',
	version: '1.0.1', tags: 'native date',
	example: "<veneer-time></veneer-time>",
	purpose: 'turns a GMT or UTC or ISO Date stamp into the local time (ex 11:59 PM)',
	attribs: { 
		time: 'a standard datestamp parse-able by window.Date() ',
		value: 'alias for time attribute (for API consistency)'	
	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-time", {
	events: {
		update: function(e){ 
			var m=e.target, d=veneer.date(+m.time||m.time||+m.value||m.value||new Date());
			m.innerHTML=d.toLocaleTimeString();
		}
	},
	props:{
		time: veneer.k,
		value: veneer.k
	}
  });
  