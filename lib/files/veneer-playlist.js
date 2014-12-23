/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-playlist',
	version: '1.0.0', tags: 'native',
	purpose: 'Turns an audio tag into a playlist player using extra track elements in the audio tag',
	attribs: { 
		auto: 'Boolean: auto-play and auto-advance when song track is over?' ,
		status: 'String: indicates state of playlist/audio player',
		size: 'sets the size of the select tag used to provide the playlist (ignored on mobile)'
	},
	events:  [ 'insert' ]
 }
**/

//////////////////////////////////////////////

(function(){
	
	function next(elm, i){
		i=+i||1;
		elm._i+=i;
		if(elm._i>=elm._max){elm._i=elm._max-1;}
		if(elm._i<0){elm._i=0;}
		
		console.log("next", elm._i, elm._tracks);
		
		var track=elm._tracks[elm._i];
		elm._player.src=track.src;
		//elm._player.title= 
		elm.title=track.title;
		
	}

veneer("veneer-playlist", {  
	methods: {
		next: function(i){ next(this, i); }
	},
	events: {
		insert: function upd(e){ 
			var elm=e.target;
			
				
			var tracks=veneer.$("source", elm);
			elm._i=0;
			elm._max=tracks.length;
			elm._player=veneer.$("audio", elm)[0];
			elm._tracks=tracks;
			
			
			
			var but=veneer.elm("button", {"class":"btn"}, "Next");
			but.onclick=next.bind(this,elm);
			elm.appendChild(but);
			
			
			
			var sel=veneer.elm("select");
			elm.appendChild(sel);
			
		
			if(elm.size-0.1){
				sel.size=elm.size;				
			}
				
			tracks.map(function(a,i){
				sel.options[i]=new Option( (i+1)+". " + a.title, a.src);
			});
			
			sel.onchange=function(){
				elm._i=this.selectedIndex-1;
				next(elm);
			};
			
			if(elm.auto){
				elm._player.autoplay=true;
				elm._player.addEventListener("ended", next.bind(elm, elm, 1));
				next(elm, -1);
			}
			
			elm._player.addEventListener("play", function(){
				elm.status="playing";
				sel.value=this.currentSrc;
				});

			
			[["loadstart","loading"],["pause","paused"],["seeking","seeking"],["loadedmetadata","loaded"]].map(function(o){
				elm._player.addEventListener(o[0], function(){
					elm.status=o[1];
				});
			});			
			
		}
	},
	props:{
		auto: veneer.bool,
		size: Number,
		status: {
			type: String,			
			observe: false,
			set: String
		}
	},
	defaults:{
		status: "booting"
	},
	css:  "veneer-playlist {display: inline-block;  }  " 
});


}());//end privacy