/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-tabs',
	version: '1.0.0', tags: 'native ui tabs',
	purpose: 'A fexible tab panel widget',
	example: '',
	attribs: { 
		danger: ' should the alert be styled to indicate an error? '
	},
	events:  [ 'insert' ]
 }
**/

//////////////////////////////////////////////

veneer("veneer-tabs", {
	events: {
		insert: function(e) {
			var elm = e.target,
			list = veneer._(elm.children),
			targs = list.map(function(x){
				return x.dest = veneer.$(x.getAttribute("target") || "")[0];
			});

			list.forEach(function(trigger){
				trigger.onclick = function(e) {
					veneer._(list).map(function(x){
						x.classList.remove("active");
					});
					trigger.classList.add("active");
					targs.forEach(veneer.setStyle.bind(null, "display", "none"));
					var dest = veneer.$(trigger.getAttribute("target") || "")[0];
					if (dest) dest.style.display = null;
					veneer.$("veneer-tabs>*[target='"+trigger.getAttribute("target")+"']").filter(function(a){return a!=trigger}).map(function(a){
						a.click();
					});
				};
			}); // end each tab trigger in list

			if (veneer.$(".active", elm).length == 0) list[0].click();
		}
	},
	props: {

	},
	css: 	" :host > * { overflow: hidden;	transition: 250ms border-bottom-color; display: inline-block; cursor: pointer; border-bottom: 2px solid transparent;} " + 
		" :host > .active { border-bottom-color: #000; cursor: default; }" + 
		" :host > *:hover { border-bottom-color: #888; } "
});