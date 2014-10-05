/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-time',
	version: '1.0.0', tags: 'native date',
	example: "<veneer-time></veneer-time>",
	purpose: 'turns a GMT or UTC or ISO Date stamp into the local time (ex 11:59 PM)',
	attribs: { time: 'a standard datestamp parse-able by window.Date() ' },
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-time", {
	events: {
		update: function(e){ 
			if(e.target.lang!="shadow"){return;}
			e.target.innerHTML=new Date( +e.target.time  || e.target.time || new Date()).toLocaleTimeString();
			e.target.className="busy";
			setTimeout(function(){e.target.className="time";}, 250);
		}
	},
	props:{
		time: veneer.k
	}
  });
  