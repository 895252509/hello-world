class JSLoader{
  constructor(){

  }

  static load(url,resolve){
    const scel = document.createElement('script');
    scel.type = "text/javascript";
    scel.src = url;
    scel.async = true;
    document.body.appendChild(scel);

    scel.onload = function (e){
      console.log(`${url} loaded.`);
      resolve();
      scel.remove();
    };
    /*
    scel.addEventListener("load",await function (){
      console.log(`${url} loaded.`);
      scel.remove();
    });

    return new Promise( ( resolve, reject )=>{
      scel.addEventListener("load", function (){
        console.log(`${url} loaded.`);
        scel.remove();
        resolve();
      });
    });

    */
  }
}