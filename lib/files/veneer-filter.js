/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-filter',
	version: '1.0.0', tags: 'native ui group ',
	purpose: 'Filters the children of an element using a keyword to search the content or a specific attribute ',
	attribs: { 
		target: 'Selector of element to filter',
		group:  'Group id of element(s) to filter' 
	},
	events:  [ 'insert', 'filtered' ]
 }
**/

//////////////////////////////////////////////
   veneer("veneer-filter", {

	events: {
		update: function(e){
			var elm=e.target,
			dest=elm._dest=veneer.$(elm.target),			
			x;
			
			if(elm.group && (x=veneer.group(elm.group)).length ){
				[].push.apply(dest, x);
			}
			
		},
		insert: function upd(e){ 
		 
			
		 
			var elm=e.target,
			 dest=elm._dest=veneer.$(elm.target);
			 
			 
			 
			 var inp=elm.children[0],
			 x;
			 
			if(!inp){ inp=elm.appendChild(veneer.elm("input",{type:"search"})); }
			 
			inp.title=inp.title="Enter search term to filter:\n Use space to seperate terms\n Use quoted for an exact match\n Use a /RegExp/i for power";

			if(elm.group && (x=veneer.group(elm.group)).length ){
				[].push.apply(dest, x);
			}
		
			
			if(x=elm.getAttribute("placeholder")){ inp.placeholder=x; }
			if(x=elm.getAttribute("pattern")){ inp.pattern=x; }
			if(x=elm.hasAttribute("required")){ inp.required=x; }
		
			
			function show(e){e.style.display='';}
			function hide(e){e.style.display='none';}




				function kickit(){

					var dest=elm._dest=veneer.$(elm.target);
				
					dest.forEach(function(dest){
						var kids=veneer._(dest.children),
						 prop=elm.prop || "textContent",
						 s=inp.value.toLowerCase().trim(),
						 str=s.split(/\s+/).filter(String);
					 
						function findOne(a){
							if( String( a[prop] ).toLowerCase().indexOf(str)!==-1){ 
								show(a); 
							}else{
								hide(a);
							}
						}

						function findMany(a){
							if( str.every(function(x){return String( a[prop] ).toLowerCase().indexOf(x)!==-1;})){ 
								show(a); 
							}else{
								hide(a);
							}
						}

						function findRX(a){
							if( str.test( a[prop] )  ){ 
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


			
		}
	},
	props:{
		target: String,
		prop: String
	},
	defaults:{
		prop: "textContent"
	},
	css:   ""
  });
  