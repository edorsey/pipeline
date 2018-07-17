const _flow = require("lodash.flow");
const _curry = require("lodash.curry");

function pipeline(value) {
  return {
    flow: flow.bind(this)(value)
  };
}

function flowWrapper(value, flowArray) {
  const fn = _flow(flowArray);
  return fn(value);
}

const flow = _curry(flowWrapper);

module.exports = pipeline;
