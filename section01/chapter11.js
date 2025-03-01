// 함수
function greeting() {
  console.log("안녕하세요!");
}

console.log("호출 전");
greeting();
console.log("호출 후");

let area1 = getArea(10, 20); // 인수
console.log(area1);
let area2 = getArea(30, 20);
let area3 = getArea(120, 200);

// 호이스팅
// -> 끌어올리다 라는 뜻
// 함수 호출보다 함수 선언이 아래에 있어도 정상적 실행

function getArea(width, height) {
  function another() {
    console.log("another");
  } // 중첩 함수
  another();

  let area = width * height;
  return area; // 반환값
  console.log("hello"); // 실행 안 됨!
}
