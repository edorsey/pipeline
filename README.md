# Pipeline

This module implements a pipeline-like pattern in JavaScript:

```js
const p = require("pipeline");

function functionOne(data) {
  data.one = true;
  return data;
}

function functionTwo(data) {
  data.two = true;
  return data;
}

let result = p({}).flow([
    functionOne, 
    functionTwo
]);

console.log("result", result);

//> result { one: true, two: true }
```
