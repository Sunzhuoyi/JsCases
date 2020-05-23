// 借用另一个数组来记录有多少数比当前数字小

const countingSort = array => {
    if (array.length <= 1) return;
    const max = findMaxValue(array);
    const counts = new Array(max + 1)

    array.forEach(e => {
        if (!counts[e]) {
            counts[e] = 0;
        }
        // 因为为一个时置0了，所以下面统一处理为+1
        counts[e]++
    });

    let sortedIndex = 0;
    counts.forEach((count, i) => {
        while (count > 0) {
            array[sortedIndex] = i;
            sortedIndex++
            count--
        }
    })
    return array;
}

function findMaxValue(array) {
    let max = array[0];
    for (let i = 0; i<array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max;
}

let test = [6,6,4,8,1];
console.log(countingSort(test))