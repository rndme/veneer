/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-date',
	version: '1.0.2', tags: 'native date',
	purpose: 'turns a GMT or UTC or ISO Date stamp into a human-friendly date in the local timezone, as provided by the browser',
	example: "<veneer-date></veneer-date>",
	attribs: { 
		time: 'a standard datestamp parse-able by window.Date() ',
		value: 'alias for time attribute (for API consistency)'	
	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////

veneer("veneer-date", {
events: {
	update: function(e){ 
		var m=e.target, d=veneer.date(+m.time||m.time||+m.value||m.value||new Date());
		m.innerHTML= [d.getMonth()+1, d.getDate(), d.getFullYear()].map(function(a,b){ 
			return "<span class='dt_seg_"+b+ "'>"+a+"</span>";
		}).join(" / ");
	}
},
props:{
	time: veneer.k,
	value: veneer.k
}
});
  