/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-item',
	version: '1.0.1', tags: 'native control',
	purpose: 'Builds or Displays an object from a set of form elements',
	example: ' inspect the value property of the item tag: <veneer-item>age:<input name=age type=number> <br />city:<input name=city></veneer-item>', 
	attribs: { 
	publish: 'if present, push value of form input to an item tag data- attrib on startup and change'	,
	 value: 'an object keyed by id/name and valued by values of form controls inside the tag',
			query: '[read-only] a string representing the serialized value of the items (what a form would GET if submitted)'
		},
	events:  [ 'insert' ],
	methods: {
		reset: 'returns the wrapped form elements to initial values/states'
	}
 }
**/

//////////////////////////////////////////////

(function(){
	
	function val(inp){
		if(inp.type=="radio"||inp.type=="checkbox"){return inp.checked;}
		if(inp.type=="number"||inp.type=="range"){return +inp.value;}
		return inp.value;
	}
	
	function sVal(inp, v){
		if(inp.type=="radio"||inp.type=="checkbox"){return inp.checked=v;}
		return inp.value=v;
	}

	function getKids(base){ return veneer.$("input,select,textarea,button,[value]", base);}
	
	function updateData(base){ getKids(base).forEach(function(el){
			base.dataset[el.id||el.name]=val(el);
	 }); }
	
veneer("veneer-item", {  
	methods: {
		reset: function(){
			var blank={}, r=getKids(this), inp=r[0]||this;
			
			Object.keys(this.value).forEach(function(k){
				this[k]="";
			}, blank);
			
			this.render(blank);
			r.forEach(function(a,b){if(b=a.defaultValue)a.value=b; });
			r.forEach(	veneer.raiseEvent.bind(veneer, "reset") );
			
			if(inp.focus){inp.focus();}
			return this;
		},
		render: function(v){this._val=this.value=v||this.value;  return this;}
	},
	events: {
		update: function(){ return true; },
		insert: function upd(e){ 
			var elm=e.target;
			if(elm.onchange) elm.onchange();
			
			if(elm.publish) updateData(elm); 
			
			getKids(elm).forEach(function(el){
				el.addEventListener("change", function(e){ 
						if(elm.publish) updateData(elm);
						veneer.raiseEvent("change", elm, e);
					 if(elm.change) elm.change();
				});
				el._item=elm;
			});
			
		}
	},
	props:{ 
		publish: veneer.bool,
		key: veneer.k,
		query: { 
		
			attr: "query",
			observe: false,
			type: String,
			value: "",
			get: function(){ 
				var ret="", x=encodeURIComponent;
				getKids( this).forEach(function(a){
					if(a.type==="checked"||a.type==="radio"){
						if(!a.checked) return ;
					}
					if(a[this.key]||a.id||a.name){ 
						return ret+="&"+x(a[this.key]||a.id||a.name)+"="+x(val(a));
					}
				},this);
				return ret.slice(1);
			},
			set: function(){}
		},
		
		value: {
		
			attr: "val",
			observe: true, 
			type: Object,
			value: {},
			get: function(){ 
				var ret={};
				getKids(this).forEach(function(a){
					if(a[this.key]||a.id||a.name){ ret[a[this.key]||a.id||a.name]=val(a); }
				},this);
				return ret;
			},
			set: function(v){
				var elm=this;
				elm._val=v;
				Object.keys(v).map(function(k){
					var inp=veneer.$("[name='"+k+"'],[id='"+k+"']", elm)[0];
					if(inp){ sVal(inp, v[k]); }
				}, v);
				//elm.render();
			}			
		}
	},
	css:  "veneer-item {display: inline-block;  }  " 
});


}());//end privacy