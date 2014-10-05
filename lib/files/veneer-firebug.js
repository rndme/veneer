
/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-firebug',
	version: '1.0.0', tags: 'external debug dev',
	purpose: 'displays a Firebug Lite instance',
	attribs: {},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-firebug", {
	events: {
		insert: function(e){ 
			var elm=e.target;
			//elm.innerHTML="<iframe src='http://danml.com/veneer/lib/files/firebug.html'></iframe>";
			
			
			
			elm.innerHTML= elm.auto ?"<iframe  width=100%    src='data:text/html;base64,PGh0bWw+Cgk8YmFzZSBocmVmPSJodHRwczovL2dldGZpcmVidWcuY29tLyIgLz4KCQoJPHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiCnNyYz0iaHR0cHM6Ly9nZXRmaXJlYnVnLmNvbS9maXJlYnVnLWxpdGUuanMiPgoJewoJCW92ZXJyaWRlQ29uc29sZTogZmFsc2UsCgkJc3RhcnRJbk5ld1dpbmRvdzogZmFsc2UsCgkJc3RhcnRPcGVuZWQ6IHRydWUsCgkJZW5hYmxlVHJhY2U6IHRydWUKCX0KPC9zY3JpcHQ+Cgo8L2h0bWw+'></iframe>" : 
			"<iframe  width=100%    src='data:text/html;base64,PGh0bWw+Cgk8YmFzZSBocmVmPSJodHRwczovL2dldGZpcmVidWcuY29tLyIgLz4KCQoJPHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiCnNyYz0iaHR0cHM6Ly9nZXRmaXJlYnVnLmNvbS9maXJlYnVnLWxpdGUuanMiPgoJewoJCW92ZXJyaWRlQ29uc29sZTogZmFsc2UsCgkJc3RhcnRJbk5ld1dpbmRvdzogZmFsc2UsCgkJc3RhcnRPcGVuZWQ6IGZhbHNlLAoJCWVuYWJsZVRyYWNlOiB0cnVlCgl9Cjwvc2NyaXB0PgoKPC9odG1sPg=='></iframe>";
			
		
			setTimeout(function(){elm.children[0].style.minHeight=elm.scrollHeight+"px";}, 100);
		}
	},
	props:{
		auto: veneer.bool
	}
  });
  

