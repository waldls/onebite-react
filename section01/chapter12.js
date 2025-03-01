// 1. 함수 표현식
function funcA() {
  console.log("funcA");
}

let varA = funcA; // 함수 자체를 변수에 담음
console.log(varA); // 함수 출력
varA();

let varB = function () {
  // 익명함수. 호이스팅 x
  console.log("funcB");
}; // 값으로써 함수 생성

varB();

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};
console.log(varC(10));
