/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-timer',
	version: '1.0.1', tags: 'native',
	purpose: ' runs after a specified interval upon insertion, optionally repeating. Great for firing a disconnected action when a some-how templated content updates',
	example: "<veneer-timer onchange=\"this.innerHTML=Date()\" interval=1000 repeat></veneer-timer>",
	attribs: { 
		onchange: 'The action to fire; inline code or a path call. ',
		interval: 'how many ms between executions? ',
		repeat: 'Repeat action every interval or fire just once? ',
		delay:  'how many ms before first execution? ',
		num:	' number available to onchange (as this.num) and external',
		bool:	' boolean available to onchange (as this.bool) and external',
		str:	' string available to onchange (as this.str) and external',
		a:	' variable available to onchange (as string this.a) and external',
		b:	' variable available to onchange (as string this.b) and external'
		},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
veneer("veneer-timer", {
events: {
	remove: function(e){ clearTimeout(e.target._timer); },
	update: function(e){ 
		var elm=e.target,
		delay =  +elm.interval || 80 ,
		code=elm.getAttribute("onchange");

		if(!code) return;
		
		elm.cancel=function(){clearInterval(elm._timer);};
		var FN=Function("event", "with(this){"+code+"}").bind(elm, e);
	
		clearInterval(elm._timer);
		return elm._timer=setTimeout(function(){
			elm._timer= window[elm.repeat ? "setInterval" : "setTimeout"]( FN, delay );
		}, elm.delay||0 );
	}
},
props: {
	onchange: veneer.k,
	repeat: veneer.bool,
	interval: Number,
	delay: Number,
	num: Number,
	str: String,
	bool: veneer.bool,
	a: veneer.k,
	b: veneer.k
},
defaults: {
	str: ""
},
css: "veneer-timer {display:inline;}"
});


