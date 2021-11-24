showPrimes(20);

function showPrimes(limit) {
  let isPrime = true;
  for (let number = 2; number < limit; number++) {
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
      }
    }
    if (isPrime === true) {
      console.log(number);
    }
    isPrime = true;
  }
}

// Mosh's
showPrimes1(20);

function showPrimes1(limit) {
  for (let number = 2; number < limit; number++) {
    if (isPrime(number)) console.log(number);
  }
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;
  return true;
}
