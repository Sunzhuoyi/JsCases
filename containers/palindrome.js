// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。并且我们假设所输入的数字为整数。

function isPalindrome(x) {
    let inToStr = x.toString();
    let beforeArr = inToStr.split("")
    let inTo = JSON.parse(JSON.stringify(beforeArr)).reverse();
    return inTo.toString() == beforeArr.toString() ? true : false
}

let test = isPalindrome(121)
console.log(10, test);