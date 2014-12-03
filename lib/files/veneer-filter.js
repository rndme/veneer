/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-filter',
	version: '1.0.0', tags: 'native ui group ',
	purpose: 'Filters the children of an element using a keyword to search the content or a specific attribute. copies required, type, value, pattern, and placeholder attributes to inner search form input ',
	attribs: { 
		target: 'Selector of element to filter the children of',
		many: 'Switches target to take a css selector of actually filtered elements instead of parent',
		attrib: 'specifies an attribute to filter by, like title, rel, data-category, class, etc',
		prop: 'in lieu of attrib, specifies the DOM property to compare with the term to filter by.',
		expr:	'in lieu of attrib and prop, an expression to run on the element using "this" to point to the element, ex: this.dataset.lastName',
		group:  'Group id of element(s) to filter' 
	},
	events:  [ 'insert', 'update', 'filtered' ]
 }
**/

//////////////////////////////////////////////


   veneer("veneer-filter", {

	events: {
		update: function(e){/*
			var elm=e.target,
			dest=elm._dest=veneer.$(elm.target),			
			x;
			
			if(elm.group && (x=veneer.group(elm.group)).length ){
				[].push.apply(dest, x);
			}
			*/
		},
		insert: function upd(e){ 
			var elm=e.target,
			 dest=elm._dest=veneer.$(elm.target),
			 inp=elm.children[0],
			 x;
			 
			if(!inp){ inp=elm.appendChild(veneer.elm("input",{type:"search"})); }
			
			inp.title=inp.title="Enter search term to filter:\n Use space to seperate terms\n Use quoted for an exact match\n Use a /RegExp/i for power";

			if(elm.group && (x=veneer.group(elm.group)).length ){
				[].push.apply(dest, x);
			}
			
			"placeholder,pattern,required,value,type,min,max".split(",").forEach(function(k){
				var at=elm.getAttribute(k);	
				if(at) inp[k]=at;
			});
		
			function show(e) {e.style.display='';}
			function hide(e) {e.style.display='none';}

			function kickit(){
				var dest=elm._dest=veneer.$(elm.target);
			
				dest.forEach(function(dest){
					var kids= elm.many ? [dest] : veneer._(dest.children),
					 prop=elm.prop || "textContent",
					 attrib=elm.attrib || "",
					 xpr=elm.expr || "",
					 s=inp.value.toLowerCase().trim(),
					 str=s.split(/\s+/).filter(String),
					 V= function (elm){
						return elm[prop] !=null ? elm[prop] : "";
					};
					
					if(attrib){
						V=function (elm){
							return elm.getAttribute(attrib)||"";
						};
					}
					
					if(xpr){
						V=Function.call.bind(Function("a", "return "+xpr));
					}
					
					function findOne(a){
						if( String(  V(a) ).toLowerCase().indexOf(str)!==-1){ 
							show(a); 
						}else{
							hide(a);
						}
					}
					function findMany(a){
						if( str.every(function(x){return String(  V(a)  ).toLowerCase().indexOf(x)!==-1;})){ 
							show(a); 
						}else{
							hide(a);
						}
					}
					function findRX(a){
						if( str.test( V(a) )  ){ 
							show(a); 
						}else{
							hide(a);
						}
					}

					if(s.slice(0,1)==='"' && s.slice(-1)==='"'){ str=[s.slice(1,-1)]; }//handle literals as all one

					if( /^\/[\w\W]+\/[igm]*$/.test(s) ){ try{str=rx(s);}catch(y){return;} return kids.forEach(findRX); }
					if( !str[0] ){ return kids.forEach(show); }
					if( str.length<2 ){ str=str[0]; return kids.forEach(findOne); }

					kids.forEach(findMany);

				});//end dest map
				veneer.raiseEvent("filtered", elm);	
			}//end kickit()

			
		inp.oninput=function kick(){
			clearTimeout(kick.timer);
			kick.timer=setTimeout(kickit, 200);			
		};

		function rx(r){
			var s=String(r),
			p=s.split(/\//).slice(1),
			flags=p.pop(),
			bod=p.join("/");
			return new RegExp(bod, flags);
		}
 
			
		if(inp.value) kickit();
		
		}//end insert
	},
	props:{
		target: String,
		many: veneer.bool,
		attrib: veneer.k,
		prop: veneer.k,
		expr: veneer.k
	},
	defaults:{
		prop: "textContent"
	},
	css:   ""
  });
  