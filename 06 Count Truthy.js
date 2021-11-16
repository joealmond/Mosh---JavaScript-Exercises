const array = [0, 0, null, 2, 3, 5];

console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  array.forEach((element) => {
    let i = 0;
    if (element) {
      count++;
    }
  });
  return count;
}

console.log(countTruthy1(array));

function countTruthy1(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}
