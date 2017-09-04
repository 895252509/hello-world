/**
 * 封装   
 * 原始的封装
 */

// function Cat(name, color) {
//     return {
//         name: name,
//         color: color
//     }
// }

//用法  
var cat1 = Cat("name", "red");


/**
 * 构造函数方法
 */
function CatConstructor(name, color) {
    this.name = name;
    this.color = color;
}
var cat2 = new CatConstructor("name", "red");
cat2.constructor == CatConstructor == true;
cat1 instanceof CatConstructor;

/**
 * prototype 方式创建静态变量
 */
function CatProto(name, color) {
    this.name = name;
    this.color = color;
}
CatProto.prototype.type = 'cat'; //相当于类公有静态变量
CatProto.prototype.eat = function() {
    console.log("eat fish");
};
// isPrototypeOf()  判断 对象和某个实例之间的关系
var cat3 = new CatProto("name", "red");
CatProto.prototype.isPrototypeOf(cat3);
//hasOwnProperty() 判断对象的属性是自有的还是继承自prototype的
cat3.hasOwnProperty("name") == true;
cat3.hasOwnProperty("type") == false;



/**
 * 
 * 继承关系
 * 
 */


// function Animal() {　　　　
//     this.species = "动物";　　
// }　　


function Cat(name, color) {　　　　
    this.name = name;　　　　
    this.color = color;　　
}
// 1 构造函数绑定
　　
//     Animal.apply(this, arguments);　　　　
//     this.name = name;　　　　
//     this.color = color;　　
// }　　function Cat(name, color) {　　　　


// var cat1 = new Cat("大毛", "黄色");　　
// alert(cat1.species); // 动物

// 2 prototype 方法
　　
// Cat.prototype = new Animal();　　
// Cat.prototype.constructor = Cat;

// 3 直接继承 prototype
　
function Animal() {}　　
Animal.prototype.species = "动物";　　
Cat.prototype = Animal.prototype;　　
Cat.prototype.constructor = Cat;　　
var cat1 = new Cat("大毛", "黄色");　　
alert(cat1.species); // 动物
Animal.prototype.species = "Animal";
alert(cat1.species); // 动物

/**
 * copy 继承
 */
　　
function extend2(Child, Parent) {　　　　
    var p = Parent.prototype;　　　　
    var c = Child.prototype;　　　　
    for (var i in p) {　　　　　　
        c[i] = p[i];　　　　　　
    }　　　　
    c.uber = p;　　
}