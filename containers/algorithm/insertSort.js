let arr = [4,5,6,3,2,1];

function insertSort(arr) {
    let n = arr.length;
    if (n <= 1) return;
    for (let i = 0; i < n; i++) {
        let value = arr[i];
        let j = i - 1;
        for (; j >= 0; j--) {
            if (arr[j] > value) {
                arr[j + 1] = arr[j] //数据移动
            } else {
                break;
            }
        }
        arr[j + 1] = value
    }
}
insertSort(arr);
console.log(19, arr)

// 原地排序 稳定 O(n) O(n^2) O(n^2) /最好/最坏/平均

// 插入排序比冒泡排序更受欢迎是因为数据交换写的代码更少