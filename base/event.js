class CEventful{
  constructor(){
    if(!CEventful.instance){

      CEventful.instance = this;

    }
    return CEventful.instance;
  }

  static eventful(obj){

    if( !obj._keydownevented ){
      EventNamesKeywords.forEach(v => {
        obj.ccvs.addEventListener( v ,  CEventful[`on${v}`].bind(obj) );
      });
    }

    EventNamesMouse.forEach(v => {
      obj.ccvs.addEventListener( v ,  CEventful[`on${v}`].bind(obj) );
    });

  }

  //鼠标点击
  static onclick(e){
  
    this.trigger('click',e);

    this.model.trigger('click',e);

  }

  //鼠标移动
  static onmousemove(e){

    this.trigger('mousemove',e);
    
    this.model.trigger('mousemove',e);
    
  }

  //鼠标按下
  static onmousedown(e){

    this.trigger('mousedown',e);

    this.model.trigger('mousedown',e);
  }

  //鼠标按键抬起
  static onmouseup(e){

    this.trigger('mouseup',e);

    this.model.trigger('mouseup',e);

  }

  //鼠标双击
  static ondbclick(e){

    this.trigger('dbclick',e);

  }

  //鼠标滚轮滚动
  static onwheel(e){

    this.trigger('wheel',e);

  }

  //鼠标经过
  static onmouseover(e){

    this.trigger('mouseover',e);

  }

  //键盘按下
  static onkeydown(e){

    if( !this._keydownevented ) return ;

    this.trigger('keydown',e);

    this.model.trigger('keydown',e);

  }

  //键盘按住
  static onkeypress(){

    this.trigger('keypress',e);

  }

  //键盘松开
  static onkeyup(e){

    this.trigger('keyup',e);

  }

  //获取焦点
  static onfocus(e){

    this.trigger('focus',e);

  }

  //失去焦点
  static onblur(e){

    this.trigger('blur',e);

  }

  //右键菜单
  static oncontextmenu(e){
    e.preventDefault();
    e.stopPropagation();
  }

}