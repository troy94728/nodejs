// 내부함수
function outter() {
    function inner() {
        var title = "coding";
        console.log(title);
    }
    inner();
}

// var inner = function(){

// }

function outter() {
    var title = "conding";
    return function () {
        console.log9 = title;
    };
}
var inner = outter();
inner();

function factory_movie(title) {
    return {
        get_title: function () {
            return title;
        },
        set_title: function (_title) {
            title = _title;
        },
    };
}
ghost = factory_movie("Ghost in the shell");
matrix = factory_movie("matrix");

console.log(ghost.get_title()); //ghost in the shell
console.log(matrix.get_title()); //matrix
ghost.set_title("공각기동대");

console.log(ghost.get_title()); //공각기동대
console.log(matrix.get_title()); //matrix
