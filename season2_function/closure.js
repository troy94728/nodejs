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

console.log(ghost.get_title());
console.log(matrix.get_title());
ghost.set_title("공각기동대");

console.log(ghost.set_title());
console.log(ghost.set_title());

// 박보람 백예린 벤 다비치 펀치 에일리 김나영 민아 마마무
// 별들도 눈감은밥 세
