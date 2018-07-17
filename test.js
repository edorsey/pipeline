const p = require("./");

function fnOne(data) {
  data.one = true;
  return data;
}

function fnTwo(data) {
  data.two = true;
  return data;
}

let result = p({}).flow([fnOne, fnTwo]);

console.log("result", result);
