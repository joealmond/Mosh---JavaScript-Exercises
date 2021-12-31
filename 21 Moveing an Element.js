const numbers = [1, 2, 3, 4, 9];

const output = move(numbers, 1, -1);

console.log(output);

function move(array, index, offset) {
  if (array.length - 1 < index + offset || index + offset < 0) {
    console.error("Invalid offset!");
  } else {
    let output = [...array];
    output.splice(index, 1);
    output.splice(index + offset, 0, array[index]);

    return output;
  }
}

const output1 = move1(numbers, 1, -1);

console.log(output1);

function move1(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("Invalid offset!");
    return;
  }
  let output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);

  return output;
}
