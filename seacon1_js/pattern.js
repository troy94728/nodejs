var pattern = /a/;
//var pattern = new RegExp("a");
var str = "abcedf";

pattern.exec("abced"); //[a];
var pattern = /a./;
pattern.exec("abced"); //[ab];
pattern.exec("bcedf"); //null

pattern.test("abced"); //true
pattern.test("bced"); //false
//정보안에 pattern이 존재하면 true

str.match(pattern); //["a"];
var str = "bcedf";
str.match(pattern); //null

var str = "abcedf";
str.replace(pattern, "A"); //"Abcdef";

//i를 붙이면 대소문자를 구분하지 않는다
var xi = /a/;
"Abcdef".match(xi); //null
var oi = /a/i;
"Abcdef".match(oi); //["A"]
// 소문자a를 쳐도 대문자A로도 찾게 됨(대소문자 구별x)

var xg = /a/;
"abceda".match(xg); //["a"]
var og = /a/;
"abcdea".match(og); //["a","a"];
// 문자열의 포함되어 있는 a를 전부다 배열에 담아서 출력

var ig = /a/gi;
"AabcdAa".match(ig); //["A","a","A","a"];
// a를 찾는데 대소문자 구별하지 않고 모두 찾음(i+g의 기능)

// JS 정규표현식 찾아서 공부
var pattern = / (\w+) \s(\w+)/;
var str = "coding evertbody";
var result = str.replace(pattern, "$2, $1");
console.log(result);
