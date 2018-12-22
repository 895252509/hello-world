class Point{
  constructor( x= 0, y= 0 ){
    if( x instanceof Point ){
      this._x = x._x;
      this._y = x._y;

      return ;
    }

    this._x = x;
    this._y = y;
  }
}

class Size{
  constructor( w= 0, h= 0){
    this._w = w;
    this._h = h;
  }
}

class Rectangle{
  constructor(p1= new Point(), p2= new Point()){
    this._p1 = p1;
    this._p2 = p2;

    this.figure;

    this.style;
  }


}
