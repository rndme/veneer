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
			e.target.innerHTML=new Date(+e.target.time  || e.target.time || new Date() ).toLocaleDateString();
			e.target.className="busy";
			setTimeout(function(){e.target.className="time";}, 250);
		}
	},
	props:{
		time: veneer.k
	}
  });
  