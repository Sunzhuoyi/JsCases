let e = 22;
var a = {
    d: 8,
    c: this.d,
    b: function () {
        return this
    }()
}


console.log( a.b)