function sqrt(c) {
    if (c < 0) {
        return -1;
    }

    var e = 1e-15;
    var x = c;
    var y = (x + c / x) / 2;
    while (Math.abs(x - y) > e) {
        x = y;
        y = (x + c / x) / 2;
    }
    return x;
}
console.log(sqrt(45))