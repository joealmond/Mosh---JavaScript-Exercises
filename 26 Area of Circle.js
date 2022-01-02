// circle.radius = 2;
// console.log(circle area)

const circle = {
  radius: 2,
  get getRadius() {
    return this.radius;
  },
  set setRadius(value) {
    this.radius = value;
  },
  get area() {
    return this.radius * this.radius * Math.PI;
  },
};
circle.setRadius = 3;
console.log(circle.getRadius);
console.log(circle.area);
