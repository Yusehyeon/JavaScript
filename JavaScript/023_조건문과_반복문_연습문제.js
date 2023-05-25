// 8번
// https://codingdojang.com/scode/393?answer_mode=hide
// google 입사문제

// str(list(Range(10001))).count('8') python

// 이 코드는 알고리즘 문제 풀이할 때만 쓰세요.
".".repeat(99).split(".");
".".repeat(99).split(".");
"."
  .repeat(99)
  .split(".")
  .map((v, i) => i + 1);
"."
  .repeat(99)
  .split(".")
  .map((v, i) => i + 1)
  .join("")
  .split("")
  .filter((v) => v === "8");
"."
  .repeat(99)
  .split(".")
  .map((v, i) => i + 1)
  .join("")
  .split("")
  .filter((v) => v === "8").length;

let s = "";
for (let i = 0; i < 101; i++) {
  s += i;
}
s.split("").filter((v) => v === "8").length;

Array(100)
  .fill(0)
  .map((v, i) => i + 1);

Array(100)
  .fill(0)
  .map((v, i) => i + 1) // 안에서 method chaining을 한번 더 할 수 있지만 복잡도만 상승할 것 같아 실행하지 않습니다.
  .join("")
  .split("")
  .filter((v) => v === "8").length;

// 9번
const zip = (a, b) => a.map((v, i) => [v, b[i]]);

let s = [1, 3, 4, 8, 13, 17, 20][(1, 3, 4, 8, 13, 17, 20)][
  (3, 4, 8, 13, 17, 20)
];
//   Python에서 sort를 했을 때 주었던 key function을 여기서 구현 해 볼 것 입니다.

const zip = (a, b) => a.map((v, i) => [v, b[i]]);
let s = [1, 3, 4, 8, 13, 17, 20];
zip(s, s.slice(1)).sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
zip(s, s.slice(1)).sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0];

///////////////////////////////

let s = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < s.length; i++) {
  console.log(s[i]);
}

let s = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < s.length - 1; i++) {
  console.log(s[i + 1] - s[i]);
}

let s = [1, 3, 4, 8, 13, 17, 20];
for (let i = 1; i < s.length; i++) {
  console.log(s[i] - s[i - 1]);
}

// 최솟값을 찾아내려면 먼저 최댓값을 저장해라!
// 최댓값을 찾아내려면 먼저 최솟값을 저장해라!
let s = [1, 3, 4, 8, 13, 17, 20];
let min = Infinity;
let index = 0;
for (let i = 0; i < s.length - 1; i++) {
  if (s[i + 1] - s[i] < min) {
    min = s[i + 1] - s[i];
    index = i;
  }
}
console.log(s[index], s[index + 1]);

// 10번
// 엘리베이터 최대 몸무게 500kg입니다.
// 다음 친구들이 엘리베이터를 탔을 때 최대로 탑승할 수 있는 인원수를 구하세요.
let weight = [60, 50, 55, 60, 77, 88, 56, 67, 89, 45, 55, 45];
let max = 500;
let total = 0;
let count = 0;
for (const i of weight.sort((a, b) => a - b)) {
  total += i;
  if (total >= max) {
    break;
  }
  count += i;
}
console.log(count);
