class Zcf extends cbase{
  constructor( _cid ){
    super();

    /**
     * 一些配置项目
     */
    //是否启用监听键盘事件
    this._keydownevented = true;


    this.ccvs = document.querySelector(_cid);
    this.cvs = this.ccvs.getContext('2d');
    this.tmrun = null;
    this.smode = [];

    this._dispatchEvt();

    this._run();
  }

  add(obj){
    if( !obj ) return ;
    this.smode.push(obj);
  }

  _dispatchEvt(){

    this.ccvs.addEventListener('click', function(e){
      console.log(`click: ${e.clientX},${e.clientY}`);
    });

    if( this._keydownevented ){
      document.addEventListener('keydown', (e)=>{
        console.log(`keydown: ${e.key}`);
        for (const so of this.smode) {
          if(so.iseventabled) so.trigger('keydown',e);
        } 
      });
    }
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
}