// 동기 : 순차적 | 비동기 : 비순차적
// callback 지옥 : callback-function이 계속 쌓이는 것

/////////////////////////////////////

let p = new Promise(function (resolve, reject) {
  resolve("hello world");
})
  .then((메시지) => {
    alert(메시지);
    return 메시지.split(" ")[0];
  })
  .then((메시지) => {
    alert(메시지);
    return 메시지[0];
  })
  .then((메시지) => {
    alert(메시지);
  });

/////////////////////////////////////

let p = new Promise(function (resolve, reject) {
  // resolve('hello world');
  reject("hello world");
})
  .then((메시지) => {
    alert(메시지);
    return 메시지.split(" ")[0];
  })
  .then((메시지) => {
    alert(메시지);
    return 메시지[0];
  })
  .then((메시지) => {
    alert(메시지);
  })
  .catch((메시지) => {
    alert("catch 실행!! :" + 메시지);
  });

////////////////////////////////////

fetch("http://testtttt.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    // console.log(error)
    alert("서버가 멈췄습니다. 최대한 빠르게 복구하도록 하겠습니다.");
    document.write("서버가 멈췄습니다. 최대한 빠르게 복구하도록 하겠습니다.");
  });
