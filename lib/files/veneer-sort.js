/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-sort',
	version: '1.0.0', tags: 'native control',
	purpose: 'Sorts the children of an element using a specific attribute and optional sort order attribute, order ',
	attribs: { 
		target: 'Selector of elements whose children should be sorted. use "table tbody" for tables to preserve column headers. ',
		prop: 'what property of the child should be used to sort? ',
		desc: 'Boolean - should the sort be flipped? '
	},
	events:  [ 'update', 'sorted', 'reset' ]
 }
**/

//////////////////////////////////////////////
   veneer("veneer-sort", {
	/*content: "<input type=search>",*/
	events: {
		update: function upd(e){
			var elm=e.target;
						
			clearTimeout(upd.timer);
			upd.timer=setTimeout(function(){
				if(elm && elm.children[0] && elm.children[0].onchange){ 
					elm.children[0].onchange(e);
				}
				//veneer.raiseEvent("change", elm, e);
			}, 70 );
			
			
		},
		insert: function upd(e){ 
		 
			var elm=e.target,
			 dest=elm._dest=veneer.$(elm.target)[0]||"",
			 kids=veneer._(dest.children),
			 inp=elm.children[0] || "",
			 isTable=dest.tagName=="TABLE";
			
			if(!inp && !isTable){return console.error("missing contents of sort tag: needs a <select>"); }
			inp.onchange=changer;
			
			if(isTable){
				veneer.$("thead tr:first-child th", dest).map(function(a){
					a.value=a.cellIndex;
					a.className+=" sorter";
					a.onclick=function(){
						elm.prop=a.cellIndex;
						changer.call(a);
					}
				});
				
				veneer.$("tbody tr td,tbody tr th", dest).map(function(a){
					a.parentNode[a.cellIndex]=a.textContent.trim().replace(/^\$\s*/,"");
				});
				
				


				
			}
			
			function changer(){
				var dest=elm._dest=veneer.$(elm.target)[0];
				if(isTable){ dest=dest.getElementsByTagName("tbody")[0]; }

				var kids=veneer._(dest.children);
				
				if(kids.length<2){return;}
			
				var prop = elm.prop=this.value;
				var finish=elm.desc?"reverse":"valueOf";
				elm.desc=!elm.desc;
				
								
				var sorter=function(a,b){
						return a[prop]>b[prop] ? 1 : (a[prop]===b[prop]?0:-1);
				};
				 
				if( !isNaN(parseInt(kids[0][prop])) ){ 
						sorter=function(a,b){
							return parseFloat(a[prop])-parseFloat(b[prop]);					
						};
				}
				
				
				if(prop[0]=="@"){
					prop=prop.slice(1);
					sorter=function(a,b){
						return (a=a.getAttribute(prop))>(b=b.getAttribute(prop)) ? 1 : (a===b?0:-1);
					}
					
					if( kids[0][prop]-0.768576534435 ){ 
						sorter=function(a,b){
							return a.getAttribute(prop)-b.getAttribute(prop);
						};
					}
					  
				}
				
				
				
				kids.sort(sorter)[finish]().forEach(function(a){
					dest.appendChild(a);
				});
				
				
				//veneer.raiseEvent("sorted", elm);
				
			};
			
		}
	},
	props:{
		target: String,
		prop: String,
		desc: veneer.bool
	},
	defaults:{
		prop: "textContent"
	}
  });
  