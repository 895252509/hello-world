window.onload = function() {
    //debugger;


}

class Eventhandler{
  constructor(isOnce= false, handler= null){
    this.isOnce = isOnce;
    this.handler = handler; 
  }
}

class Able{
	// event 
	static event(){
		this._handlers = [];
		this.on = (eventtype, handler) => {
		// if( !(eventtype in Eventtype) ) return ; 
			if(!this._handlers[eventtype])
				this._handlers[eventtype] = [];
			this._handlers[eventtype].push(new Eventhandler(false, handler));
		}
		this.trigger = (eventtype, e) => {
		// if( !(eventtype in Eventtype) ) return ; 
			if( this._handlers[eventtype] && this._handlers[eventtype].length !== 0 ){
				for(let i= 0, size= this._handlers[eventtype].length;i< size; i++ ){
					let hand =  this._handlers[eventtype][i];
					hand.handler.call(this, e);
					if(hand.isOnce){
						this._handlers[eventtype].shift(i,1);
						size--;
						i--;
					}
				}
			}
		}

		this.once = (eventtype, handler) => {
		// if( !(eventtype in Eventtype) ) return ; 
		this._handlers[eventtype].push(new Eventhandler(false, handler));
		}
	}

	static Event(that){
		Able.event.bind(that).call();
	}

	static animal(){
		this._animal = "animal";
	}

	static Animal (that){
		Able.animal.bind(that).call();
	}
}

class Abled{
  constructor(){
    Able.Event(this);
  }
}

class Rectangle extends Abled{
  constructor(x, y, w, h){
    super();

    this._id = 0;

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.linklineinfo = new Map();
  }

  show(ctx){
    ctx.save();
    
    ctx.strokeRect(
      this.x + 0.5,
      this.y + 0.5,
      this.w, this.h
    );

    ctx.restore();

  }

  get id(){
    return this._id ++;
  }

  addLinkLine(line, x, y, dire){
    const id = this.id;
    const lineinfo = {
      line: line,
      linkpoint: {
        x: x,
        y: y,
      },
      linedirection: dire, // forward | behind
    };
    this.linklineinfo.set(id, lineinfo);
  }

  move( x, y ){
    this.x += x;
    this.y += y;

    for(const line of this.linklineinfo.values() ){
      if(line.linedirection === "forward"){
        line.line.start = { x: this.x + line.linkpoint.x, y: this.y + line.linkpoint.y};
      }else{
        line.line.end = { x: this.x, y: this.y };
      }
    }
  }
}

class Line extends Abled{
  constructor(x1, y1, x2, y2, w){
    super();

    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;

    this.linew = w;

    this.isStartArrow = false;
    this.isEndArrow = false;
  }

  show(context){
    context.save();

    context.lineCap='round';
    if( this.linew )
      context.lineWidth= this.linew;

    context.beginPath();
    context.moveTo(this.x1, this.y1);
    context.lineTo(this.x2, this.y2);
    context.stroke();

    context.restore();
  }

  set start({x, y}){
    this.x1 = x;
    this.y1 = y;
  }

  set end({x, y}){
    this.x2 = x;
    this.y2 = y;
  }
}

class Manage{
  constructor(ctx){
    this.ctx = ctx;
    
    this.child = [];

  }

  add(obj){
    this.child.push(obj);
  }

  run(){
    const step = (function (){
      this.ctx.clearRect(0, 0, 1000, 800);
      this.show();
      window.requestAnimationFrame(step);
    }).bind(this);
    window.requestAnimationFrame(step);
  }

  show(){
    for (const path of this.child) {
      path.show(this.ctx);
    }
  }
}
class EventDrive{
  constructor(){
    Able.Event(this);

    this.canvasdom = null;
    
    this.canvas = null;
  
    this.child = [];
  }

  add(obj){
    this.child.push(obj);

    this.update();
  }

  init( dom ){
    this.canvasdom = document.querySelector(`#${dom}`);

    this.canvas = this.canvasdom.getContext("2d");
  
    this.canvasdom.addEventListener("click", () => {
      this.child.forEach(element => {
        element.trigger("click");
      });
    });

    this.update();

  }

  update(){

    this.child.forEach(ele => {
      ele.show(this.canvas);
    });

  }
}

class Can{
  constructor(_dom){
    this.dom = document.querySelector(`canvas[id='${_dom}']`);
    // this.dom = document.getElementById("can");
    this.can2d = this.dom.getContext("2d");

    const m = new Manage(this.can2d);
    const rect = new Rectangle(10,10,20,20);
    const rect2 = new Rectangle(10,40,20,20);
    m.add(rect);
    m.add(rect2);
    const line1 = new Line(0,0,50,50);
    rect.addLinkLine(line1, 20, 20, "forward");
    rect2.addLinkLine(line1, 10, 10, "behind");
    m.add(line1);
    m.run();
    setInterval(function (){
      rect.move(0.2, 0.2); 
      rect2.move(0.3, 0.1); 
    }, 10);
  }
}
