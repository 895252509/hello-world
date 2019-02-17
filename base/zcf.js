/**
 * zcf = z canvas framwork
 */

class Zcf extends cbase{
  constructor( _cid ){
    super();

    /**
     * 一些配置项目
     */
    //是否启用监听键盘事件
    this._keydownevented = true;

    // canvas dom
    this.ccvs = document.querySelector(_cid);
    // canvas 上下文
    this.cvs = this.ccvs.getContext('2d');
    // 执行timer
    this.tmrun = null;
    // 可显示对象数组
    this._smode = null;

    this._dispatchEvt();

    this._run();
  }

  _dispatchEvt(){

    CEventful.eventful(this);

  }

  _clearscreen(){
    this.cvs.save();
    this.cvs.fillStyle = 'rgba(47,79,79,1)';
    this.cvs.fillRect( 0,0,this.screenwidth,this.screenheight );
    this.cvs.restore();
  }

  _run(){
    setInterval( (e)=>{
      this._frame();
    }, 100);
  }

  _frame(){
    
    this._clearscreen();

    this._draw();
  }

  _draw(){
    for( let so of this.smode ){
      so.draw(this.cvs);
    }
  }

  get screenwidth(){
    return this.ccvs.width;
  }

  get screenheight(){
    return this.ccvs.height;
  }

  get smode(){
    return this._smode._model;
  }

  get model(){
    return this._smode;
  }

  set model(obj){
    if(!obj instanceof Zmm ) return ;
    this._smode = obj;
  }

}