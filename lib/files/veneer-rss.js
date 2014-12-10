/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-rss',
	version: '1.0.1', tags: 'native external template data',
	purpose: 'Displays an RSS feed given a url and html template',
	attribs: { 
		url: 'the url of the rss feed',
		limit: 'the maximum # of items to show' ,
		interval: ' # of seconds to wait before re-updating the content, 0 for never is default'
	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////

(function(){
	
veneer.rssPool={};

function incomingRSS (o, elm){
	if(!elm._temp){ elm._temp=elm.innerHTML; }

	elm.innerHTML=o.query.results.item.slice(0, elm.limit||10).map(function(item){
		item.src=item.source.content;
		Object.keys(item).map(function(k){
			var v=item[k];
			if(typeof(v)==="object"){
				Object.keys(v).map(function(p){
					item[k+"_"+p]=v[p];
				});
			}
		});
		item.keys=Object.keys(item);
		return veneer.template(item, elm._temp);
	}).join("\n");
	
};



veneer("veneer-rss", {  
	events: {
		update: function upd(e){ 
			var elm=e.target;
			 
			if(elm.refresh){ setTimeout(upd.bind(this,e), 1000*60*elm.refresh)}
			
			var cid=Math.random().toString(36).replace(/[^a-z]/g,"");
			veneer.rssPool[cid]=function(e){ incomingRSS(e, elm); delete veneer.rssPool[cid]; };

			veneer.include(
				"https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'"+
					encodeURIComponent( elm.url ) +
				"'&format=json&callback=veneer.rssPool."+
					cid
			);
		}
	},
	props:{
		url: String,
		limit: Number,
		interval: Number
	},
	css:  "veneer-rss {float: left; clear: both; display: block; }  " 
});


}());//end privacy