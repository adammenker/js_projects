function factorial(n) {
    var x = n;
    var t = n
    for (var i = 0; i < t; i++){
        n = n * (x - i);
    }
    n = n/t;
    return n;
}