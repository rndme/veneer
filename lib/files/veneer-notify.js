/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-notify',
	version: '1.0.0', tags: 'native interaction',
	purpose: 'Shows a desktop notification to the user, the parts of which are specified as attributes',
	attribs: { time: 'a standard datestamp parse-able by window.Date() ' },
	events:  [ 'insert' ]
 }
**/

//////////////////////////////////////////////
 (function wrap(){
 
function notifyMe(b,d,e,f,g){var c={icon:f||"http://"+document.domain+"/favicon.ico",body:d||""},a="Notification"in window?"granted"===Notification.permission?new Notification(b,c):"denied"!==Notification.permission&&Notification.requestPermission(function(a){"permission"in Notification||(Notification.permission=a),clearTimeout(notifyMe.tim),"granted"===a&&new Notification(b,c)}):0,a=a||0;return a||(notifyMe.tim=setTimeout(function(){},200)),a.onshow=function(){notifyMe.last&&!g&&notifyMe.last.close(),notifyMe.last=a,clearTimeout(notifyMe.tim),setTimeout(a.close.bind(a),e||5e3)},a.onclick=function(){window.focus(),a.close()},a}


 veneer("veneer-notify", {
	events: {
		insert: function(e){ 
			var elm=e.target;
			var note;
			
			elm.show=function(){
			 if(note && !elm.multiple){ note.close(); }
			  note=notifyMe(elm.title, elm.value, (1000*elm.duration)||5000, elm.src, elm.multiple);
			};
			elm.cancel=function(){
			  note.close();
			};
			
		}
	},
	props:{
		value: veneer.k,
		title: veneer.k,
		duration: Number,
		src: veneer.k,
		multiple: veneer.bool
	}
  });
  
  


 }());
  



