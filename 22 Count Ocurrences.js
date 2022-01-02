const numbers = [1, 2, 3, 4, 1, 1];

const count = countOcurrences(numbers, 1);

console.log(count);

function countOcurrences(array, searchElement) {
  let count = 0;
  array.forEach((element) => {
    if (element === searchElement) count++;
  });
  return count;
}

const count1 = countOcurrences1(numbers, 1);

console.log(count1);

function countOcurrences1(array, searchElement) {
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}
