/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-csv',
	version: '1.0.0', tags: 'native data grid',
	purpose: 'Displays an HTML table made from simple comma-separated-values inside the tag ',
	attribs: { 	
		caption: 'text to show above the table',
		src:	'a url from which to load the CSV data',
		interval: 'a number of seconds to wait before re-loading a csv URL, 0 for no reloading'
	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////



veneer("veneer-csv", {
	methods: {
		render: function(data){
			var tab=this.tab;
			this._data=data||this._data||{};
			data.map(function(row, rowNum){
					var tr=tab.insertRow();
					row.map(function(cell){
						 if(!rowNum){ return tr.appendChild(veneer.elm("th")).innerHTML=cell;}
						tr.insertCell().innerHTML=cell;			
					});
				});
				
		},
		renderURL: function(data){
			
			var d=data.query.results.row.map(function(row){
				return Object.keys(row).map(function(col, i){
					return row[col];					
				});
			});
			this.setAttribute("data-done", true );
			this.render(d);
		}
	},
	
	events: {
		insert: function(e){
			var elm=e.target;
			elm.id=elm.id||"csv"+Math.random().toString().slice(-4);
			if(elm.getAttribute("data-done") ){return;}
			var data=elm._data || (elm._data=elm.innerHTML.trim());
			elm.innerHTML="";

			var tab=elm.appendChild(veneer.elm("table"));
			if(elm.caption && String(elm.caption).trim() ){
				tab.appendChild(veneer.elm("caption")).innerHTML=elm.caption;
			}

			elm.tab=tab;
			
			var src= "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20csv%20where%20url%3D'"+
				encodeURIComponent(elm.src) +
			"'%20&format=json&callback="+elm.id+".renderURL";
			if(!elm.src){				
				elm.render(data.split(/\r?\n/).map(function(a){return a.split(",");}));
				elm.setAttribute("data-done", true );
			}else{
				veneer.include(src);
				if(elm.interval){ clearInterval(elm.timer); elm.timer=setInterval(veneer.include.bind(this, src), elm.interval*1000); }
			}
			

		}
	},
	props:{
		caption: veneer.k,
		src: veneer.k,
		interval: Number
	}, 
	css:  "veneer-csv {display: block; white-space: pre; } \n"+
	"veneer-csv table { width: 99%; }   \n"+
	"veneer-csv[data-done] { white-space: normal; }  " 
  });