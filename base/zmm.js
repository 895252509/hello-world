/**
 * zmm = z model manager
 */

class Zmm extends cbase{
  constructor(){
    super();

    // 存放显示对象
    this._model = [];

    EventNamesMouse.forEach( en =>{
      if( this[ `on${en}` ] )
      this.on( en, this[`on${en}`].bind(this) );
    })
  } 

  add(_obj){

    this._model.push(_obj);

  }

  onmousedown(e){
    for (const so of this.smode) {
      if(so.iseventabled && so.isHover( new Point(e.clientX,e.clientY) )) 
        so.trigger('mousedown',e);
    }
  }

  onmouseup(e){
    for (const so of this.smode) {
      if(so.iseventabled && so.isHover( new Point(e.clientX,e.clientY) )) 
        so.trigger('mouseup',e);
    }
  }

  onkeydown(e){
    for (const so of this.smode) {
      if(so.iseventabled && so.isHover( new Point(e.clientX,e.clientY) )) 
        so.trigger('keydown',e);
    }
  }

  onmousemove(e){
    for (const so of this.smode) {
      if(so.iseventabled && so.isHover( new Point(e.clientX,e.clientY) )) 
        so.trigger('mousemove',e);
    }
  }

  onclick(e){
    for (const so of this.smode) {
      if(so.iseventabled && so.isHover( new Point(e.clientX,e.clientY) )) 
        so.trigger('click',e);
    }

  }

  get smode(){
    return this._model;
  }
}
