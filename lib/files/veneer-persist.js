/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-persist',
	version: '1.0.0', tags: 'native storage',
	purpose: 'Keeps the contents of this tag between page views',

	attribs: { 
		id:		' required to distinguish different persisted sections',
		session: ' Should the persistence only last until the tab is closed? ' 
	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-persist", {
	events: {

		update: function(e){
			var elm=e.target,
			key="X:" + location.pathname + elm.id;

			(elm.session?sessionStorage:localStorage)[key] = elm.innerHTML;
		},
		
		insert: function ins(e){ 


			var elm=e.target,
			key= "X:" + location.pathname + elm.id,
			content=(elm.session?sessionStorage:localStorage)[key]||"";
		
			
			var MO=self.MutationObserver||self.WebKitMutationObserver;
		
			if(!MO){
				if(!ins.waiting){
					ins.waiting=true;
					veneer.include("/veneer/ie.js");
				}
				return setTimeout(ins.bind(this, e), 100);
				
			}
			
			
			
			elm._orig=elm.innerHTML;
			
			elm.clear=function(blnClearHTML){ 
				elm.innerHTML=elm._orig;
				return delete (elm.session?sessionStorage:localStorage)[key];
			};
			
			
			if(content){ 
				elm.innerHTML=content; 
				 
				// run scripts:
				veneer.$("script", elm).map(function(a){
					var s;
					if(!a.src){ 
						try{
							if(window.execScript){
								return window.execScript.call(window, a.textContent);
							}
							window.eval.call( window, a.textContent );
						}catch(y){
							setTimeout(a.textContent,0);
						}
						return;
					}
					 
					if(!a.type||a.type.toLowerCase()=="text/javascript"){
						s=veneer.elm("script", {src: a.src}, a.innerHTML);
						setTimeout(function(){document.body.removeChild(s)}, 20000);
						document.body.appendChild(s);
					}
					
				});
				
				if(elm.onchange){elm.onchange(); }
			}else{
				if(elm.change){elm.change(); }
			}
			
			// subscribe to innerHTML changes:			 
			// create an observer and debounce saves to a half second:
			var timer, 
			ob = new MO(function() {
			     clearTimeout(timer);
				 if(elm.change) timer=setTimeout(elm.change.bind(elm), 500);
				
			});
			
			//ios6 bug patch
			if(navigator.userAgent.match("6_0 like Mac OS X")){
				elm.addEventListener("DOMNodeInserted", Boolean, false);
			}
			
			// watch over the perist element and it's kids:
			ob.observe(elm,  { attributes: true, subtree: true, childList: true, characterData: true });


		}
	},
	css: " veneer-persist { display: inline-block; } ",
	props:{
		session: veneer.bool
	}
  });
  
