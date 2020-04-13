// 二叉树遍历
// 深度优先遍历 先序遍历 中序遍历 后序遍历
// 广度优先遍历

var nodes = {
    node: 6,
    left: {
        node: 5,
        left: {
            node: 4
        },
        right: {
            node: 3
        }
    },
    right: {
        node: 2,
        right: {
            node: 1
        },
        left: {
            node: 8
        }
    }
};

// 深度优先遍历
// 1 先序遍历(DLR)
// 递归算法

var result = [];
var dfs = function (nodes) {
   if(nodes.node) {
       result.push(nodes.node);
       nodes.left && dfs(nodes.left);
       nodes.right && dfs(nodes.right)
   }
}
dfs(nodes)
console.log(40, result)

// 非递归算法

var dfs2 = function (nodes) {
    var result = [];
    var stack = [];
    stack.push(nodes)
    while (stack.length) {
        var item = stack.pop();
        result.push(item.node);
        item.left && item.push(item.left)
        item.right && item.push(item.right)
    }
    return result
}

// 广度优先
// 递归算法

var result = [];
var queue = [nodes];
var bfs = function (count) {
    count = count || 0;
    console.log(63, queue)
    console.log(64, queue[count], count)
    if (queue[count]) {
        result.push(queue[count].node);
        var left = queue[count].left;
        var right = queue[count].right;
        if (left) {
            queue.push(left)
        }
        if (right) {
            queue.push(right)
        }

        bfs(++count)
    }
}

bfs()

console.log(80, result)