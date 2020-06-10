// 数组必须有序，不存在重复
const binaryFind = (sortedArr, target) => {
    if (sortedArr.length === 0) return -1;
    let low = 0;
    let high = sortedArr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (target === sortedArr[mid]) {
            return mid
        } else if (target < sortedArr[mid]) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return -1
};

const arr = [1, 4, 5, 6, 7, 8, 10, 11, 23, 42, 44, 54, 56, 77, 102];
/*console.log(binaryFind(arr,4))
console.log(binaryFind(arr,44))*/

// 查找第一个等于给定值
const binaryFindFirst = (sortedArr, target) => {
    if (sortedArr.length === 1) return -1;
    let low = 0;
    let high = sortedArr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (target < sortedArr[mid]) {
            high = mid - 1
        } else if (target > sortedArr[mid]) {
            low = mid + 1
        } else {
            if (target > sortedArr[mid - 1] || mid === 0) return mid;
            high = mid - 1;
        }
    }
    return -1
};

const arrFirst = [1, 4,4, 5, 6, 7, 8, 10, 11, 23, 42, 44,44,44, 54, 56, 77, 102];
/*console.log(binaryFindFirst(arrFirst,4))
console.log(binaryFindFirst(arrFirst,44))
console.log(binaryFindFirst(arrFirst,41))*/

// 查找最后一个小于等于给定值的元素
const binaryFindLastSmall = (arr, target) => {
    if (arr.length === 0) return -1;
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (target < arr[mid]) {
            high = mid - 1
        } else {
            if (target < arr[mid + 1] || mid === arr.length - 1) return mid;
            low = mid + 1
        }
    };
    return -1
};

const arrLastSmall = [1, 4,4,4, 5, 42, 44,44,44, 54, 56, 77, 102];
console.log(binaryFindLastSmall(arrLastSmall,4))
console.log(binaryFindLastSmall(arrLastSmall,44))
console.log(binaryFindLastSmall(arrLastSmall,41))
