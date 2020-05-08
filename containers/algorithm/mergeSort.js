// 归并排序
const mergeArr = (left, right) => {
    let temp = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(left.length > leftIndex && right.length > rightIndex) {
        if (left[leftIndex] < right[rightIndex]) {
            temp.push(left[leftIndex]);
            leftIndex++
        } else {
            temp.push(right[rightIndex]);
            rightIndex++
        }
    }

    return temp.concat(left.slice(leftIndex)).concat(right[rightIndex])
};

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    const middle = arr.
}