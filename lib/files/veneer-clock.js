/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-clock', 
	version: '1.0.1', tags: 'native',
	purpose: 'Displays the local time, constantly updated.',
	example: "<veneer-clock></veneer-clock> \n w/seconds: <veneer-clock seconds></veneer-clock>",
	attribs: { seconds: 'Should the clock display seconds? ', value: 'the current time as a date object' },
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-clock", {
events: {
remove: function(e){ clearTimeout(e.target._timer); },
update: function(e){ 
	var elm=e.target,
	showSeconds=elm.seconds;
	
	function updateTime(){ 
		var val=elm.value=new Date();
		elm.innerHTML= val
		 .toTimeString()
		 .slice(0, showSeconds ? 8 : 5);
	}
	
	updateTime();
	clearInterval(elm._timer);
	elm._timer=window.setInterval( updateTime, 1000 );
}
},
props: {
	seconds: veneer.bool
},
defaults:{
	seconds: false,
	value: veneer.k
}
});
  

