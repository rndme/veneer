/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-card',
	version: '1.0.0', tags: 'native ux',
	purpose: 'display a visual card for displaying a section of content ',
	attribs: { 
		title: 'visible title text on top of the card, actions as a toggle handle when [toggles] is used',
		toggles: 'should the card be allowed to show and hide its content?',
		opened : 'used w/[toggles], is the cards content shown? (or just the title) '
	},
	example: "",
	events:  [ 'insert' ]
 }
**/

//////////////////////////////////////////////
   veneer("veneer-card", {
	
	events: {
	  update: function(e){
	    // console.log(e.target);	  
	  },
		insert: function upd(e){ 
			
			var elm=e.target,
				content=veneer.elm("div",{"class":"content"});

		  	veneer.$("*", elm).forEach(function(a){
				content.appendChild(a);
			});
		  
		
			elm.appendChild(content);
			//elm.open=false;  
		  
		  
		  var title=veneer.elm("div",{"class":"title"}, elm.title);
		  if(elm.toggles) title.onclick=elm.toggle.bind(elm);
		  if(elm.title){
			  elm.insertBefore(title, elm.firstChild);
		  }
		  
		 
		}
	},
	props:{
		opened: veneer.bool,
	  toggles: veneer.bool
	},
	methods:{
		open: function(){this.opened=true;},
		close: function(){this.opened=false;},
		toggle: function(){this.opened=!this.opened}
	},
	defaults:{
		open2: false
	},
	css:   ":host\t\t{padding:0;margin:0;display:block;position:relative;box-shadow:0 2px 5px 0 rgba(50,50,50,0.1),0 2px 10px 0 rgba(20,20,40,0.07);border:1px solid rgba(0,0,0,0.15);}"+
":host .content\t\t{  padding-top: 1em; position:relative;display:block;height:100%;overflow:hidden;margin:0 0.75em;transition:300ms min-height, 500ms 100ms opacity;}"+
":host[toggles] .content\t\t{ padding-top: 0em; min-height:0px;height:0px;opacity:0;}"+
":host[toggles][opened] .content\t\t{min-height:5em;height:100%;opacity:1; padding-top: 1em;}"+
":host .title\t\t{font-size:150%;background:rgba(122,122,122,0.1);padding:0.15em 0.5em;box-shadow:0 -2px 1px -2px rgba(122,122,122,0.5) inset;text-shadow:0.5px 0.5px 1px rgba(122,122,122,0.2); -webkit-user-select:none;}"+
":host[toggles] .title\t\t{padding-left:1.5em;padding-top:0.5em;padding-bottom:0.5em; cursor:pointer;}"+
":host[toggles]:after {  content: \"+\";  position: absolute;  top: -2px;  left: 4px;  font-weight: bold;  text-align: center;  opacity: 0.5;  font-size: 250%;}"+
":host[toggles][opened]:after\t\t{content:\"-\";opacity:1;left: 8px;}"+
":host[toggles]+veneer-card[toggles]{margin-top: -2px;}"
});







