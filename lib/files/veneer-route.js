/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-route',
	version: '1.0.0', tags: 'native util nav',
	purpose: 'Sets path config based on hash changes',
	attribs: { 
		activeClass: ' a className to use for link that hit the current route ',
		useParent: ' if present, applies className to link parent instead of the link itself',
		title:	' if present, sets the property of the active link to use for document.title, typically textContent or title ',
		boot:	' if present, the page nav indication will be applied on initial page load as well',
		globals:	' if present, SECTION, PAGE, and SUB will be set for any script to see. note that veneer.ROUTE has those and more'
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
			sheet=veneer.root.appendChild(veneer.elm("style")), // use for transient dynamic css to show/hide route
 			busy=false;	// allows suspending response when re-directing 404
			
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
				tags= 		getTags(path),
				loc=		{section:argv[0], page: argv[1], sub:argv[2], argv: argv,  url: location.hash.slice(1), tags: tags },
				targets=	veneer.$(),
				oldSection;
				
				function makeBusy(){
					busy=true;
					clearTimeout(ohc.timer);						
					ohc.timer=setTimeout(function(){busy=false}, 100);
				}
				
				//veneer.$(path.length>2 ? ("[route^="+path+"]") : ("[route="+path+"]") )
									
				// if there was an old url, look for onleave handlers and execute them if needed, to determin if we should even keep going:
				if(e && e.oldURL && 
					(oldSection=(e.oldURL.split("#")[1] ||"/")) &&				
					getTags(oldSection=(oldSection||"/").split("/").filter(Boolean).join("/"),"[onleave]").map(function(a){
						try{return eval(a.elm.getAttribute("onleave"));}catch(y){ };
					}).indexOf(false)!==  -1 
				){
					makeBusy();
					location.hash=oldSection;
					return; //cancel the navigation if any event returns false
				}
				
				if(oldSection){
					loc.oldURL=oldSection;
					getTags(oldSection).map(function(a){
						veneer.raiseEvent("leave", a.elm, loc);
					});
				}
				
				if(!e && path==404) return location.hash="/";//return home if booting on error page
				

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
				"data-nav-sub": argv[2]||"",
				"data-path":	path
			 });
			  
			if(e || elm.init ){ // don't run transitions for the loading init call, unless specified
				body.setAttribute("data-navigating","");
				setTimeout(function(){
					body.removeAttribute("data-navigating");
				}, 150 );
				
			}
			 
			//make a selector sig for each sheet that should be visible  
			sheet.innerHTML= tags.map(veneer.pluck, "route").map(function(a){
				return "[route="+JSON.stringify(a)+"]";
			}).join(", ") + "{display: inherit;}";
			  
			  
			  
			if(!tags.length){
				veneer.$("[route='404']").map(function(a){
					if(!a.tmp) a.tmp=a.innerHTML;
					a.innerHTML=veneer.template(loc, a.innerHTML);
					if(elm.title){document.title=document.title.replace(/\s[^:-]+?$/," ")+ "404";}
				});
				setTimeout(function(){location.hash="404";},0);
				return;
			}  

				
				
			veneer.ROUTE=loc; // publish 		  
			veneer.raiseEvent("routechange", window, loc); //raise routechange event
			
			  
			getTags(path,"[onroute]").forEach(function(a){
				var ok=a.elm.getAttribute("condition");
				if(!ok || eval(ok)) try{eval(a.elm.getAttribute("onroute"));}catch(y){}
			});
					
			getTags(path," veneer-mustache").forEach(function(a){
				a.elm.render();
			});		  
			  
			tags.map(function(a){
				veneer.raiseEvent("route", a.elm, loc);
			});
			
			veneer.$("nav a[href], #nav a[href], .nav a[href], data-nav a[href]").map(function(a,b){
				var hr=a.getAttribute("href").slice(1) || "/",
				cls=elm.activeClass || "routed";
				if(elm.useLinkParent) a=a.parentNode;
				
				if(a.classList.contains(cls)){
					if(hr != path) a.classList.remove(cls);
				}else{
					if(hr == path){
						a.classList.add(cls);
						if(elm.title){document.title=document.title.replace(/\s[^:-]+?$/," ")+ a[elm.title];}
					}
				}
			});
			  
			};//end ohc()
	
			
	
			addEventListener("hashchange", ohc, true);
			ohc(); // init on load
		
		}
	},
	props:{
		globals: veneer.bool, // publish constant global path indicators?
		boot: veneer.bool,	 // apply [data-navigating] to body tag on boot?
		activeClass: veneer.k, // class to apply to active nav items
		useLinkParent: veneer.k // should link's parent be given status classes instead of the link?
	},
	css: "veneer-route, [route] { display:none; } "
  });
  