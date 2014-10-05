/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-attrib',
	version: '1.0.0', tags: 'native control group',
	purpose: 'Uses a wrapped form input to change an attrib on another element, and vice versa (2-way binding if possible)',
	attribs: { 
		target: 'CSS selector pointing to bound element', 
		attrib: 'name of target elm attribute to alter',
		group:  'Group id of element(s) to control' 
	},
	events:  [ 'insert', 'update' ]
 }
**/

//////////////////////////////////////////////


veneer("veneer-attrib", {

props: {
	target: String,
	attrib: String,
	silent: veneer.bool,
	pre:  veneer.k,
	group:	String
},
events: {
	insert: function ins(e){
		
		var elm=e.target,x,me,prop;		
		if(this!=elm){return;}
	
		
	
		elm._dest=veneer.$(elm.target);				
		x=elm.group && veneer.group(elm.group).filter(function(a){return a.tagName!="VENEER-ATTRIB"});
		
		if(x.length ){ 
			[].push.apply(elm._dest, x);
		}
		
		if(!elm._dest[0]){ 
			elm.misses=elm.misses||0;
			elm.misses++;	
			if(elm.misses>5){
				return console.error("Missing attribute 'target' or 'group' on <veneer-attrib> element"); 
			}else{
				return setTimeout(ins.bind(this,e), 50);
			}

		}
		if(!elm.attrib){ return console.error("Missing attribute 'attrib' on <veneer-attrib> element"); }
		
		 me=veneer.$("input,select", elm)[0];
		 prop="value";
		
		if(me.type=="checkbox" || me.type=="radio"){
			prop="checked";					
		}

		elm._input=me;
		
		if(me.type=="button"){
			var elmElm=elm;
			me.onclick=function(e){
				elm._dest.forEach(function(elm){
					if(typeof elm[elmElm.attrib]==="function"){ elm[elmElm.attrib](); }
				}); 
			};
			return ;
		}
	
		me[prop]= me[prop] || elm._dest[elm._dest.length-1][elm.attrib];
		
		//me.onchange=elm.change; 
		me.addEventListener("change", elm.change||Boolean, true);
		
		var elm2=elm; 
		
		elm._dest.map(function(elm){
			
			
			
			if(elm==elm2){return;}
			
			elm.addEventListener("change", function(e){				
			

			//	console.log("change1", e.detail, elm, elm2);
				
				if(elm==elm2){return;}		
				
				if( e.target && e.detail && e.detail.key==elm2.attrib){
					if(me[prop]!=elm[elm2.attrib]){
					
						me[prop]=elm[elm2.attrib];
						
					//	console.log("setting", me, me[prop],elm[elm2.attrib], "|", prop, elm, elm2);
						
					}
				}				
				
			}, true);
			
		});

		if(!elm.silent){ elm.change();}
	},
	update: function(e){ 
		
		var prop, elm=e.target, me=veneer.$("input,select,button", elm)[0];

		if(elm._dest){ 			
			prop="value";
			if(elm._input.type=="checkbox" || elm._input.type=="radio"){
				prop="checked";					
			}
			elm._dest.map(function(dElm){
				if(elm.pre && elm._input[prop]){
					dElm[elm.attrib]=elm.pre+elm._input[prop];  
				}else{
					dElm[elm.attrib]=elm._input[prop];  
				}
				veneer.raiseEvent('update', dElm );  
				veneer.raiseEvent('input', dElm );
				veneer.raiseEvent('change', dElm );

			});
		}
	}
},
css: "veneer-attrib { display: inline-block; } "
});