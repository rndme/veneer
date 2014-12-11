/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-attrib',
	version: '1.0.6', tags: 'native control',
	purpose: 'Uses a wrapped form input to change an attrib on another element, and vice versa (2-way binding if possible)',
	attribs: { 
		target: 'CSS selector pointing to bound element', 
		attrib: 'name of target elm attribute to alter',
		prop:	'name of property to alter, used in lieu of attrib ',
		silent: 'if present, keeps targets change event from firing when attribute updates',
		pre: 'text to prepend in front of the raw wrapped input value, good for choosing selectors',
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
	silent: veneer.bool,
	pre:  veneer.k,
	interval: Number
},
events: {
insert: function ins(e){
	var elm=e.target, x, srcInp, targKey=elm.prop||elm.attrib||"value",
	srcProp="value", 
	dest=veneer.$(elm.target||"wxdgwbkxd");
	
	elm._input=srcInp=veneer.$("input,select,textarea,button,[value]", elm)[0];
	
	if(srcInp.type=="checkbox" || srcInp.type=="radio")	srcProp="checked";
	
	elm._srcProp=srcProp;	
	if(srcInp.type=="button"){			
		srcInp.onclick=elm.change.bind(elm);
		elm._button=true;
	}else{
		//if inp prop is null grab it from the frist match (if avail)
		if(srcInp[srcProp]==null && dest[0] && dest[0][targKey]!=null){
			srcInp[srcProp]= dest[0][targKey];
		}
		srcInp.addEventListener("change", elm.change.bind(elm), true);
	}//end if button?
		
	if(!elm.silent) elm.change();
	if(elm.interval) setInterval(elm.change.bind(elm), elm.interval);
},

update: function(e){ 
	var  elm=e.target, 
	pre=elm.pre||"", 
	srcProp=elm._srcProp||"value", 
	val= elm._input[srcProp],
	targKey=elm.prop||elm.attrib||"value",
	callback= elm.attrib ? attr : prop ;
	if(elm._button) callback=meth;
	if(val==null) val="";
	if(pre) val=pre+val;
	if({value:1}[targKey]) callback=function(a){ attr(a); prop(a); };

	veneer.$(elm.target||"wxdgwbkxd").forEach(function(dElm){
		callback(dElm);
		if( dElm._def && dElm._def.props && dElm._def.props[targKey]) return; // veneer tags will change themselves
		trig(dElm);
	});
	
	function attr(o){	
		o.setAttribute(targKey, val );
	}	
	
	function prop(o){
		o[targKey]=val;
	}
	
	function meth(o){	
		o[targKey]();
	}
	
	function trig(o){
	// veneer.raiseEvent('update', dElm, e.detail );  
		veneer.raiseEvent('input', o, e.detail );
		veneer.raiseEvent('change', o, e.detail ); 
	}
}
},
css: "veneer-attrib { display: inline-block; } "
});