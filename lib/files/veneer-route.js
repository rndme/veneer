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
		globals:	' if present, SECTION, PAGE, and SUB will be set for any script to see. note that veneer.ROUTE has those and more',
		useLinkParent: 'should links parent be given status classes instead of the link?'
	},
	events:  [ 'insert' ] 
 }
**/

//////////////////////////////////////////////

veneer("veneer-route", {
	events: {	insert: function ldr(e){ 
	
var elm=e.target, 
body=document.body,
sheet=veneer.root.appendChild(veneer.elm("style")), // use for transient dynamic css to show/hide route
busy=false,	// allows suspending response when re-directing 404
hist=elm.HISTORY=[]; // track this router's activity

function qs(c,b){b=b||{};return decodeURIComponent((""+c).split("?").pop()).split("&").forEach(function(a){a=a.split("="),this[a[0]]=(a[1]-0.3534)?+a[1]:a[1]},b),b}

function getTags(path, subSetSelector){
	path=path.split("?")[0];
	return veneer.$("[route]"+(subSetSelector||"")+","+"[data-route]"+(subSetSelector||"")).map(function(a, b){
		return { route: a.getAttribute("route")||a.getAttribute("data-route")||"/", elm: a, i: b };
	}).filter(function(a){
		var r=a.route||"";
		if(r.slice(0,2).toLowerCase()==="rx"){
			r=RegExp(r.slice(3).replace(/\//g,"\\\/"));
		}
		var hit =String( path.match( r ) ||"");
		return (r.exec && hit)||(r==path) ||  ((path+"/")===r) || ( hit.length>1 && (hit.slice(-1)==="/"));
	});
 } 

 
function ohc(e){
	if(busy){return;}				
	
	var argv=	location.hash.slice(1).split("?")[0].split("/").filter(Boolean),
	path=		argv.join("/")||"/",
	tags= 		getTags(path),
	hash=		location.hash.slice(1),
	loc=		{
	  section:	argv[0], 
		page:   argv[1], 
		sub:	argv[2], 
		argv:	argv,  
		url:	hash, 
		path:	path,
		href:	location.href,
		pos:	body.scrollTop || document.documentElement.scrollTop,
		query:	qs(hash),
		date:	Date.now(),
		dur:	0,
		home:	function(){location.href="#";}
	},
	targets=	veneer.$(),
	old;
	
	var st=(hist.slice(-1)[0]||"").date || Date.now();		
	(hist.slice(-1)[0]||loc).dur= +((Date.now()-st)/1000).toFixed(2);		
	hist.push(loc); // add nav event to route history
	
	function makeBusy(){
		busy=true;
		clearTimeout(ohc.timer);						
		ohc.timer=setTimeout(function(){busy=false}, 100);
	}
	
	if(e && e.oldURL && 
		(old=(e.oldURL.split("?")[0].split("#")[1] ||"/")) &&				
		getTags(old=(old||"/").split("/").filter(Boolean).join("/"),"[onleave]").map(function(a){
			try{return eval(a.elm.getAttribute("onleave"));}catch(y){ };
		}).indexOf(false)!==  -1 
	){
		makeBusy();
		location.hash=old;
		return; //cancel the navigation if any event returns false
	}
	
	if(old){
		loc.oldURL=old;
		getTags(old).forEach(function(a){
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


if(!tags.filter(function(a){return !a.elm.hasAttribute("nonav");}).length){ // not found
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
veneer.raiseEvent("routechange", elm, loc); //raise routechange event
 
//run in-line onroute handlers
getTags(path,"[onroute]").forEach(function(a){
	var ok=a.elm.getAttribute("condition");
	var e=loc;
	if(!ok || eval(ok)) try{eval(a.elm.getAttribute("onroute"));}catch(y){}
});

//run render on routed templates
getTags(path)
.map(veneer.pluck,"elm")
.map(function(a){ 
	veneer.$("veneer-mustache", a)
	.forEach(function(tag){ if(tag.render) tag.render();});
});

//raise an event on each route tag
tags.map(function(a){
	veneer.raiseEvent("route", a.elm, loc);
});

//update link classes and document title from link
veneer.$("nav a[href], #nav a[href], .nav a[href], data-nav a[href]").map(function(a,b){
	var hr=a.getAttribute("href").slice(1).split("?")[0] || "/",
	cls=elm.activeClass || "routed";
	if(elm.useLinkParent) a=a.parentNode;
	
	if(a.classList.contains(cls)){
		if(hr != path) a.classList.remove(cls);
	}else{
		if(hr == path){
			a.classList.add(cls);
			veneer.raiseEvent("routed", a, loc);
			loc.ref=hr;
			if(elm.title!=null){document.title=document.title.replace(/\s[^:\-\|]+.*$/," ")+ a[elm.title||"textContent"];}
		}
	}
});

};//end ohc()



addEventListener("hashchange", ohc, true);
ohc(); // init on load

}
},
	props:{
		globals: veneer.bool, 	// publish constant global path indicators?
		boot: veneer.bool,	 	// apply [data-navigating] to body tag on boot?
		activeClass: veneer.k, 	// class to apply to active nav items
		useLinkParent: veneer.k// should link's parent be given status classes instead of the link?
	},
	css: "veneer-route, [route] { display:none; } "
});