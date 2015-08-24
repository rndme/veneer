/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-alert',
	version: '1.0.0', tags: 'native ui',
	purpose: 'A star rating widget',
	example: '<veneer-rate value=5></veneer-rate>',
	attribs: { 
		info: ' should the alert be styled to be informational? ',
		warning: ' should the alert be styled to be a warning? ',
		danger: ' should the alert be styled to indicate an error? '
	},
	events:  [ 'insert' ]
 }
**/

//////////////////////////////////////////////
 
 veneer("veneer-alert", {
	events: {
		insert: function(e){ 
			var elm=e.target,
			content=elm.innerHTML;
			console.log(elm, content, elm.innerHTML);
			var clsName="info";
			if(elm.danger) clsName="danger";
			if(elm.warning) clsName="warning";
			var id="id_"+(elm.id||Math.random().toString(36).slice(-5));
			
			elm.innerHTML= '<input type=checkbox class=alerter id='+id+'>\n'+
			'<div class="alert alert-'+clsName+' alert-dismissible fade in" role="alert">\n'+
				'<label class="btn close pull-right pull-v" for='+id+' data-dismiss="alert" aria-label="Close">X</label>'+ 
				content +
				'</div>';
		}
	},
	props:{
		info : veneer.bool,
		warning: veneer.bool,
		danger: veneer.bool
	},
	 css:	(" :host~:checked + .alert		{opacity:1;}"+
			" :host ~ + .alert.fade		{height:100%;position:relative;transition:200ms height,200ms opacity,200ms margin !important;}"+
			" :host ~	{display:none;}"+
			" :host ~ + .alert>.close	{margin-top:-0.2em;font-size:175%;padding:0.3em 0;}"+
			" :host ~:checked + .alert:not(.fade)	{display:none;}"+
			" :host ~:checked + .alert.fade	{opacity:0;height:0px;overflow:hidden;z-index:-8;padding:0;margin:-0.18em 0;}"+
			" :host  .alert	{padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:4px;}"+
			" :host  .close	{float:right;font-size:21px;font-weight:700;line-height:1;margin-top: -0.4em;color:#000;text-shadow:0 1px 0 #fff;opacity:.2;filter:alpha(opacity=20);}"+
			" :host  .alert-warning	{background-color:#fcf8e3;border-color:#faebcc;color:#8a6d3b;}"+
			" :host  .alert-info	{background-color:#d9edf7;border-color:#bce8f1;color:#31708f;}"+
			" :host ~ + .alert>.close	{margin-top:-0.2em;font-size:175%;padding:0.3em 0;  margin-right: 0.75em;}"+
			" :host  .close:hover,.close:focus	{color:#000;text-decoration:none;cursor:pointer;opacity:.5;filter:alpha(opacity=50);}"+
			" :host  .alert-danger {  background-color: #f2dede;  border-color: #ebccd1;  color: #a94442; }").replace(/~/g," input[type=checkbox].alerter")
});
