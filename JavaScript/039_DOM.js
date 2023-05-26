document.head;
document.body;
document.body.childNodes;
document.body.childNodes[1];
document.body.childNodes[1].tagName;
document.body.childNodes[1].innerText;
document.body.childNodes[1].document.body.childNodes[2]; //점만 찍어서 얼마나 많은 애트리뷰트가 있는지 확인해보세요.
document.body.childNodes[2].data;

// 해당하는 Id를 가진 요소에 접근하기
document.getElementById();

// 해당하는 모든 요소에 접근하기
document.getElementsByTagName();

// 해당하는 클래스를 가진 모든 요소에 접근하기
document.getElementsByClassName();

// css 선택자로 단일 요소에 접근하기
document.querySelector("selector");

// css 선택자로 여러 요소에 접근하기
document.querySelectorAll("selector");

const btnRed = document.querySelector("button");
const title = document.querySelector("#one");

btnRed.addEventListener("click", () => {
  title.classList.toggle("red");
});

const sectionTitle = document.createElement('h2')
sectionTitle.innerText = 'hello'

const body = document.querySelector("body");
const myUl = document.createElement("ul");

	for(let i=0; i < 5; i++){
		const myLi = document.createElement('li');
        myLi.innerText = 'hello!'
		myUl.appendChild(myLi);
	}
    
    body.appendChild(myUl)

​//////////

const body = document.querySelector("body");
const myimg = document.createElement('img')
// const idAttr = target.getAttribute('id');
myimg.setAttribute("src", "https://img.wendybook.com/image_detail/img159/159599_01.jpg");
body.append(myimg)

//////////

const btn = document.createElement('button')
btn.innerText = '눌럿!'
const body = document.querySelector("body")
body.append(btn)

btn.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(this);
});
btn.addEventListener('click',function (event) {
    console.log(event);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(this);
});


