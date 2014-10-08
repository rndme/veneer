/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-html',
	version: '1.0.0', tags: 'native text',
	purpose: 'Displays HTML code for humans to read. see also: [veneer-syntax] ',
	example: '<veneer-html><br /></veneer-html>',
	attribs: { },
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-html", {
	events: {
		insert: function(e){ 
			var op=new Option(e.target.innerHTML);
			e.target.innerHTML=op.innerHTML;
			e.target.className="busy";
			setTimeout(function(){e.target.className="";}, 250);
		}
	},
	css: "veneer-html { white-space: pre-wrap; } "
  });
  