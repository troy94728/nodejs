var i = 5;
function a() {
    var i = 10;
    b();
}
function b() {
    document.write(i);
}
a();
// 사용될때(X) -> 정의될 때(정적유효범위)

function a() {}
var b = function () {};
c = {
    d: function () {},
};

function cal(func, num) {
    return func(num);
}
function increase(num) {
    return num + 1;
}
function decrease(num) {
    return num - 1;
}
console.log(cal(increase, 1));
console.log(cal(decrease, 1));
