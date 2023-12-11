console.log(this); // global??
console.log(this === module.exports)

// this의 차이
// 1. 함수마다 this가 새로 생김
// 2. 화살표함수 쓰면 부모의 this 물려받음
// 3. 전역변수의 this만 module.exports가 됨
// 따라서 module.exports.odd 랑 this.odd가 같음

function a() {
  console.log(this === global);
}

a();