const obj = {
  a: "aaa",
  b: "bbb",
  c: "ccc",
  method: function () {
    console.log(this.a);
  },
};
obj.method();
let user = "";

const setUserName = (name) => {
  user = name;
};

document.addEventListener("DOMContentLoaded", setUserName("marumoto"));

console.log(user);

const messages = {
  a: "hello",
  b: "Ciao",
  c: "こんにちは",
};

const array = ["hey", "hello", "how are you", "whats up"];
const text = "hey";
const bool = array.find((message) => {
  return;
});
const testDiv = document.getElementById("test");
//スペースが入らない、、htmlの仕様？明日調べて実装する！
const char = "     a        dd";
testDiv.innerHTML = char;
// const fragment = document.createDocumentFragment();
// const div1 = document.createElement("div");
// const div2 = document.createElement("div");
// const div3 = document.createElement("div");
// array.push(div1, div2, div3);

for (value in obj) {
  obj[value];
}
