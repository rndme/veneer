/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-datetime',
	version: '1.0.0', tags: 'native date',
	purpose: 'turns a GMT or UTC or ISO Date stamp into a human-friendly time and date in the local timezone, as provided by the browser',
		example: "<veneer-datetime></veneer-datetime>",
	attribs: { time: 'a standard datestamp parse-able by window.Date() ' },
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-datetime", {
	events: {
		update: function(e){ 
			if(e.target.lang!="shadow"){return;}
			e.target.innerHTML=new Date( +e.target.time  || e.target.time || new Date() ).toLocaleString();
			e.target.className="busy";
			setTimeout(function(){e.target.className="time";}, 250);
		}
	},
	props:{
		time: veneer.k
	}
  });
  