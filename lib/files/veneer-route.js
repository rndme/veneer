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
			function ohc(e){
			
				if(busy){return true;}
			

			
			  var argv=	location.hash.slice(1).split("/").filter(Boolean),
			  path=		JSON.stringify(argv.join("/")),
			  loc=		{section:argv[0], page: argv[1], sub:argv[2], argv: argv,  url: location.hash.slice(1) },
			  targets=	veneer.$(),
			  tags= veneer.$("[route="+path+"]");
			  

			  if(e && e.oldURL){
				var oldSection=e.oldURL.split("#")[1];
			    if(oldSection){
					var path2=JSON.stringify(oldSection.split("/").filter(Boolean).join("/"));
					if(veneer.$("[route="+path2+"][onleave],[data-route="+path2+"][onleave]").map(function(a){
						try{return eval(a.getAttribute("onleave"));}catch(y){ };
					}).indexOf(false)!==-1){
						busy=true;
						clearTimeout(ohc.timer);						
						ohc.timer=setTimeout(function(){busy=false}, 100);
						location.hash=oldSection;
						return false; //cancel the navigation if any event returns false
					}
				}
			  }
			  
			  
			  
			if(path=='"404"' || !e ){ // back to 404, go home
				return location.hash="";			
			}
		
			  // 404 ?
			if(!tags.length){
				veneer.$("[route='404']").map(function(a){
					if(!a.tmp) a.tmp=a.innerHTML;
					a.innerHTML=veneer.template(loc, a.innerHTML);
				});
				
				setTimeout(function(){location.hash="404";},0);
				return true;
			}  
			  
			  
			    // define a few global "constants" so that all scripts can find their way: (if config'd)
			  if(elm.globals){
				  SECTION=	argv[0];
				  PAGE= 	argv[1];
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
			  
			  
			  sheet.innerHTML= "[route="+path+"],[data-route="+path+"] {display: inherit;}"; // set current route visible
			  veneer.raiseEvent("nav", window, loc); //raise nav event
			  veneer.ROUTE=loc; // publish 
			  
			  // run apropos route scripts:
			  veneer.$("script[type^='route'][type$="+path+"]").forEach(function(a){
				var ok=a.getAttribute("condition");
				if(!ok || eval(ok)) try{eval(a.textContent);}catch(y){}
			  });
			  
			  
			  veneer.$("[route="+path+"][onroute],[data-route="+path+"][onroute]").map(function(a){
				var ok=a.getAttribute("condition");
				if(!ok || eval(ok)) try{eval(a.getAttribute("onroute"));}catch(y){}
			  });//run apropos onroute attribs
			  
			  
			  veneer.$("[route="+path+"] veneer-mustache").map(function(a){a.render();});
			  
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
  