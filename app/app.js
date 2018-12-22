

const zcf = new Zcf("#can");

const snake = new Snake();

zcf.add(snake);

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
}, 600);