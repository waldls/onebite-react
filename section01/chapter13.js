// 1. 콜백함수
function main(value) {
  //console.log(1);
  //console.log(2);
  value();
  //console.log("end");
}

main(() => {
  // console.log("i am sub");
});

// 2. 콜백함수의 활용
// 중복코드를 방지하고 간결하게 코드 작성 가능
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2); // double
});

repeat(5, (idx) => {
  console.log(idx * 3); // triple
});
