// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

// 덧셈, 뺄셈 연산자보다 곱셈,나눗셈,모듈러 연산자가 우선순위 높음
// 덧셈부터 하고 싶다면 소괄호 사용
let num6 = 1 + 2 * 10;
// console.log(num6); // 21 출력

// 3. 복합 대입 연산자
// 모든 산술 연산자와 대입 연산자
let num7 = 10;
num7 += 20;
num -= 20;
num *= 20;
num /= 20;
num %= 20;

// 4. 증감 연산자
let num8 = 10;
++num8;
num8++;
/*console.log(++num8); // 11 출력. 전위 연산
console.log(num8++); // 11 출력. 후위 연산
console.log(num8); // 12 출력. 후위 연산이 반영된 결과

console.log(--num8); // 11 출력. 전위 연산
console.log(num8--); // 11 출력. 후위 연산*/

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;
// console.log(or, and, not); // true false false 출력

// 6. 비교 연산자
let comp1 = 1 === 2; // 동등 비교 연산자 (자료형까지 비교)
let comp2 = 1 !== 2; // 비동등 비교 연산자
// console.log(comp1, comp2); // false true 출력

let comp3 = 2 > 1; // 대소 비교 연산자
let comp4 = 2 < 1;
// console.log(comp3, comp4); // true false 출력

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
// console.log(comp5, comp6); // true true 출력
