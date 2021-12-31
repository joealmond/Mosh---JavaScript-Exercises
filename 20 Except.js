const numbers = [1, 2, 3, 4, 1, 1, 9, 9];

const output = except(numbers, [1, 9, 2]);

console.log(output);

function except(array, excludeArray) {
  let i = 0;
  let k = 0;
  while (k < excludeArray.length) {
    while (i < array.length) {
      if (array[i] === excludeArray[k]) {
        array.splice(i, 1);
      } else {
        ++i;
      }
    }
    i = 0;
    ++k;
  }
  return array;
}

const output1 = except1(numbers, [1, 9]);

console.log(output1);

function except1(array, excludeArray) {
  let output = [];
  array.forEach((i) => {
    if (!excludeArray.includes(i)) {
      output.push(i);
    }
  });

  return output;
}
