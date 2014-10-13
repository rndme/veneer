/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-route',
	version: '1.0.0', tags: 'native util nav',
	purpose: 'Sets path config based on hash changes',
	attribs: { 
		
	},
	events:  [ 'insert' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-route", {
	proto: HTMLInputElement.prototype,
	events: {
		insert: function ldr(e){ 
			var elm=e.target, 
			body=document.body, 
			code=elm.innerHTML.trim();
			
			
			 if(code){ eval(code); }
			 
			 var sheet=veneer.root.appendChild(veneer.elm("style")); // use for transient dynamic css to show/hide routes
 			 var busy=false;		
			
			function getTags(path, subSetSelector){
				return veneer.$("[route]"+(subSetSelector||"")+","+"[data-route]"+(subSetSelector||"")).map(function(a, b){
					return { route: a.getAttribute("route")||a.getAttribute("data-route")||"/", elm: a, i: b };
				}).filter(function(a){
					var route=a.route||"";
					if(route.slice(0,2).toLowerCase()==="rx"){
						route=RegExp(route.slice(3).replace(/\//g,"\\\/"));
					}
					var hit =String( path.match( route ) ||"");
                    return (route.exec && hit)||(route==path) ||  ((path+"/")===(route)) || ( hit.length>1 && (hit.slice(-1)==="/"));
				});
			 } 
			 
			 
			function ohc(e){
				if(busy){return;}				
				
				var argv=	location.hash.slice(1).split("/").filter(Boolean),
				path=		argv.join("/")||"/",
				loc=		{section:argv[0], page: argv[1], sub:argv[2], argv: argv,  url: location.hash.slice(1) },
				targets=	veneer.$(),
				tags= 		getTags(path),
				oldSection;
				
				function makeBusy(){
					busy=true;
					clearTimeout(ohc.timer);						
					ohc.timer=setTimeout(function(){busy=false}, 100);
				}
				
				//veneer.$(path.length>2 ? ("[route^="+path+"]") : ("[route="+path+"]") )
									
				// if there was an old url, look for onleave handlers and execute them if needed, to determin if we should even keep going:
				if(e && e.oldURL && 
					(oldSection=e.oldURL.split("#")[1]) &&				
					getTags(oldSection.split("/").filter(Boolean).join("/"),"[onleave]").map(function(a){
						console.log(a);
						try{return eval(a.elm.getAttribute("onleave"));}catch(y){ };
					}).indexOf(false)!==  -1 
				){
					makeBusy();
					location.hash=oldSection;
					return; //cancel the navigation if any event returns false
				}
					

			    // define a few global "constants" so that all scripts can find their way: (if config'd)				
				if(elm.globals){
					SECTION=	argv[0];
					PAGE=		argv[1];
					SUB= 		argv[2];
				}
			  
			  // apply the path parts to body attribs to enable custom CSS effects:
			 veneer.setAttribs(body, {
				"data-nav-section": argv[0]||"",
				"data-nav-page": argv[1]||"",
				"data-nav-sub": argv[2]||""
			 });
			  
			if(e || elm.init ){ // don't run transitions for the loading init call, unless specified
				body.setAttribute("data-navigating","");
				setTimeout(function(){
					body.removeAttribute("data-navigating");
				}, 250 );
			}
			  
			  
			//make a selector sig for each sheet that should be visible  
			sheet.innerHTML= tags.map(veneer.pluck, "route").map(function(a){
				return "[route="+JSON.stringify(a)+"]";
			}).join(", ") + "{display: inherit;}";
			  
			  
			  
				if(!tags.length){

					veneer.$("[route='404']").map(function(a){
						if(!a.tmp) a.tmp=a.innerHTML;
						a.innerHTML=veneer.template(loc, a.innerHTML);
					});
					
					setTimeout(function(){location.hash="404";},0);
					return;
				}  
			
				
			veneer.ROUTE=loc; // publish 		  
			veneer.raiseEvent("nav", window, loc); //raise nav event
			  
			  
			getTags(path,"[onroute]").forEach(function(a){
				var ok=a.elm.getAttribute("condition");
				if(!ok || eval(ok)) try{eval(a.elm.getAttribute("onroute"));}catch(y){}
			});
					
			getTags(path," veneer-mustache").forEach(function(a){
				a.elm.render();
			});		  
			  
		  
			  
			};//end ohc()
	
			
	
			addEventListener("hashchange", ohc, true);
			ohc(); // init on load
		
		}
	},
	props:{
		globals: veneer.bool, // publish constant global path indicators?
		boot: veneer.bool	 // apply [data-navigating] to body tag on boot?
	},
	css: "veneer-route, [route] { display:none; } "
  });
  