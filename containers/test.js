
function ps(target, key, descriptor) {
    const method = descriptor.value;
    let lessWeight = 10;
    let ret;
    descriptor.value = (...args) => {
        args[0] -= lessWeight;
        ret = method.apply(target, args);
        return ret;
    };
    return descriptor;
}


class Girl {
    constructor(height = 158, weight = 100) {
        this.init(height, weight);
    }

    @ps
    init(height, weight) {
        this.height = height;
        this.weight = weight;
    };
}

let Carrie = new Girl();
console.log(Carrie.weight);
