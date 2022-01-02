const numbers = [1, 2, 3, 4, 1, 1];

try {
  const count = countOcurrences(false, 1);

  console.log(count);
} catch (e) {
  alert(e);
}

function countOcurrences(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error("The value must be type of array!");
  }
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}
