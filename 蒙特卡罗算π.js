c = 0
kk = 0
while (c < 10000) {
    x = Math.random()
    y = Math.random()
        //console.log(x)
        //console.log(y)
    z = x * x + y * y
        //console.log(z)
    i = 0
    j = 0
    if (z < 1) {
        //console.log("在圆内")
        i = i + 1
    } else {
        //console.log("不在圆内")
        j = j + 1
    }
    k = i / (i + j) * 4
        //console.log(k)
    c = c + 1
    kk = kk + k
}
kkk = kk / c
console.log(kkk)