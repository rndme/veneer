/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-attrib',
	version: '1.0.0', tags: 'native control',
	purpose: 'Uses a wrapped form input to change an attrib on another element, and vice versa (2-way binding if possible)',
	attribs: { 
		target: 'CSS selector pointing to bound element', 
		attrib: 'name of target elm attribute to alter',
		silent: 'if present, keeps targets change event from firing when attribute updates',
		pre: 'text to prepend in front of the raw wrapped input value, good for choosing selectors',
		interval: '# of seconds after which to re-apply the change event, mainly for triggering methods'
	},
	events:  [ 'insert', 'update' ]
 }
**/

//////////////////////////////////////////////


veneer("veneer-attrib", {

props: {
	target: String,
	attrib: veneer.k,
	silent: veneer.bool,
	pre:  veneer.k,
	interval: Number
},
events: {
	insert: function ins(e){
		
		var elm=e.target,x,me,prop;		
		if(this!=elm){return;}
	
		
	
		elm._dest=veneer.$(elm.target);				
		
		if(!elm._dest[0]){ 
			elm.misses=elm.misses||0;
			elm.misses++;	
			if(elm.misses>5){
				return console.error("Missing attribute 'target' on <veneer-attrib> element"); 
			}else{
				return setTimeout(ins.bind(this,e), 70);
			}

		}

		if(!elm.attrib){ // return console.error("Missing attribute 'attrib' on <veneer-attrib> element"); }
			var t=elm._dest[0];
			if(t.value!=null) elm.attrib="value";
			if(t.type=="checkbox" || t.type=="radio") elm.attrib="checked";
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
		if(elm.interval) setInterval(elm.change.bind(elm), elm.interval);
	},
	update: function(e){ 
		
		var prop, elm=e.target;

		if(elm._dest){ 			
			prop="value";
			if(elm._input.type=="checkbox" || elm._input.type=="radio"){
				prop="checked";					
			}
			var val=elm._input[prop],
				attr=elm.attrib; /*     
			console.info("upd", {
				val:val, 
				prop:prop, 
				inp:elm._input, 
				elm:elm, 
				attrib:elm.attrib, 
				inpAtProp: elm._input[prop],
				destAttribValue:elm._dest[0][elm.attrib],
				dest: elm._dest
			});*/  
			elm._dest.map(function(dElm){
				if(elm.pre && val!=null){
					dElm[attr]=elm.pre+val;  
				}else{
					dElm[attr]=val;  
				}
				if( dElm._def && dElm._def.props && dElm._def.props[attr]) return; // veneer tags will change themselves
				veneer.raiseEvent('update', dElm, e.detail );  
				veneer.raiseEvent('input', dElm, e.detail );
				veneer.raiseEvent('change', dElm, e.detail ); 

			});
		}
	}
},
css: "veneer-attrib { display: inline-block; } "
});