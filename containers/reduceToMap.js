// 用reduce实现数组的map

Array.prototype.map = function (callback) {
    var arr = this;
    return arr.reduce((ac, cur, i)=>{
        ac.push(callback(cur, i));
        return ac
    },[])
}

var m = [1,2,3,4,5].map(function (v,i) {
    return v * v
});
console.log(14, m)