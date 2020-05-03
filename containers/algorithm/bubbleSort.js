let arr = [4,5,6,3,2,1];

function bubbleSort(arr) {
    let n = arr.length;
    if (n <= 1) return;
    for (let i = 0; i < n; i++) {
        let flag = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let tem = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tem;
                flag = true
            }
        }
        if (!flag) break;
    }
}

bubbleSort(arr);

console.log(20, arr)

// 原地排序 稳定 O(n) O(n^2) O(n^2) /最好/最坏/平均
