// 해당하는 Id를 가진 요소에 접근하기
document.getElementById();

// css 선택자로 단일 요소에 접근하기
document.querySelector("selector");

// 이벤트의 타입에는 click, mouseover, mouseout, wheel 등 다양한 이벤트를 감지합니다.
// listener 함수의 인수에는 이벤트에 대한 정보가 담겨있습니다.
const myBtn = document.querySelector("button");
myBtn.addEventListener("click", function () {
  console.log("hello world");
});

document.createElement(target);

element.appendChild(target);
