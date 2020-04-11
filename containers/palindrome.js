// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。并且我们假设所输入的数字为整数。


// method 1
function isPalindrome(x) {
    let inToStr = x.toString();
    let beforeArr = inToStr.split("")
    let inTo = JSON.parse(JSON.stringify(beforeArr)).reverse();
    return inTo.toString() == beforeArr.toString() ? true : false
}

let test = isPalindrome(121)
console.log(10, test);

// method 2
function isPalindrome2(x) {
    let inToStr = x.toString();
    let result = true;
    for (var i = 0; i < inToStr.length/2; i++) {
        if (inToStr[i] !== inToStr[inToStr.length - i - 1]) {
            result = false;
        }
    }
    return result
}


let test2 = isPalindrome2(12123)
console.log(29, test2);