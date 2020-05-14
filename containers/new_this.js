function Foo() {
    getName = function () { alert (1); };
    return this;
}
Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);};
var getName = function () { alert (4);};
function getName() { alert (5);}

//请写出以下输出结果：
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();


// 2 4 1 1
// 2 3 3

// https://mp.weixin.qq.com/s/0zBsqkqzBBZqUl3nPdXlXw
// https://github.com/Wscats/articles/issues/85