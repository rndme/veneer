/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-sort',
	version: '1.0.4', tags: 'native control',
	purpose: 'Sorts the children of an element using a specific attribute or property. paths can be passed using dots',
	attribs: { 
		target: 'Selector of elements whose children should be sorted. can be a ul, table, etc'
	},
	events:  [ 'update', 'sorted' ]
 }
**/

//////////////////////////////////////////////
veneer("veneer-sort",{
events: {

update: function upd(e){
	var elm=e.target;
	if(elm._changer) elm._changer.call(elm._inp);
},
insert: function upd(e){  
	var elm=e.target,
	 dest=elm._dest=veneer.$(elm.target)[0]||"",
	 kids=veneer._(dest.children),
	 inp=elm._inp=veneer.$("input,select,[value]", elm)[0] || "",
	 isTable=dest.tagName==="TABLE";
	
	elm._changer=changer;
			
	if(!inp && !isTable){ return console.error("missing contents of sort tag: needs a <select> or <input>");}
	
	
	
	if(isTable){
		veneer.$("thead tr:first-child th", dest).map(function(a){
			a.value=a.cellIndex;
			a.className+=" sorter";
			a.addEventListener('click', function(){
				elm._column=a.cellIndex;
				changer.call(a);
			});
		});
	}else{
		inp.addEventListener("change", changer);//end if table?
	}
		

		
function changer() {
	var kids, 
	dest= elm._dest= veneer.$(elm.target)[0];
	
	if(isTable)	dest= dest.getElementsByTagName("tbody")[0];
		
	kids= veneer._(dest.children);
	
	if(kids.length < 2) return;		
	
	elm.desc= !elm.desc; // move to ind cols eventually
	
	var prop=  (isTable ? "textContent" : (this.value||elm._inp.value))||"textContent",
	finish= elm.desc ? "reverse" : "valueOf",
	column = elm._column, // for tables
	attr=prop[0]==="@",
	expr=prop[0]===".";
	if(isTable && elm.column)
	if(attr || expr) prop= prop.slice(1);
	
	var path=prop.split("."),
	many = path.length > 1 ? veneer.resolve : "";

	if(expr){ 
		many=Function("_src,self","return self."+prop);
	}
	
	var grab= attr ? function(a){ return a.getAttribute(prop);} : 
		(	many ? function(a){ return many(path, a);} :
			 function(a){ return a[prop];}
		),
	sorter;

	if(isTable && elm.column){
		prop=elm.column;
		attr=true;
	}
	
	grab = attr ? 
			function(a){ return a.cells[column].getAttribute(prop);} : 
			( many ? function(a){ return many(path, a.cells[column]);} :
					 function(a){ return a.cells[column][prop];} 
			);
	//}
	
	
	
	sorter = (parseFloat(grab(kids[1]))-0.789567887) ?  
		function srtNum(a, b) {
			return parseFloat(grab(a))-parseFloat(grab(b));
		} :
		function srtAll(a, b) {
			var a1=grab(a), b1=grab(b);
			return a1 > b1 ? 1 : (a1===b1 ? 0 : -1);
		};
	
	//sort the kids by criteria, then append in order to achieve sorting the container's children without extra dom
	kids.sort(sorter)[finish]().forEach(function(a) {
		dest.appendChild(a);
	});
	
	elm._column=column;
	veneer.raiseEvent("sorted", elm, {target: dest});
	
}//end changer()
		
	}
},
props:{
	target: String,
	column: veneer.k
},
defaults:{
	prop: "textContent"
}
});  
