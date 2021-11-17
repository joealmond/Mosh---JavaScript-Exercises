const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};

showProperties(movie);

function showProperties(obj) {
  let count = 0;
  let keyValue;
  for (let key in obj) {
    keyValue = Object.values(obj)[count];
    if (typeof keyValue === "string") {
      console.log(key, keyValue);
    }
    count++;
  }
}

showProperties1(movie);

function showProperties1(obj) {
  for (let key in obj)
    if (typeof obj[key] === "string") console.log(key, obj[key]);
}
