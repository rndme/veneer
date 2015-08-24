/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-menu',
	version: '1.0.0', tags: 'native ui',
	purpose: 'A drop-down menu, based on but not needing Bootstrap',
	attribs: { 
		info: ' should the alert be styled to be informational? ',
		warning: ' should the menu button  be styled to be a warning? (req bs.css) ',
		danger: ' should the menu button be styled to indicate an error? (req bs.css) ',
		primary: ' should the menu button be styled as the primary interaction control ? (bs.css) ' 		
	},
	events:  [ 'insert' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-menu", {
	events: {
  
		insert: function(e){ 
			var elm=e.target,
			content=elm.innerHTML;
			console.log(elm, content, elm.innerHTML);
			var clsName="info";
			if(elm.danger) clsName="danger";
		  	if(elm.primary) clsName="primary";
		  	if(elm['default']) clsName="default";
			if(elm.warning) clsName="warning";
			var id="id_"+(elm.id||Math.random().toString(36).slice(-5));
			var menuData={
			  id: id,
			  cls: clsName,
			  title: elm.title||"Menu",
				actions: veneer._(elm.children)
			};
		  
		  elm.title="";
		  
			elm.innerHTML= Mustache.to_html('<input type=checkbox class=drop id={{id}}>'+
	'<label for={{id}} class="btn btn-{{cls}} dropdown-toggle" data-toggle="dropdown" >{{title}}'+
	'	<span class="caret"></span></label>'+
    '  <ul class="dropdown-menu" role="menu">'+
	'  {{#actions}}'+
	'  	{{#href}}<li><a href="#{{href}}">{{textContent}}</a></li>{{/href}}'+
	'  	{{#className}} <li class="divider"></li> {{/className}}'+
	'  	{{^className}}{{^href}} {{textContent}} ??? {{/href}}{{/className}}'+
	'  {{/actions}}'+
    '  </ul>', menuData);
		  
		elm.onclick=function(e){
			if(e.target.tagName.match(/(label)|(input)/i)) return true;
			elm.children[0].checked=false;
		};

		}
	},
	props:{
		info : veneer.bool,
		warning: veneer.bool,
		danger: veneer.bool,
	  	primary: veneer.bool,
	  "default":  veneer.bool
	},
	 css:	
   ":host { position:relative; }"+
   ":host .dropdown-menu	{left: 0;position:absolute;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;list-style:none;background-color:#fff;border:1px solid rgba(0,0,0,.15);box-shadow:0 6px 12px 1px rgba(0,0,0,.15);background-clip:padding-box;-webkit-user-select:none; }"+
":host input.drop	{display:none;}"+
":host input.drop:checked~.dropdown-menu	{display:block;}"+
":host .dropdown-menu>li>a	{display:block;padding:3px 20px;text-decoration:none;white-space:nowrap;}"+
":host .dropdown-menu .divider	{background-color:rgba(0,0,0,0.1);height:2px;}"+
":host .dropdown-menu>li>a:hover,:host .dropdown-menu>li>a:focus	{background:rgba(133,133,133,0.25);}"+
":host input.drop:checked ~ .dropdown-toggle	{box-shadow:inset 0 3px 5px rgba(0,0,0,.125);}"+
":host input.drop ~ .dropdown-toggle	{display:inline-block;padding:0.5em 1em;-webkit-appearance:button;-webkit-user-select:none;}"
});