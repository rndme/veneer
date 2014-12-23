/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-sat',
	version: '1.0.0', tags: 'native ui geo external',
	purpose: 'Displays a google satellite view via lat, lon, and zoom coords given as attribs ',
	attribs: { 
		lat: 'the latitude of the top-left corner of the map' ,
		lon: 'the longitude of the top-left corner of the map' ,
		zoom: 'what zoom level should the map be at ? ~(5-25)' ,
		height: 'how many pixels tall should the map be? ' ,
		width: 'how many pixels wide should the map be?' 
	},
	events:  [ 'click', 'update' ]
 }
**/

//////////////////////////////////////////////



veneer("veneer-sat", {
	content:  "<img />",
	events: { 
		update: function(e){
			var elm=e.target;
			elm.className+=" busy";
			elm.children[0].onload=function(){elm.className=elm.className.replace(/\bbusy\b/g,"").trim();};
			
			elm.children[0].src=veneer.template(
				elm, 
				"http://maps.googleapis.com/maps/api/staticmap?center={{lat}},{{lon}}&"+
				 "maptype=satellite&zoom={{zoom}}&size={{width}}x{{height}}"
			);

			
		}
	},


	props:{ // prop/attrib value casting function (name remains identical on both attrib and prop)
		lat:	Number,
		lon:	Number,
		zoom:	Number,
		height: Number,
		width: Number

	},

	defaults:{ //default values for props:
		lat:	40.714728,
		lon:	-73.998672,
		zoom:	12,
		width: 400,
		height: 400
	},
	
	css: "veneer-sat { opacity: 1; transition-property: opacity; transition-duration: 333ms; } veneer-sat.busy { opacity: 0.5; }"

});