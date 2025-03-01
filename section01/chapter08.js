// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // 값이 있는 걸 저장
// console.log(var4); // 10 출력
let var5 = var1 ?? var3;
// console.log(var5); // 20 출력
let var6 = var2 ?? var3; // 이 경우 맨 처음에 적힌 값 반환
// console.log(var6); // 10 출력

// 회원 정보 관리 시스템 개발 시 사용
let userName = "박유민";
let userNickName = "wald";
let displayName = userName ?? userNickName;
// console.log(displayName); // 박유민 출력

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자
let var7 = 1;
var7 = "hello";

let t1 = typeof var7;
// console.log(t1); // string 출력

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 떄의 값을 다르게 반환
let var8 = 10;

// 요ꅬ사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수";
// ? 왼쪽은 조건식, 오른쪽은 콜론 왼쪽에 참일 때 반환값, 오른쪽에 거짓일 때 반환값
// console.log(res); // 짝수 출력
