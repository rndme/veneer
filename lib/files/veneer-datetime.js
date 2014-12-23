/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-datetime',
	version: '1.0.1', tags: 'native date',
	purpose: 'turns a GMT or UTC or ISO Date stamp into a human-friendly time and date in the local timezone, as provided by the browser',
	example: "<veneer-datetime></veneer-datetime>",
	attribs: { 
		time: 'a standard datestamp parse-able by window.Date() ',
		value: 'alias for time attribute (for API consistency)'	
	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////

veneer("veneer-datetime", {
events: {
	update: function(e){ 
		var m=e.target, d=veneer.date(+m.time||m.time||+m.value||m.value||new Date());
		m.innerHTML=d.toLocaleString();
	}
},
props:{
	time: veneer.k,
	value: veneer.k
}
});