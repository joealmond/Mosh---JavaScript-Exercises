const numbers = [1, 2, 3, 4, 5, 6];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
  if (array.length === 0) return undefined;
  let max = array[0];
  for (let index = 1; index < array.length; index++) {
    const element = array[index];
    if (element > max) {
      max = element;
    }
  }
  return max;
}

const max1 = getMax1(numbers);

console.log(max1);

function getMax1(array) {
  if (array.length === 0) return undefined;
  return array.reduce((accumulator, current) => {
    if (accumulator < current) {
      return current;
    } else return accumulator;
  });
}

const max2 = getMax2(numbers);

console.log(max2);

function getMax2(array) {
  if (array.length === 0) return undefined;
  return array.reduce((a, b) => (a > b ? a : b));
}
