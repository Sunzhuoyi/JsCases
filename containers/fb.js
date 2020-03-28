// 斐波那契数列的几种js实现

// 一 递归 当参数n变大时，出现浏览器假死现实
function fb1(n) {
    if (n <= 2) {
        return 1;
    } else {
        return fb1(n-1) + fb1(n-2)
    }
}

// 二 尾调用优化
function fb2(n, res1 = 1, res2 = 2) {
    if (n <= 2) {
        return res2;
    } else {
        return fb2(n-1, res2, res1 + res2)
    }
}

// 三 迭代
function fb3(n) {
    var res1 = 1;
    var res2 = 1;
    var sum;
    for (var i = 2; i < n; i++) {
        sum = res1 + res2;
        res1 = res2;
        res2 = sum;
    }
    return sum
}
