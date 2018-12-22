
class Snake extends cbase{
  constructor(){
    super();

    this.head = new SnakeHead(new Point(8, 2));
    this.body = [];

    this.body.push(new SnakeBody(new Point(7, 2)));
    this.body.push(new SnakeBody(new Point(6, 2)));
    this.body.push(new SnakeBody(new Point(5, 2)));
    this.body.push(new SnakeBody(new Point(4, 2)));
  }

  draw(ctx){
    if( !ctx ) return ;

    ctx.save();

    this.head.draw(ctx);
    this.body.forEach( bd=> bd.draw(ctx) );

    ctx.restore();
  }

  go(){

    let preHeadPos = new Point(this.head.pos);

    switch(this.dir){
      case 'right':
        this.head.pos._x ++;
      break;
      case 'left':
        this.head.pos._x --;
      break;
      case 'up':
        this.head.pos._y --;
      break;
      case 'down':
        this.head.pos._y ++;
      break;
      default:break;
    }

    let tempPos = new Point();
    this.body.forEach( bd => { 
      tempPos= bd.pos;
      bd.pos = preHeadPos;
      preHeadPos = tempPos;
    });
  }

  get dir(){
    return this.head.dir;
  }

  set dir(_dir){
    this.head.dir = _dir;
  }
}

class SnakeBody{
  constructor(_pos = new Point()){
    this.pos = _pos;
  }

  draw(ctx){
    if( !ctx ) return ;
    ctx.save();

    ctx.fillStyle = 'rgba(255,255,255,1)';

    ctx.fillRect(
      this.pos._x * 10, 
      this.pos._y * 10,
      10, 10);

    ctx.restore();
  }
}

class SnakeHead{
  constructor(_pos = new Point(), _dir = 'right'){
    this.dir = _dir;
    this.pos = _pos;
  }

  draw(ctx){
    if( !ctx ) return ;
    ctx.save();

    ctx.fillRect(
      this.pos._x * 10, 
      this.pos._y * 10,
      10, 10);

    ctx.restore();
  }
}