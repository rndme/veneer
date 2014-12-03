/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-item',
	version: '1.0.0', tags: 'native control',
	purpose: 'Builds or Displays an object from a set of form elements',
	example: ' inspect the value property of the item tag: <veneer-item>age:<input name=age type=number> <br />city:<input name=city></veneer-item>', 
	attribs: { value: 'an object keyed by id/name and valued by values of form controls inside the tag' },
	events:  [ 'insert' ]
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

veneer("veneer-item", {  
	methods: {
		reset: function(){
			var blank={}, inp=veneer.$("input,select", this)[0]||this;
			Object.keys(this.value).forEach(function(k){this[k]=""}, blank);
			this.render(blank);
			if(inp.focus){inp.focus();}
			return this;
		},
		render: function(v){this._val=this.value=v||this.value;  return this;}
	},
	events: {
		insert: function upd(e){ 
			var elm=e.target;
			if(!elm._temp){ elm._temp=elm.innerHTML; }			
			if(elm.onchange) elm.onchange();
		}
	},
	props:{ 
		value: {
			attr: "val",
			observe: true,
			type: Object,
			value: {},
			get: function(){ 
				var ret={};
				veneer.$("input,select,textarea", this).forEach(function(a){
					if(a.id||a.name){ ret[a.id||a.name]=val(a); }
				});
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