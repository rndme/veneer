/**  veneer.js custom html tag definition {
	tagName: 'veneer-cal',
	version: '1.0.0', tags: 'native date',
	purpose: 'turns a GMT or UTC or ISO Date stamp into a human-friendly month view',
	example: "<veneer-cal></veneer-cal>",
	attribs: { time: 'a standard datestamp parse-able by window.Date() ' },
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 (function(){
	
 veneer("veneer-cal", {
	events: {
		update: function(e){ 
			var elm=e.target;
			elm.innerHTML=calendar(  new Date(  +elm.time || elm.time || +new Date() ) );
		}
	},
	css: ".cal td { width: 14.2%; } .cal-day1, .cal-day7 { opacity: 0.8; }",
	props:{
		time: veneer.k
	}
  });
  
  
  
  function calendar(c){var a=[],b=c=c||new Date,d,e=[31,28,31,30,31,30,31,31,30,31,30,31];year=b.getYear()+1900,d=b.getDate();if(0==year%4&&0!=year%100||0==year%400)e[1]=29;nDays=e[b.getMonth()],firstDay=b,firstDay.setDate(1),startDay=firstDay.getDay(),a.push("<TABLE class=cal width=100% BORDER='0' cellspacing='0' CELLPADDING=\"0\"><TR><TH COLSPAN=7>")," 1 2 3 4 5 6 7 8 9101112".substring(2*b.getMonth(),2*(b.getMonth()+1)),b="JanFebMarAprMayJunJulAugSepOctNovDec".substring(3*b.getMonth(),3*(b.getMonth()+1)),a.push(b+" "+year),a.push("</TH></TR>\n	<TR class=daynames><TD>Sun</TD><TD>Mon</TD><TD>Tue</TD><TD>Wed</TD><TD>Thu</TD><TD>Fri</TD><TD>Sat</TD>"),a.push("</TR><TR>");for(i=column=0;i<startDay;i++)a.push("<TD> </TD>"),column++;for(i=1;i<=nDays;i++)a.push("<TD data-date='"+c.getMonth()+"-"+i+"'>"),0==column&&a.push('<span class=cal-day1>'),6==column&&a.push('<span class=cal-day7>'),i==d&&a.push('<span class=cal-today>'),a.push(i),6!=column&&0!=column&&i!=d||a.push("</FONT>"),column++,a.push("</td>"),7==column&&(a.push("</TR><TR>"),column=0);return a.push("</TR></TABLE><P>"),a.join("\n	")}
  
  
 }());