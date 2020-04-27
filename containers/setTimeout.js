let a = setTimeout(function () {
    console.log(2)
}, 5000)
a = setTimeout(function () {
    console.log(5)
}, 5000)
clearTimeout(a)