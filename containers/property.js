// test
/*
function Super(name) {
    this.name = name;
}

Super.prototype.sayName = function () {
    alert(this.name);
}

// 原型面向对象风格
function Sub(name) {
    Super.call(this, name);
}

Sub.prototype = Object.create(Super.prototype);
Sub.prototype.Speak = function () {
    alert(this.sayName);
}

// 行为委托方式
var SubThree = Object.create(Super);
SubThree.speak = function () {
    alert(this.sayName());
}

// ES6

class Super {
    constructor(name) {
        this.name = name;
    }
    sayName(){
        alert(this.name);
    }
}

class Sub extends Super{
    constructor(name, age){
        super(name);

    }

    speak() {
        alert(this.sayName());
    }
}*/
