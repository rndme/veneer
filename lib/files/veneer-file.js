/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-file',
	version: '1.0.0', tags: 'native ui',
	purpose: 'A better file upload box, with file meta, and file content change events.',
	example: '<veneer-file multiple accept=image/* ></veneer-file>',
	depends: ['filesize'],
	attribs: { 
		watch: 'if present, watches populated files for changes can re-dispatches the change event when the source file changes on the disk (by another app)',
		name: ' used on the file input for submitting with forms ',
		accept: 'a mime type and/or file name filter to suggest to the OS which kinda of files should be shown in the open dialog',
		multiple: 'should the user be allow to select more than one file? ',
		value: 'used to pre-populate the name that is show, functioning like placeholder on text inputs'
	},
	events:  [ 'update' ]
 }
**/

//////////////////////////////////////////////
 (function(){
		
	
 veneer("veneer-file", {
	content: '<input type="file" /> <label><span class=btn>Choose File...</span></label>',
	events: {
	
	update: function upd(e){ 
	
		var elm=e.target, 
		file,
		inp=elm.children[0],
		url,
		lastDate,
		temp="{{date}} (<veneer-filesize data={{size}}></veneer-filesize>): <b>{{name}}</b> ",
		metaBox=veneer.elm("div", {});
		
		elm.files=inp.files;
		
		if(elm.accept){
			inp.accept=elm.accept;
		}
		
		if(elm.value){
			veneer.$("label span", elm)[0].innerHTML=elm.value;
		}
		
		if(elm.multiple){
			inp.multiple=elm.multiple;
		}
		elm.appendChild(metaBox);

		function updateMeta(){
			
			metaBox.innerHTML= veneer._(inp.files).map(function(file){
				return veneer.template(file, temp);
			}).join("<br>");
		}
		
		function refreshFiles(){
			
			if(veneer._(inp.files).filter(function(file){
				if(file.lastDate==file.lastModifiedDate){return;}
				
				console.log(file);
				
				file.date=new Date(file.lastModifiedDate).toLocaleDateString();
				file.lastDate=file.lastModifiedDate;

				if(window.URL){
					if(file.url){ window.URL.revokeObjectURL(file.url); }
					file.url=window.URL.createObjectURL(file);
				}
				
				return true;
			}).length){
				updateMeta();
			}
			
			
		}
		

		inp.onchange=function(e){
			e.cancelBubble=true;
			e.stopPropagation();
			
			if(!inp.files.length){return;}
			
			elm.files=veneer._(inp.files);
			refreshFiles();
			var oe=elm.getAttribute("onchange");
			if(oe){ setTimeout( Function(oe).bind(elm) , 250); }
			return false;
		};
		
		if(elm.watch){
			clearInterval(upd.timer);
			upd.timer=setInterval(refreshFiles, 1333 );
			
		}
		
		if(elm.name){ inp.name= elm.name; }
		
		
		
		inp.id="i"+Math.random().toString(36).slice(-4);
		veneer.$("label", elm)[0].htmlFor=inp.id;
		
	   }	
	},
	props:{
		name: veneer.k,
		value: veneer.k,
		watch: veneer.bool,
		multiple: veneer.bool,
		accept: veneer.k
	},
	 css: "veneer-file{display:inline-block;} veneer-file input[type=file]{opacity:0.0; display:inline-block; overflow:hidden; width: 5px; height: 3px; } "+
	 "veneer-file div {display: inline-block; padding-left:0.7em; vertical-align: top; }"+
	 "veneer-file span { border: 1px solid #bbb; background:#ddd; text-align: center; display: inline-block; min-width: 5em;  }"
  });
  
  
  
 }());