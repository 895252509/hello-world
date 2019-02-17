

const zcf = new Zcf("#can");
const zmm = new Zmm();
zcf.model = zmm;

const snake = new Snake();
zmm.add(snake);

zcf.on( 'keydown', (e)=>{
  console.log("keydown zcf");
} );

zcf.on( 'click', e =>{
  console.log(`click: ${e.clientX},${e.clientY}`);
});

zcf.on( 'mousemove', e => {
  console.log(`mouse move x:\t${e.x},y:\t${e.y}`); 
});

snake.on('keydown',(e)=>{
  console.log(`key down ${e.type}`); 
  const key = e.key;
  switch(key){
    case 'ArrowDown':
      if( snake.dir === 'up' ) break;
      snake.dir = 'down';
    break;
    case 'ArrowUp':
      if( snake.dir === 'down' ) break;
      snake.dir = 'up';
      break;
    case 'ArrowLeft':
      if( snake.dir === 'right' ) break;
      snake.dir = 'left';
      break;
    case 'ArrowRight':
      if( snake.dir === 'left' ) break;
      snake.dir = 'right';
      break;
    default: break;
  }
});

setInterval(function (){
  snake.go();
}, 500);