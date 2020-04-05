// 防抖 一系列连续动作只有最后一个会执行
function debounce(fn, wait) {
    var timeout = null;
    return function () {
        if (timeout !== null) {
           clearTimeout(timeout)
        }
        timeout = setTimeout(fn, wait)
    }
}

function handle() {
    console.log(Math.random())
}
// IE9 以下 attachEvent
window.addEventListener('scroll', debounce(handle, 1000))
