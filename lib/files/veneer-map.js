/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-map',
	version: '1.0.0', tags: 'native ui geo external',
	purpose: 'Displays a google map via lat, lon, and zoom coords given as attribs ',
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



veneer("veneer-map", {
	content:  "<img />",
	events: { 
		update: function(e){
			var elm=e.target;
			elm.children[0].src="http://maps.googleapis.com/maps/api/staticmap?center="+this.lat+
				","+this.lon+"&zoom="+this.zoom+"&size="+this.width+"x"+this.height;

			elm.className+=" busy";
			setTimeout(function(){elm.className=elm.className.replace(/\bbusy\b/,"").trim();}, 333 );
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
		zoom:	5,
		width: 400,
		height: 400
	}
  });