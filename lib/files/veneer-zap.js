/**  veneer.js custom html tag definition
 {
	tagName: 'veneer-zap',
	version: '1.0.0', tags: 'native storage beta external',
	purpose: 'provides real-time event publishing and long-term storage, along with an event-driven API for managing data',
	attribs: { 
		term:		'filters a channel by this term and re-invokes the list event',
		channel:		' required. the name of your zapjs.com channel',
		sort:		'sorts a channel by this field name and re-invokes the list event',
		fields: 'a comma-separated list of your field names to be fed to the other-wise minimal list event argument'
	},
	events:  [ 'update','insert','reset' ],
	methods: {
		save: 'accepts an object to publish/archive, causing the item event to fire',
		load: 'fetches a single item by passed id, fires load event when done.',
		remove: 'flags an item deleted, causing the item event to fire',
		list: 'causes a list event to fire with the current list data',
		query: 'accepts an object of the zapjs SELECT API params for custom views or advanced searches'		
	}
 }
**/

//////////////////////////////////////////////
 (function(){

// todo: now requires "zap" var, implement channel attrib to spawn a new zap channel


	function id(){
		return ((7/Math.random()).toString(36)+"qsdcewf").slice(4, 12);
	}
	
	var zap, raise=veneer.raiseEvent;
	

veneer("veneer-zap", {
	events: {
		update: function(e){
			this.list();
		},
		insert: function ins(e){
			if(!window.Zap){ 
				if(!this.dispatched){
					this.dispatched=true;
					veneer.include("https://js.zapjs.com");
				}
				return setTimeout(ins.bind(this,e), 100); 
			}
			if(!this.channel) throw new Error("Missing channel attrib on veneer-zap tag!");
			
			this.zap=zap=new Zap(this.channel);
			zap.elm=e.target;
			zap.DELETED="cn03tpg24n0ncwerfhwero856";
			Function(this.textContent).call(this);
			raise("reset", this);
			// raise("reset", item);
		}
	},
	css: "veneer-zap {display:none;white-space:pre;}",
	props:{
		term: veneer.k,
		channel: veneer.k,
		sort: veneer.k,
		fields: veneer.k
	},
	defaults: {
		fields: "date"
	},
	methods: {
		 
		save: function(v){			
			
			if(v==null) return 1;
			
			//make sure data has a usable _id:
			if(typeof v==="object"){
				if(!v._id){v._id=id();}
			}else{
				v={_id: id(), value: v};
			}
			
			//save the data and send out updates to connected clients
			 zap.broadcast("item", v ); 
			 zap.emit("save", v);
			 return 0;
		},

		load: function(id){
			zap.select(function(e){
				zap.emit("load", e[0]);
			}, { FROM: "item", MATCH: id, FLAGS:"bare"  });
			return 0;
		},

		remove: function(id){
			zap.select(function(e){
			 
				var v=e[0].data;
				v.deleted=zap.DELETED;
				
				zap.broadcast("item", v );
			}, { FROM: "item", MATCH: id, FLAGS:"bare"  });
			return 0;
		},
		 
		list: function(){
		
			var isAll= zap.elm.fields=="*", sPrefix=isAll ? "*" : ("_id,"+(zap.elm.fields||"435evrgdf"));
		
			zap.select(function(e){
				var k, v, r=[];
				for(k in e){ v=e[k]; if( isAll ?  !v.data.deleted : !v.deleted) r.push( isAll ? v.data : v);} 
				zap.emit("list", r); 
			}, { FROM: "item", FLAGS:"bare", MATCH: zap.elm.term || undefined, ORDERBY: zap.elm.sort || undefined,
				SELECT: sPrefix , UNIQUE:"_id",  GROUP: "_id", REDUCE: "first,[]", COMPAREBY: "deleted!cn03tpg24n0ncwerfhwero856"		});
			return 0;
		},
				
		query: function(objTerms){
			var o=objTerms;
			if(typeof o !="object"){ return 1; }
			 zap.select( zap.emit.bind(zap, "query"), o );
			 return 0;
		}
		
 	}
});

}());//end wrap()
