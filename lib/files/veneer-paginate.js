/**  veneer.js custom html tag definition
				 {
					tagName: 'veneer-paginate',
					version: '1.0.0', tags: 'text ux',
					purpose: 'limits the amount of children shown in an element and builds navigation for it',
					attribs: { 
						target: 'the tag containing the children, chosen by this CSS selector',
						size: 'how many children per page should be shown?',
						label: 'text describing the pagination control itself'
						
						
					},
					events:  [ 'insert' ]
				 } 
				**/

//////////////////////////////////////////////
(function() {


	veneer("veneer-paginate", {
		methods: {

		},
		events: {
			remove: function(e) {
				clearTimeout(e.target._timer);
			},
			insert: function(e) {
				var elm = e.target,
					size = +elm.size || 10,
					targ = veneer.$(elm.target)[0],
					kids = veneer._(targ.children),
					count = kids.length,
					start = 0,
					pages = Math.ceil(count / size);
				elm.innerHTML = "<b class='veneer-paginate labeler'> " + (elm.label || "Page") + " </b> " + " <input value=1 type=number min=1 max=" + pages + ">" + "<b class='veneer-paginate maxpage'> / " + pages + " </b>";
				var inp = veneer.$("input", elm)[0];
				targ.className+=" paginated";

				function hide(a) {
					a.classList.add("pagehide");
				}

				function show(a) {
					a.classList.remove("pagehide");
				}

				function rehide() {
					start = size * Math.max(0, inp.value - 1);
					kids.forEach(hide);
					kids.slice(start, start + size).forEach(show);
					veneer.raiseEvent("change", elm, {
						target: targ
					});
				}

				inp.oninput = function oi(e) {
					clearTimeout(oi.timer);
					oi.timer = setTimeout(rehide, 203);
				};

				rehide();
				veneer.raiseEvent("ready", elm, { 
					target: elm
				});
			}
		},
		css: "veneer-paginate{display: block;} .pagehide { display:none !important; }",
		props: {
			size: Number,
			target: veneer.k,
			label: veneer.k
		}
	});
	
}());