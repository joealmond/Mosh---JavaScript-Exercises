console.log(sum(10));

function sum(limit) {
  const val1 = 3;
  const val2 = 5;
  const quotient1 = Math.floor(limit / val1);
  const quotient2 = Math.floor(limit / val2);
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 1; i <= quotient1; i++) sum1 = val1 * i + sum1;
  for (let k = 1; k <= quotient2; k++) sum2 = val2 * k + sum2;

  return sum1 + sum2;
}

console.log(sum1(10));

function sum1(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

  return sum;
}
