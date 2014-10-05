/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-stock',
	version: '1.0.0', tags: 'native external',
	purpose: 'Displays stock price info from a given quote symbol attrib',
	example: "<veneer-stock symbol='GOOG'></veneer-stock>",
	attribs: { symbol: 'the stock ticker symbol to display information about'	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////

   veneer._incomingStock=function incomingStock(o){
	var elms=veneer.$("[symbol='"+o.query.results.quote.symbol+"']");
	
	elms.map(function(a){
		if(!a._temp){a._temp=a.innerHTML;}
		a.className="";
		a.innerHTML=veneer.template(o.query.results.quote, a._temp);
	});
   };



   veneer("veneer-stock", {
	content: "<b>{{Symbol}}</b>	{{Name}} <br /> <b>${{Bid}} ({{Change}}%)</b> {{Volume}} </small>",
	events: {
		update: function(e){ 
		
			if(e.target.lang!="shadow"){return;}
			
			e.target.className="busy";
			veneer.include(
				"https://query.yahooapis.com/v1/public/yql?q="+
				"select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20%3D%20%22"+
				    e.target.symbol +
				"%22%0A%09%09&format=json&env=http%3A%2F%2Fdatatables.org%2Falltables.env"+
				"&callback=veneer._incomingStock"
			);
		}
	},
	props:{
		symbol: String
	},
	css:   "veneer-stock.busy { visibility: hidden; } veneer-stock {float: left: clear: both;  }  " 
  });
  