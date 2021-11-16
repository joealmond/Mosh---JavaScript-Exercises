// Solution with  If - Else

let val1 = Number(prompt("Enter value 1:"));
let val2 = Number(prompt("Enter value 2:"));

function maxIfElse(value1, value2) {
  if (value1 > value2) {
    alert(`value 1: ${value1} is greater!`);
    return value1;
  } else if (value1 < value2) {
    alert(`value 2: ${value2} is greater!`);
    return value2;
  } else {
    alert("The numbers are equal!");
  }
}

maxIfElse(val1, val2);

// Solution with Conditional(Ternary) operaor

let val1 = Number(prompt("Enter value 1:"));
let val2 = Number(prompt("Enter value 2:"));

function maxTernary(value1, value2) {
  if (value1 === value2) {
    return `The numbers both: ${value2} , they equal!`;
  } else {
    console.log("The greater number is:");
    return value1 > value2 ? value1 : value2;
  }
}

maxTernary(val1, val2);
