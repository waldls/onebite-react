// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;
console.log(one, two, three, four); // 1 2 3 4 출력

// 2. 객체의 구조 분해 할당
let person = {
  name: "박유민",
  age: 23,
  hobby: "산책",
};

let { name, age: myAge, hobby, extra = "hello" } = person;
console.log(name, myAge, hobby, extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log({ name, age, hobby, extra });
};

func(person);
