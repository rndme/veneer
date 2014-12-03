/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-rate',
	version: '1.0.0', tags: 'native ui',
	purpose: 'A star rating widget',
	example: '<veneer-rate value=5></veneer-rate>',
	attribs: { 
		value: ' a number from 1-5 representing the rating',
		once: 'if present the value will not be able to change once set once',
		spent: 'indicates if a vote has been chosen or not. set to false to re-vote'
	},
	events:  [ 'insert', 'change' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-rate", {
	content: "",
	events: {
	
		insert: function(e){ 
			var elm=e.target;
			
			for(var i=0;i<5;i++){
				var star=veneer.elm("span", {"class":"star", title: i+1}, "&#9733;");
				star.onclick=function(e){
					if(elm.once && elm.spent){return;}
					elm.spent=true;
					elm.value=+this.title;
					//veneer.raiseEvent("change", elm, e);
				};
				elm.appendChild(star);
			}
				
			if(!elm.value){elm.value=3;}
		}
	},
	props:{
		value: Number,
		spent: veneer.bool,
		once: veneer.bool
	},
	 css: "veneer-rate .star {color: #444; padding: 0.2em; font-size: 32px; cursor: pointer; transition: 500ms 50ms color;} \n"+
	" veneer-rate[value]:hover>.star[title] { color: #111 ; }\n"+
	" html body veneer-rate[value]:hover>.star[title]:hover ~ span[title] { color: #ccc ; }\n"+
	" veneer-rate[value='1']  .star:first-child ~ span ,\n"+
	" veneer-rate[value='2']  .star[title='2'] ~ span ,\n"+
	" veneer-rate[value='3']  .star[title='3'] ~ span ,\n"+
	" veneer-rate[value='4']  .star[title='4'] ~ span { color: #ccc; }"
  });
  