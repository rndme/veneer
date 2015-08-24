/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-lorem',
	version: '1.0.0', tags: 'native numbers',
	purpose: 'Inject Lorem-Ipsum placeholder text for working on webpage layouts and designs ',
	attribs: { 
		size: 'how many chars of text to show? (approx) '
	},
	example: "<veneer-lorem size=40></veneer-lorem>",
	events:  [ 'update' ] 
 }
**/

//////////////////////////////////////////////
   veneer("veneer-lorem", {
	
	events: {
		update: function upd(e){ 
		
function lorem(n) {
	var r = "Lorem,ipsum,dolor,sit,amet,consectetur,adipiscing,elit,sed,do,eiusmod,tempor,incididunt,ut,labore,et,dolore,magna,aliqua,Ut,enim,ad,minim,veniam,quis,nostrud,exercitation,ullamco,laboris,nisi,ut,aliquip,ex,ea,commodo,consequat,Duis,aute,irure,dolor,in,reprehenderit,in,voluptate,velit,esse,cillum,dolore,eu,fugiat,nulla,pariatur,Excepteur,sint,occaecat,cupidatat,non,proident,sunt,in,culpa,qui,officia,deserunt,mollit,anim,id,est,laborum".split(","),
		buff = "";
	var since = 0;
	while (buff.length < n) {
		var slot = r[Math.floor(Math.random() * r.length)];
		if (since < 1) {
			buff = buff.trimRight();
			buff += ". ";
			buff += slot[0].toUpperCase() + slot.slice(1) + " ";
			since = Math.floor(Math.random() * 6) + 2;
			continue;
		}
		since--;
		buff += slot + " ";
	}

	return buff.slice(2, - 1)+ ".";
}

			var elm=e.target;
			elm.textContent=lorem(+elm.size);
		}
	},
	props:{
		size: Number
	},
	defaults:{
		size: 140
	},
	css:   ""
  });
  