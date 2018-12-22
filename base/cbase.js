class Evthandler{
  constructor(isOnce= false, handler= null){
    this.isOnce = isOnce;
    this.handler = handler; 
  }
}

class cbase{
  constructor(){
    this.evt_handlers = [];

    this.iseventabled = true;
  }

  on(eventtype, handler) {
		// if( !(eventtype in Eventtype) ) return ; 
	  if(!this.evt_handlers[eventtype])
			this.evt_handlers[eventtype] = [];
		this.evt_handlers[eventtype].push(new Evthandler(false, handler));
	}

  trigger(eventtype, e){
		// if( !(eventtype in Eventtype) ) return ; 
		if( this.evt_handlers[eventtype] && this.evt_handlers[eventtype].length !== 0 ){
			for(let i= 0, size= this.evt_handlers[eventtype].length;i< size; i++ ){
				let hand =  this.evt_handlers[eventtype][i];
				hand.handler.call(this, e);
				if(hand.isOnce){
					this.evt_handlers[eventtype].shift(i,1);
					size--;
					i--;
				}
			}
		}
  }

  once(eventtype, handler){
		// if( !(eventtype in Eventtype) ) return ; 
		this.evt_handlers[eventtype].push(new Evthandler(true, handler));
	}
    
}