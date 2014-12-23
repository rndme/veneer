/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-datediff',
	version: '1.0.2', tags: 'native date',
	purpose: 'turns a GMT or UTC or ISO Date stamp into a human-friendly counter of the hours+mins (etc etc) since or until. highly customizable with CSS classes, ~ selectors, and :first-word pseudos',
	attribs: { 
			time: 'a standard datestamp parse-able by window.Date() ' , 
			continuous: 'a boolean indicating constant updates or not',
			interval: 'the # of seconds after which to update. defaults to 1 with continuous, 0 (disabled) without',
			value: 'alias for time attribute (for API consistency)'	
	},
	example: "<veneer-datediff time='2000-01-01T20:37:38.472Z'></veneer-datediff>",
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////

(function() {

function dateDiff(d1,d2,elm){function parts(d){return d.toISOString().split(/[\-T:.]/).slice(0,-1).map(Number);}
var d=d2-d1,r1=parts(d1),r2=parts(d2),r=r1.map(function(a,b){return this[b]-a;},r2).map(function(a,b){if(a<0){a=[0,12,30,24,60,60][b]+a;}
return a;});if(elm){elm.title=new Date(d1).toLocaleString();}
var empty=true;return r.map(function(a,b){if(!a&&empty){return"";}
empty=false;var d=this[b].replace(a!=1?"X":/s$/,"");if(elm){elm.setAttribute(this[b],a);}
return"<span class='dt_"+this[b]+"'>"+a+" "+d+"</span>";},["years","months","days","hours","mins","secs"]).filter(String).join("<span class=sep>, </span>");}

veneer("veneer-datediff", {
events: {
remove: function(e){ clearTimeout(e.target._timer); },
insert: function ins(e){
	var elm=e.target || this;
	elm._isCont=elm.hasAttribute("continuous");		
	elm.change();
},
update: function upd(e) {
	var elm = e.target || this, buff;
		if (!(elm.time||elm.value))return;
		clearTimeout(elm._timer);

		try{ buff=dateDiff(new Date(+elm.time||elm.time||+elm.value||elm.value||new Date), new Date(), elm); }catch(y){}
		if(buff && buff!=elm._buff) elm.innerHTML= elm._buff=buff;
		if (elm.continuous || (!elm._isCont && +elm.interval) ) {
			elm._timer = setTimeout(upd.bind(elm, e), (1000*elm.interval) || 1000);
		}
}
},
props: {
	time: veneer.k,
	continuous: veneer.bool,
	interval: Number,
	value: veneer.k
}
});
}());