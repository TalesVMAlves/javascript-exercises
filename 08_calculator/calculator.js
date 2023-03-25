const add = function(n1, n2) {
	return n1+n2;
};

const subtract = function(n1, n2) {
	return n1-n2;
};

const sum = function(array) {
	let soma = 0;
  for(let i = 0; i < array.length; i++)   soma += array[i];
  return soma;
};

const multiply = function(array) {
  let prod = 1;
  for(let i = 0; i < array.length; i++)   prod = prod * array[i];
  return prod;
};

const power = function(n1, n2) {
	let powered_n = 1;
  for(let i = 0; i < n2; i++)             powered_n = powered_n * n1;
  return powered_n;
};

const factorial = function(number) {
	let fact = 1;
  for(let i = number; i > 0; i--)     fact = fact * i;
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
