// bind定义
// bind()方法创建一个新的函数，在bind()被调用时，这个新函数的this被bind的第一个参数指定，其余的参数将作为新函数的参数供调用时使用。

// JS内置对象
var x = 222;
const module1 = {
    x: 42,
    getX: function () {
        return this.x
    }
};

const module2 = {
    x: 12
}

const unboundGetX = module1.getX;
// const bound = unboundGetX.bind(module2)

// 自己实现

console.log(41, Function);


if (!Function.prototype.bind) {
    Function.prototype.bind = function(oThis) {
        if (typeof this !== 'function') {
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
        }

        var aArgs  = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP  = function() {},
            fBound = function() {
                return fToBind.apply(this instanceof fNOP
                    ? this
                    : oThis,
                    aArgs.concat(Array.prototype.slice.call(arguments)));
            };

        if (this.prototype) {
            // Function.prototype doesn't have a prototype property
            fNOP.prototype = this.prototype;
        }
        fBound.prototype = new fNOP();
        return fBound;
    };
}

// MDN 实现
// Does not work with `new funcA.bind(thisArg, args)`
/*
if (!Function.prototype.bind) (function(){
    var slice = Array.prototype.slice;
    Function.prototype.bind = function() {
        var thatFunc = this, thatArg = arguments[0];
        var args = slice.call(arguments, 1);
        if (typeof thatFunc !== 'function') {
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError('Function.prototype.bind - ' +
                'what is trying to be bound is not callable');
        }
        return function(){
            var funcArgs = args.concat(slice.call(arguments))
            return thatFunc.apply(thatArg, funcArgs);
        };
    };
})();*/
(function(){
    var slice = Array.prototype.slice;
    Function.prototype.bind = function() {
        var thatFunc = this, thatArg = arguments[0];
        var args = slice.call(arguments, 1);
        // console.log('thatArg', thatArg);
        if (typeof thatFunc !== 'function') {
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError('Function.prototype.bind - ' +
                'what is trying to be bound is not callable');
        }
        return function(){
            console.log('arguments', arguments);
            console.log('args', args);
            var funcArgs = args.concat(slice.call(arguments))
            console.log('funcArgs', funcArgs);
            return thatFunc.apply(thatArg, funcArgs);
        };
    };
})()

var obj = {
    name: '小张',
    objAge: this.age,
    myFun: function (fm, t) {
        console.log(this.name + this.age, '来自' + fm + '去往' + t)
    }
}

var db = {
    name: 'Danika',
    age: 99
}

obj.myFun.bind(db, ['北京', '上海'], '天津')();

