/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-slides',
	version: '1.0.0', tags: 'native ui',
	purpose: 'Displays a slideshow using the child elements of the tag',
	attribs: { 
		delay: 'the # of seconds to wait to advance between each image ',
		effect: ' one of "none", "slide", or "fade": a visual transition effect'
	},
	methods:{
		next: 'shows the next slide',
		prev: 'shows the previous slide',
		pause: 'pauses or un-pauses the slides'
	},
	events:  [ 'update', 'slide', 'pause' ]
 }
**/

//////////////////////////////////////////////

veneer("veneer-slides", {
methods: {
	next: function next(i){			
	
		var elm=this, 
		  index=elm._index,
		  kids=veneer._(elm.children),				  
		  index= +index||0; //validate index
		
		i=i||1;
		elm._index=index;			
	
		var show=function show(elm){elm.style.display='block';};
		var hide=function hide(elm){elm.style.display='none'; };
		
		if(elm.effect=='fade'){
			show=function show(elm){elm.style.opacity=1; /*elm.style.display='block';*/ };
			hide=function hide(elm){elm.style.opacity=0; /*elm.style.display='none';*/ };
		}
		
		if(elm.effect=='slide'){
			show=function show(elm){elm.style.width=(elm.getAttribute("width")|| elm.parentNode.offsetWidth )+"px";};
			hide=function hide(elm){elm.style.width="0px"; };
		}
	
	
		veneer.raiseEvent("slide", elm);
		
		clearTimeout(elm._timer);
		if(!elm._paused){
			elm._index+=i;//increment
			if(!kids[elm._index]){ elm._index=0; }
			kids.map(hide);
			show(kids[elm._index]);
		}
		elm._timer=setTimeout(next.bind(elm), elm.delay * 1000);
		return elm;
	},
		
	prev: function(){
		return this.next(-1);
	},
	
	pause: function(blnOverRide){
			veneer.raiseEvent("pause", this);
			if(blnOverRide===true||blnOverRide===false){
				return this._paused= blnOverRide;
			}
			return this._paused=!this._paused;
	}
		
	
},
events: {
	remove: function(e){ clearTimeout(e.target._timer); },
	insert: function(e){ 
		var elm=e.target;
		elm.next();			
	}
},
props:{
	delay: Number,
	effect: String
},
css:   "veneer-slides { position:relative; display: inline-block;} " +
		"veneer-slides[effect='fade']>*{ position: absolute; left:0; top:0; transition-property: opacity; transition-duration: 500ms; }" +
		"veneer-slides[effect='slide']>*{ width:0;display:inline-block;float:left;"+
		"transition-property: width; transition-duration: 500ms;overflow:hidden;}"
					
});