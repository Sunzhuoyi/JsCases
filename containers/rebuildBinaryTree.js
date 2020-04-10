// 重建二叉树

function reConstructBinaryTree(pre, vin) {
    if (!pre || vin.length === 0) {
        return;
    };
    

    var index = vin.indexOf(pre[0]);
    var left = vin.slice(0, index);
    var right = vin.slice(index + 1);

    return {
        val: pre[0],
        left: reConstructBinaryTree(pre.slice(1, index + 1 ), left),
        right: reConstructBinaryTree(pre.slice(index + 1), right)
    }

}