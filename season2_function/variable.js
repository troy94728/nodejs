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
// i = 5로 바로 사용

var object = {
    b: function () {},
};

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
// cal함수의 첫번째 인자로도 들어갈 수 있다
function decrease(num) {
    return num - 1;
}
console.log(cal(increase, 1));
console.log(cal(decrease, 1));

function cal(mode) {
    var funcs = {
        plus: function (left, right) {
            return left + right;
        },
        minus: function (left, right) {
            return left - right;
        },
    };
    return funcs[mode];
}

console.log(cal("plus")(2, 1)); // 3
console.log(cal("minus")(2, 1)); // 1

var process = [
    function (input) {
        return input + 10;
    },
    function (input) {
        return input * input;
    },
    function (input) {
        return input / 2;
    },
];

var input = 1;
for (var i = 0; i < process.length; i++) {
    input = process[i](input);
}

console.log(input);

var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var sortfunc = function (a, b) {
    return a - b;
};
console.log(numbers.sort(sortfunc));
