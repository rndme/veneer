/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-dateinput',
	version: '1.0.0', tags: 'native date input controls',
	purpose: 'a more usable date input with click-able calendar and drop-downs for date parts',
	example: "<veneer-dateinput></veneer-dateinput>",
	attribs: { 
		value: 'a standard datestamp parse-able by window.Date() to set, or a Date object to get ',
		name: 'a field name to use when submitting the date picker, just like an <input>',
		target: 'CSS selector of input(s) to set the value of to the picked date. highly optional.'},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////

(function(){

var V=veneer;

V("veneer-dateinput", {
content: "<span class=dtcont><button type=button  onclick='parentNode.parentNode.next();return false;'> &lt; </button>"+
		"<input value='{{value}}' type=hidden />"+			
		"<button type=button onclick='parentNode.parentNode.next(1);return false;'> &gt; </button>"+
		"</span><veneer-cal time='{{value}}'></veneer-cal>",

events: {
insert: function(e){
	var E=e.target;
	E._temp= E.innerHTML;			
	E.innerHTML=V.template(E, E._temp);
	if(!E.value){e.value=new Date();}
	E.cal=E.getElementsByTagName("veneer-cal")[0];			
	E.inp=E.getElementsByTagName("input")[0];
	E.inp.onchange=function(){E.value=new Date(this.value);};	
	if(E.name)E.inp.name=E.name;

	function getMonthNames(r){
	  r=[];
	  for(var i=0;i<12;i++)r.push(new Date(2000,i,1).toUTCString().split(/\W+/)[2]);
	  return r;
	}

	function sel(len, offset){
		var os=+offset||0;
		var s=V.elm("select",{"class":"dtchoose"});
		for(var i=os, mx=(len||31)+os;i<mx;i++){
			s.options[s.options.length]=new Option(i+1);
		}
		return s;
	}

	var p=E.inp.parentNode;

	function add(tag, ch){
		var e=p.insertBefore( tag , E.inp);
		e.onchange=ch;
		return e;
	}		

	(E.monthPick=add(V.elm("select"), function(){
		var st=E.value;
		st.setMonth(this.selectedIndex);				
		E.value=st;
	})).title="Choose a Month";			
	getMonthNames().forEach(function(a,b){E.monthPick.options[b]=new Option(a);}); 

	(E.dayPick=add( sel(31), function(){
		var st=E.value, d=st.getMonth();
		st.setDate(this.value);				
		E.value=st;
		veneer.raiseEvent("change", E, {target: E}); 
	})).title="Choose a Date";

	(E.yearPick=add( sel(20, E.value.getFullYear()-10) , function(){
		var st=E.value;
		st.setYear(this.value);				
		E.value=st;
		veneer.raiseEvent("change", E, {target: E}); 
	})).title="Choose a Year";

	E.next=function(isPos){
		var st=E.value, d=st.getMonth();
		st.setMonth(isPos ? d+1 : d-1);				
		E.value=st;
	// 	console.log("NEXT clicks", E);
		veneer.raiseEvent("change", E);   
	};		

	E.cal.onclick=function(e){
		var t=e.target,x;
		if(x=+t.textContent){
			var st=E.value, d=st.getDate();
			st.setDate(x);
			E.value=st;
			veneer.raiseEvent("change", E, {target: E}); 
		}
	};

	E.change();

},

update: function upd(e){ 
	var E=e.target, 
	val=E.value;
	E.cal.time=val;			
	E.inp.value=val.toUTCString();			
	E.monthPick.value=val.toUTCString().split(/\W+/)[2];
	E.dayPick.value=val.getDate();
	E.yearPick.value=val.getFullYear();
	if(E.target){ veneer.$(E.target).map(function(a){a.value=E.inp.value;});}
	
}
},
props: {
	value: veneer.date,
	name: veneer.k,
	target: veneer.k

},
css: ("X {display:inline-block} "+
	"X button { float:right}"+
	"X tr>* {text-align:center}"+
	"X button:first-child{float:left}"+
	"X [colspan='7']{display:none}"+
	"X .cal{cursor:pointer}"+
	"X table.cal {min-height: 10em;}"+
	"X .cal-today{outline: 1px solid #008000;min-width: 2em;display: inline-block;}"+
	"X .dtcont{text-align:center;display:block;margin-bottom:-1em;}"+
	"X select, X button { min-height: 2em;background:none;border:0}"+
	"X button:hover{color:blue}").replace(/X/g,"veneer-dateinput")
});

}());