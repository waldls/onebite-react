console.log(1);

setTimeout(() => {
  // 비동기. Web APIs에 타이머,콜백함수 넘겨줌
  console.log(2);
}, 3000); // 3000 밀리초 대기 했다가 콜백함수 실행.

console.log(3);
