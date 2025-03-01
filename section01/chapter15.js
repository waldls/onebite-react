// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
// key(문자열이나 숫자):value
let person = {
  name: "박유민",
  age: 23,
  hobby: "산책",
  job: "student",
  extra: {},
  10: 20,
  "like cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name); // 박유민 출력

let age = person["age"]; // 쌍따옴표 필수!
console.log(age); // 23 출력

let property = "hobby";
let hobby = person[property];
console.log(hobby); // 산책 출력

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "developer";
person["FavoriteFood"] = "피자";
console.log(person);

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["FavoriteFood"] = "chocolate";
console.log(person);

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["FavoriteFood"];
console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
console.log(result1); // true 출력
let result2 = "cat" in person;
console.log(result2); // false 출력
