// 1. Number Type
// 존재할 수 있는 모든 숫자 값 표현
let num1 = 27; // 정수
let num2 = 1.5; // 실수
let num3 = -20; // 음수

// 기본적인 사칙 연산 모두 지원
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); // 모듈러 연산

let inf = Infinity; // 양의 무한대
let mInf = -Infinity; // 음의 무한대
let nan = NaN; // 수치연산이 실패했을 때의 결과

// 2. String Type
let myName = "박유민"; // 문자열은 따옴표 필수
let myLocation = "홍대";
let introduce = myName + myLocation; // 문자열 덧셈 가능
// 템플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`; // 동적

// 3. Boolean Type
// 상태를 의미할 때 주로 사용
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null; // 명시적으로 할당해줘야 함

// 5. Undefined Type
let none; // 자동으로 undefined
console.log(none);
