const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
};

const partition = (arr, pivot, left, right) => {
    const pivotVal = arr[pivot];
    // 左边排序的最大索引的下一位
    let startIndex = left;
    for (let i=left; i<right; i++) {
        if (arr[i] < pivotVal) {
            // 前移一位，假设左边的为排序好的，每次发现可以放左边的，替换startIndex位置
            swap(arr,i,startIndex);
            startIndex++;
        }
    }
    // 把pivot放中间
    swap(arr, pivot, startIndex);
    return startIndex
};

const quickSort = (arr, left, right) => {
    if (left < right) {
        let pivot = right;
        let partitionIndex = partition(arr, pivot, left, right)
        quickSort(arr, left, partitionIndex - 1 < left ? left : partitionIndex - 1);
        quickSort(arr, partitionIndex + 1 > right ? right: partitionIndex + 1, right)
    }
};

const testArr = []
let i = 0
while (i < 10) {
    testArr.push(Math.floor(Math.random() * 1000))
    i++
}
console.log('unsort', testArr)
quickSort(testArr, 0, testArr.length - 1);
console.log('sort', testArr)