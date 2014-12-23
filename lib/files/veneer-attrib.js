/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-attrib',
	version: '1.0.6', tags: 'native control',
	purpose: 'Uses a wrapped form input to change an attrib on another element, and vice versa (2-way binding if possible)',
	attribs: { 
		target: 'CSS selector pointing to bound element', 
		attrib: 'name of target elm attribute to alter',
		prop:	'name of element property to alter, used in lieu of attrib',
		silent: 'if present, keeps targets change event from firing when attribute updates',
		pre: 'text to prepend in front of the value, good for choosing selectors',
		interval: '# of seconds after which to re-apply the change event, mainly for triggering methods'
	},
	events:  [ 'insert', 'update' ]
 }
**/

//////////////////////////////////////////////

veneer("veneer-attrib", {

props: {
	target: String,
	attrib: veneer.k,
	prop: veneer.k,
	event: veneer.k,
	silent: veneer.bool,
	pre:  veneer.k,
	interval: Number
},
events: {
remove: function(e){ clearTimeout(e.target._timer); },
insert: function ins(e){
	var elm=e.target, x, inp, targKey=elm.prop||elm.attrib||"value",
	srcProp="value", 
	dest=veneer.$(elm.target||"wxdgwbkxd");
	
	elm._input=inp=veneer.$("input,select,textarea,button,[value]", elm)[0];
	if(!inp) elm._input=inp=elm.appendChild(veneer.elm("input"));
	if(inp.type=="checkbox" || inp.type=="radio")	srcProp="checked";
	
	elm._srcProp=srcProp;	
	if(inp.type==="button" || inp.type==="submit"){			
		inp.onclick=elm.change.bind(elm);
		elm._button=true;
	}else{
		if( (inp[srcProp]==null || ( inp[srcProp]=="" && srcProp=="value") )&& dest[0] && dest[0][targKey]!=null){
			inp[srcProp]= dest[0][targKey];
		}
		inp.addEventListener(elm.event||"change", elm.change.bind(elm), true);
	}//end button?
		
	if(!elm.silent) elm.change();
	if(elm.interval) elm._timer=setInterval(elm.change.bind(elm), elm.interval);
},

update: function(e){ 
	var  elm=e.target,
	pre=elm.pre||"", 
	srcProp=elm._srcProp||"value", 
	val= elm._input[srcProp],
	k=elm.prop||elm.attrib||"value",
	cb= elm.attrib ? attr : prop ;
	if(elm._button) cb=meth;
	if(val==null) val="";
	if(pre) val=pre+val;
	if({value:1}[k]) cb=function(a){ attr(a); prop(a); };

	veneer.$(elm.target||"wxdgwbkxd").forEach(function(dElm){
		var ret=cb(dElm);
		if( dElm._def && dElm._def.props && dElm._def.props[k]) return; // veneer tags will change themselves
		if(ret) trig(dElm);
	});
	
	function attr(o){if(o.getAttribute(k)!=val){o.setAttribute(k, val);return true;}}	
	function prop(o){if(o[k]!=val){o[k]=val;return true;}}
	function meth(o){if(o[k]&&o[k].call){return o[k]();}o[k]=val;	}
	function trig(o){
		veneer.raiseEvent('input', o, e.detail );
		veneer.raiseEvent('change', o, e.detail ); 
	}
}
},
css: "veneer-attrib { display: inline-block; } "
});