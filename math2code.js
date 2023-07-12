function Q(c) {
    var e = 1e-15;
    var x = c;
    var y = (2 * x + c / (x * x)) / 3;
    while (Math.abs(x - y) > e) {
        x = y;
        y = (2 * x + c / (x * x)) / 3;
    }
    return x;
}
console.log(Q(45))
console.log(Math.pow(Q(45), 3))