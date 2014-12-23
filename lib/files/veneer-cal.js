/**  veneer.js custom html tag definition {
	tagName: 'veneer-cal',
	version: '1.0.2', tags: 'native date',
	purpose: 'turns a GMT or UTC or ISO Date stamp into a human-friendly month view',
	example: "<veneer-cal></veneer-cal>",
	attribs: { 
		time: 'a standard datestamp parse-able by window.Date() ',
		value: 'alias for time attribute (for API consistency)',
		interval: 'how many seconds to wait before updating - default 0 means never'
	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
(function(){
	
veneer("veneer-cal", {
events: {
	remove: function(e){clearTimeout(e.target._timer);},
	update: function upd(e){ 
		var elm=e.target;
		if(elm.interval && !elm._timer) elm._timer=setInterval(upd, elm.interval*1000);
		elm.innerHTML=calendar(new Date(+elm.time||elm.time||+elm.value||elm.value||+new Date()));
	}
},
css: ".cal td { width: 14.2%; } .cal-day1, .cal-day7 { opacity: 0.8; } .cal-today { font-weight:bold }",
props:{
	time: veneer.k,
	value: veneer.k,
	interval: Number
}
}); 

function calendar(c){var C,n,fd,sd,a=[],i,b=c=c||new Date,e=[31,28,31,30,31,30,31,31,30,31,30,31],year=b.getYear()+1900,d=b.getDate();if(0==year%4&&0!=year%100||0==year%400)e[1]=29;n=e[b.getMonth()],fd=b,fd.setDate(1),sd=fd.getDay(),a.push("<table class=cal width=100% border=0 cellspacing=0 cellpadding=0><tr><th colspan=7>")," 1 2 3 4 5 6 7 8 9101112".substring(2*b.getMonth(),2*(b.getMonth()+1)),b="JanFebMarAprMayJunJulAugSepOctNovDec".substring(3*b.getMonth(),3*(b.getMonth()+1)),a.push(b+" "+year),a.push("</th></tr>\n	<tr class=daynames><td>Sun</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td>"),a.push("</tr><tr>");for(i=C=0;i<sd;i++)a.push("<td> </td>"),C++;for(i=1;i<=n;i++)a.push("<td data-date='"+c.getMonth()+"-"+i+"'>"),0==C&&a.push('<span class=cal-day1>'),6==C&&a.push('<span class=cal-day7>'),i==d&&a.push('<span class=cal-today>'),a.push(i),6!=C&&0!=C&&i!=d||a.push("</span>"),C++,a.push("</td>"),7==C&&(a.push("</tr><tr>"),C=0);return a.push("</tr></table>"),a.join("\n	")}
}());