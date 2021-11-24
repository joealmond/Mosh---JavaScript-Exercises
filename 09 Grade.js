const marks = [80, 80, 50, 50, 90, 100, 100, 100];

// 0-59:   F
// 60-69:  D
// 70-79:  C
// 80-89:  B
// 90-100: A

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  let sum = marks[0];
  for (let i = 1; i < marks.length; i++) {
    sum = sum + marks[i];
  }
  let averageMark = sum / marks.length;
  if (averageMark <= 100 && averageMark >= 90) {
    return "A";
  } else if (averageMark <= 89 && averageMark >= 80) {
    return "B";
  } else if (averageMark <= 79 && averageMark >= 70) {
    return "C";
  } else if (averageMark <= 69 && averageMark >= 60) {
    return "D";
  } else return "F";
}

// better solution by Mosh

console.log(calculateGrade1(marks));

function calculateAverage(array) {
  let sum = 0;
  for (const item of array) {
    sum += item;
  }
  return sum / marks.length;
}

function calculateGrade1(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}
