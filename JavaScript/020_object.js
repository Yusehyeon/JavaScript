const babaYaga = {
  name: "John Wick",
  age: 53,
  from: "벨라루스",
  askingHim: function () {
    console.log("Yeah, I'm thinking I'm back!");
  },
};
// 최신 문법 이용
const babayaga = {
  name: "John Wick",
  age: 53,
  from: "벨라루스",
  askingHim() {
    console.log("Yeah, I'm thinking I'm back!");
  },
};

const a = "hello";
const b = "world";
const data = {
  a,
  b,
  c: "!!",
  d: [10, 20, 30],
};

// CRUD(Create, Read, Update, Delete)
// Data append
const human = {
  name: "hojun",
  age: 98,
  from: "벨라루스",
};
human.height = 250;
human["height"] = 250;
human;

const human2 = {
  ...human,
  age: 10,
};
human2;
