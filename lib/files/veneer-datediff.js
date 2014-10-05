/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-datediff',
	version: '1.0.0', tags: 'native date',
	purpose: 'turns a GMT or UTC or ISO Date stamp into a human-friendly counter of the hours+mins (etc etc) since or until',
	attribs: { 
			time: 'a standard datestamp parse-able by window.Date() ' , 
			continuous: 'a boolean indicating constant updates or not' 
	},
	example: "<veneer-datediff time='2000-01-01T20:37:38.472Z'></veneer-datediff>",
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 (function(){
	
	
	function dateDiff(d1, d2, elm){

	  function parts(date){
		  return date.toISOString().split(/[\-T:.]/).slice(0,-1).map(Number);
	  }

	  var d=d2-d1, 
		 r1=parts(d1),
		 r2=parts(d2),
		 r=r1.map(function(a,b){return this[b]-a;},r2).map(function(a,b){
		   if(a<0){  a=[0,12,30,24,60,60][b]+a;}
		   return a;
		 });

	   if(elm){elm.title=new Date(d1).toLocaleString();}
	  
	  return r.map(function(a,b){
		if(!a){return "";}
		var d=this[b].replace( a!=1 ? "X" : /s$/, "");
		
		//if(elm){elm[this[b]]=a;}
		//if(elm){elm.setAttribute(this[b], a);}
		
		return "<span class='dt_"+this[b]+"'>"+a+" "+d+"</span>";
	   },["years","months","days","hours","mins","secs"]).filter(String).join("<span class=sep>, </span>");

	}


 veneer("veneer-datediff",  {
	events: {
		update: function upd(e){ 
			var elm=e.target||this;

			
			
			
			function render(){
				if(!elm.time){return;}
				
			
				clearTimeout(elm.timer);
				
				
				try{elm.innerHTML=dateDiff(new Date(elm.time), new Date(), elm);}catch(y){
									
				}
				
				//var bb=dateDiff(new Date(elm.time), new Date(), elm);
				 
				 if(elm.continuous){ elm.timer=setTimeout( render, 1000 ); }
				
			}
			render();		

			
		}
	},
	props:{
		time: veneer.k,
		continuous: veneer.bool /*,
		
		secs: Number,
		mins: Number,
		hours: Number,
		days: Number,
		months: Number,
		years: Number
*/


	}
  });
  
  
  
  
 }());
 