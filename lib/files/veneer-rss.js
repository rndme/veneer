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
	var ok=Object.keys;
	elm.innerHTML=o.query.results.item.slice(0, elm.limit||10).map(function(x){
		x.src=x.source.content;
		ok(x).forEach(function(k,y,u){
			var v=x[k];
			if(typeof(v)==="object"){
				ok(v).forEach(function(p,y,u){
					x[k+"_"+p]=v[p];
				});
			}
		});
		x.keys=ok(x);
		return veneer.template(x, elm._temp);
	}).join("\n");
};

veneer("veneer-rss", {  
events: {
	remove: function(e){ clearTimeout(e.target._timer); },
	update: function upd(e){ 
		var elm=e.target,
		cid=Math.random().toString(36).replace(/[^a-z]/g,"");
		
		if(+elm.refresh){ elm._timer=setTimeout(upd.bind(this,e), 1000*60*elm.refresh);}
		
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