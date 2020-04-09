// 实现curry
// 只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数

// ES5
function curry(fn, arr=[]) {
    return fn.length === arr.length ? fn.apply(null, arr) : function (...args) {
        return curry(fn, arr.concat(args))
    }
}

function add(x, y, z) {
    return (x + y + z)
}

function currying (fn, ...args1) {
    return function (...args2) {
        return fn(...args1, ...args2);
    }
}

var increment = currying(add, 1)

console.log(46, increment);

console.log(48, increment(2));

function trueCurrying(fn, ...args) {
    // fn.length 为fn参数的长度
    console.log('fn', fn, fn.length);
    console.log('arg', args );
    if (args.length >= fn.length) {
        return fn(...args)
    }
    return function (...args2) {
        return trueCurrying(fn, ...args, ...args2)
    }
}

var test = trueCurrying(add, 1,2,3,4)
var test2 = currying(add, 1)


 console.log(39, test);
 console.log(40, test2(2));