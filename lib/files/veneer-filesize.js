/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-filesize',
	version: '1.0.0', tags: 'native numbers',
	purpose: 'Displays a number of bytes as a human-readable filesize ',
	attribs: { 
		data: 'what number to convert to a file size?',
		places: 'how many decimal places to show? '
	},
	example: "<veneer-filesize data=90210></veneer-filesize>",
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
   veneer("veneer-filesize", {
	
	events: {
		update: function upd(e){ 
		
		function fileSize(f,a){a||0===a||(a=2);
				for(var c=Number(f/1024),d=[["KB",0],["MB",1024],["GB",1048576],["TB",1073741824]],b=d.length,e;b--;)
				  if(e=d[b][1],c>=e)
				      return(b?c/e:c).toFixed(a)+d[b][0];
		}


			var elm=e.target;
			elm.innerHTML=fileSize(elm.data, elm.places)
		}
	},
	props:{
		data: String,
		places: Number
	},
	defaults:{
		places: 2
	},
	css:   ""
  });
  