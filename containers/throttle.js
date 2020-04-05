// 节流的几种实现

// 时间戳
var throttleTime = function (func, delay) {
    var pre = Date.now();
    return function () {
        var context = this;
        var args = arguments;
        var now = Date.now();
        if (now - pre > delay) {
            func.apply(context, args)
        }
        pre = Date.now()
    }
}

// 定时器
var throttleSetTimeout = function (func, delay) {
    var timer = null;
    return function () {
        var context = this;
        var args = arguments;
        if (!timer) {
            timer = setTimeout(function () {
                func.apply(context, args);
                timer = null
            }, delay)
        }
    }
}

// 定时器 + 时间戳 当第一次触发时马上执行事件处理函数最后一次触发事件后也还会执行一次事件处理函数

var throttleBoth = function (func, delay) {
    var timer = null;
    var startTime = Date.now();
    console.log(54)
    return function () {
        var curTime = Date.now();
        var remaining = delay - (curTime - startTime);
        var context = this;
        var args = arguments;
        clearTimeout(timer);
        console.log("remaining", remaining);
        // 非页面加载的第一次触发，比如加载一段时间后首次事件得到监听
        if (remaining <= 0) {
            func.apply(context, args);
            startTime = Date.now()
            console.log(63)
        } else {
            timer = setTimeout(func,remaining)
            console.log(66)
        }
    }
}

function handle() {
    console.log(Math.random())
}

window.addEventListener('scroll', throttleBoth(handle, 1000))