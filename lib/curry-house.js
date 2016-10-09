var curry = require('./curry');

var operators = {
  add: 'add',
  plus: '+',
  subtract: 'subtract',
  minus: '-',
  multiply: 'multiply',
  timesSign: '*',
  divide: 'divide',
  divideSign: '/',
  modulo: 'modulo',
  moduloSign: '%',
  powerOf: 'power of',
  exponentSign: '^'
};

function calculate (num) {
  return function(operator) {
    switch(operator) {
    case operators.plus:
    case operators.add:
      return function(num2) {
        return num + num2;
      };
    case operators.minus:
    case operators.subtract:
      return function(num2) {
        return num - num2;
      };
    case operators.timesSign:
    case operators.multiply:
      return function(num2) {
        return num * num2;
      };
    case operators.divideSign:
    case operators.divide:
      return function(num2) {
        return num / num2;
      };
    case operators.moduloSign:
    case operators.modulo:
      return function(num2) {
        return num % num2;
      };
    case operators.exponentSign:
    case operators.powerOf:
      return function(num2) {
        return num ^ num2;
      };
    default:
    break;
  }
  };
}

function chooseOperator(op) {

}

function random () {

}

function concat(){

}

var prependGreeting = null;

function add () {

}

var add4and5 = null;

function calculator(){

}

var add5 = null;
var sub5 = null;
var multiply5 = null;
var divide5 = null;
var mod5 = null;
var pow3 = null;

module.exports = {
  calculate : calculate,
  random : random,
  prependGreeting : prependGreeting,
  add4and5 : add4and5,
  calculator : calculator,
  add5 : add5,
  sub5 : sub5,
  multiply5 : multiply5,
  divide5 : divide5,
  mod5 : mod5,
  pow3 : pow3
};