let adder = {
    base: 1,
    add: function (a) {
        console.log(this === adder);
        let f = (v) => v + this.base;
        return f(2);
    },
    addThruCall: function (a) {
        console.log(this === adder);
        let f = (v) => v + this.base;
        let b = {
            base: 2
        };
        return f.call(b, 2);
    }
}