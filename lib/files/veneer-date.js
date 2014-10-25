/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-date',
	version: '1.0.0', tags: 'native date',
	purpose: 'turns a GMT or UTC or ISO Date stamp into a human-friendly date in the local timezone, as provided by the browser',
	example: "<veneer-date></veneer-date>",
	attribs: { time: 'a standard datestamp parse-able by window.Date() ' },
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-date", {
	events: {
		update: function(e){ 
			var d=veneer.date(+e.target.time  || e.target.time || new Date() );
			
			e.target.innerHTML= [d.getMonth()+1, d.getDate(), d.getFullYear()].map(function(a,b){ 
				return "<span class='dt_seg_"+b+ "'>"+a+"</span>";
			}).join(" / ")
			
		}
	},
	props:{
		time: veneer.k
	}
  });
  