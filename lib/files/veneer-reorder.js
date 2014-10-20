/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-reorder',
	version: '1.0.0', tags: 'native control dnd',
	purpose: 'Allows child elements to be re-ordered by dragging and dropping',
	attribs: { target: 'A string CSS selector of the element whose children should be re-arrangeable, or a collection of siblings itself' },
	events:  [ 'update', 'reordered' ]
 }
**/

//////////////////////////////////////////////

(function(){
	
	var cItem;

	function allow(e) {
		e.preventDefault();
	}

	function enter(e) {
		this.classList.add('over');
	}

	function leave(e) {
		this.classList.remove('over');
	}

	function drag(){
		cItem=this; 
		this.classList.add('under');  
	};

	function drop(e) {
		e.preventDefault();
		if(!cItem) return;
		
		var top=this.getBoundingClientRect().top + (this.offsetHeight/2),
		mom=this.parentNode;
		
		if(top < e.clientY){
			mom.insertBefore(cItem, this);
			mom.insertBefore(this, cItem);
		}else{
			mom.insertBefore(cItem, this);
		}
		
		leave.call(this, e);
		cItem.classList.remove('under');
		veneer.raiseEvent("reordered", cItem, e);
		cItem=null;
	}

	

veneer("veneer-reorder", {  
	events: {
		insert: function upd(e){ 
			var elm=e.target,
				r=veneer.$(elm.target||"zaqazsqd");

			if(r.length===0) return;
			if(r.length===1) r=veneer._(r[0].children);
			
			r.map(function(x, index){
				x.draggable=true;
				x._defaultIndex=index;
				x.ondrag=drag;
				x.ondragover=allow;
				x.ondragenter=enter;
				x.ondragleave=leave;
				x.ondrop=drop;
			});
		}
	},
	props:{
		target: veneer.k
	},
	css:  "veneer-reorder {display:none;} .over { outline: 2px solid blue;}	.under { opacity: 0.5;} " 
});


}());//end privacy