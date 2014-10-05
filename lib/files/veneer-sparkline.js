/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-sparkline',
	version: '1.0.0', tags: 'native data ui',
	purpose: 'Displays a tiny chart from a series of number',
	attribs: { 
		data: 'what info to put into the chart?'
		
	},
	example: "<veneer-sparkline data='1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,3,6,9'</veneer-sparkline> ",
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////

   veneer("veneer-sparkline", {
	
	events: {
		update: function upd(e){ 
			var elm=e.target;
			var data=(elm.data||"").split(/\s*,\s*/).map(Number).filter(isFinite);
			var max =Math.max.apply(null, data);
			var min =Math.min.apply(null, data);
			var len=data.length;
			var width=Math.floor(elm.offsetWidth / len);
			
			elm.innerHTML="";
			
			data.map(function(a){
				var seq=veneer.elm("span", {"class":"seq"});
				var hgt=(a/max)* 100;
				seq.title=a;
				seq.style.height=hgt +"%";
				seq.style.width=width +"px";
				if(a==max)seq.className+=" max";
				if(a==min)seq.className+=" min";
				if(elm.color){seq.style.backgroundColor=seq.style.borderColor=elm.color;}
				elm.appendChild(seq);
			});
			
			
			
			
			elm.style.visibility="visible";
		}
	},
	props:{
		data: String,
		color: String
	},
	css:   " veneer-sparkline { position:relative; display: inline-block;height: 1.2em; width: 5em; } " +
			"veneer-sparkline .seq { position:relative; display: inline-block;  border:0px solid transparent; background-color: #444; min-width: 3px; margin:0; }"+
			"veneer-sparkline[type='line'] .seq { background-color: transparent; border-top: 2px solid #888;  }"
  });
  