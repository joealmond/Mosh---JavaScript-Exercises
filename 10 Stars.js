showStars(5);

function showStars(rows) {
  let pattern = "";
  let star = "*";

  for (let row = 0; row < rows; row++) {
    pattern = pattern.concat(star);
    console.log(pattern);
  }
}

// Mosh's

showStars1(5);

function showStars1(rows) {
  for (let row = 0; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
