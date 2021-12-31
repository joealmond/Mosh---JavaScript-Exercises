const numbers = [1, 2, 3, 4];

// console.log(numbers.includes(2));

function includes(array, searchElement) {
  for (let i = 0; i < array.length; i++) {
    if (searchElement === array[i]) return true;
  }
  return false;
}
console.log(includes(numbers, 5));

function includesWithObject(array, searchElement) {
  const isIncudes = { state: false };
  for (let i = 0; i < array.length; i++) {
    if (searchElement === array[i]) isIncudes.state = true;
  }
  return isIncudes.state;
}
