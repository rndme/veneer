/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-clock',
	version: '1.0.0', tags: 'native',
	purpose: 'Displays the local time, constantly updated.',
	example: "<veneer-clock></veneer-clock>",
	attribs: { seconds: 'Should the clock display seconds? ' },
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-clock", {
	events: {
		update: function(e){ 
			var elm=e.target;
			var showSeconds =  elm.seconds; //hasAttribute("seconds");
			
			
			
			function updateTime(){ 
				elm.innerHTML=new Date()
					.toTimeString()
					.slice(0, showSeconds ? 8 : 5);
			}
			
			updateTime();
			clearInterval(elm.timer);
			elm.timer=window.setInterval( updateTime, 1000 );
		}
	},
	props: {
			seconds: veneer.bool
	},
	defaults:{
		seconds: false
	}
  });
  

