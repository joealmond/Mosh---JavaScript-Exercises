// Solution verbose

let width = 480;
let height = 320;
function isLandscape(width, height) {
  if (width > height) return true;
  if (width < height) return false;
  return "square";
}

isLandscape(width, height);

// Solution readable and concise

let width = 480;
let height = 320;
function isLandscape(width, height) {
  if (width === height) return "square";
  return width > height;
}

isLandscape(width, height);
