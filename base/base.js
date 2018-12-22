class ZEnvir{

}

class ZGlobal{
  constructor(){
    this._isNewFrame = false;
    this._timer;
  }

  get isNewFrame(){
    return this._isNewFrame;
  }
  set isNewFrame(isNewFrame){
    this._isNewFrame = isNewFrame;
  }
}

class ZMain{

  constructor(){
    this._gv = new ZGlobal();
  }

  run(){
    this._gv._timer = setInterval(()=>{
      if(this._gv.isNewFrame){
        game();
      }
    },100);
  }
}


class Util{

  static getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  static getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  static getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

  static getRandomColor(){
    return `rgba(${this.getRandomIntInclusive(0,255)},${this.getRandomIntInclusive(0,255)},${this.getRandomIntInclusive(0,255)},1)`;
  }
}