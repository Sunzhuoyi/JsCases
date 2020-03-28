// 冒泡排序
let arr = [];

for (let i = 0; i < 100; i++) {
    let random = Math.random().toFixed(3) * 1000;
    arr.push(random);
}

console.log(arr);

let length = arr.length;

for (let i = 0; i < length; ++i) {
    let flag = false;
    for (let j = 0; j < length - i - 1; ++j) {
        if (arr[j] > arr[j + 1]) {
            let tmp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = tmp;
            flag = true;
        }
    }
    if (!flag) {
        break;
    };
}

console.log(28, arr);

// 插入排序
let newArr = [3,1,7,9];

for (let i = 0; i < length; ++i) {
    let value = newArr[i];
    let j = i - 1;
    for (; j >= 0; --j) {
        if (newArr[j] > value) {
            newArr[j + 1] = newArr[j];
        } else {
            break;
        }
    }
    newArr[j + 1] = value;
}
console.log(newArr);