/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-timer',
	version: '1.0.0', tags: 'native',
	purpose: ' runs after a specified interval upon insertion, optionally repeating. Great for firing a disconnected action when a some-how templated content updates',
	example: "<veneer-timer onchange=\"this.innerHTML=Date()\" interval=1000 repeat></veneer-timer>",
	attribs: { 
		onchange: 'The action to fire; inline code or a path call. ',
		interval: 'how many ms between executions? ',
		repeat: 'Repeat action every interval or fire just once? '
		},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-timer", {
	events: {
		update: function(e){ 
			var elm=e.target,
			delay =  +elm.interval || 80 ,
			code=elm.getAttribute("onchange");
			
			if(!code) return;
			
			var FN=Function("event", code).bind(elm);
			clearInterval(elm.timer);
			return elm.timer= window[elm.repeat ? "setInterval" : "setTimeout"]( FN, delay );
		}
	},
	props: {
		onchange: veneer.k,
		repeat: veneer.bool,
		interval: Number
	},
	css: "veneer-timer {display:inline;}"
  });
  

