const MAX_LEVEL = 16;

class Node {
    constructor(
        {
            data = -1,
            maxLevel = 0,
            refer = new Array(MAX_LEVEL)
        } = {}
    ) {
        this.data = data;
        this.maxLevel = maxLevel;
        this.refer = refer
    }
}