// 1. 변수
let age; // 변수 선언

age = 30; // 변수 값 변화

// 2. 상수
const birth = "1997.01.07"; // 초기화 필수. 값 변경 불가

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let na2me;
let _2name; // 이렇게 숫자가 맨 앞에 오지 않도록

// 3-3. 예약어를 사용할 수 없다. (let, if, ...)

// 4. 변수 명명 가이드
let a = 1;
let b = 1;
let c = a - b; // 알아보기 힘든 변수명 비추

let salesCount = 1; // 판매량
let refundCount = 1; // 환불량
let totalSalesCount = salesCount - refundCount; // 총 판매량
