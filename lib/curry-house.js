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
        return Math.pow(num, num2);
      };
    default:
    break;
  }
  };
}

function random (start) {
  return {
    to : function(end) {
      return (Math.floor(Math.random() * (end - start)) + start);
    },
    toInclude : function(end) {
      return (Math.floor(Math.random() * (end + 1 - start)) + start);
    }
  };
}

function concat(str1){
  return function(str2) {
    return str1 + str2;
  };
}

var prependGreeting = concat('Hello ');

function add (num1) {
  return function(num2){
    return function(num3) {
      return num1 + num2 + num3;
    };
  };
}

var add4and5 = add(4)(5);

function calculator(operator){
  return function(op2, op1) {
    switch(operator) {
      case operators.plus:
      case operators.add:
        return op1 + op2;
      case operators.minus:
      case operators.subtract:
        return op1 - op2;
      case operators.timesSign:
      case operators.multiply:
        return op1 * op2;
      case operators.divideSign:
      case operators.divide:
        return op1 / op2;
      case operators.moduloSign:
      case operators.modulo:
        return op1 % op2;
      case operators.exponentSign:
      case operators.powerOf:
        return Math.pow(op1, op2);
      default:
      break;
    }
  };
}

var add5 = curry(calculator('+'), 5);
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