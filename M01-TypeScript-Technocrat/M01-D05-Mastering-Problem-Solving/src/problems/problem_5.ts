// You are given an object called “student” representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called calculateAverageGrade that takes this student object as input and calculates the average grade.

interface Student {
  name: string;
  age: number;
  grades: number[];
}

const student: Student = {
  name: "John Doe",
  age: 18,
  grades: [85, 90, 92, 88, 95]
}

function calculateAverageGrade(student: Student): number { 
  const totalGrades = student.grades.reduce(((acc, grade) => acc + grade), 0);
  const averageGrade = totalGrades / student.grades.length;
  return averageGrade
}

console.log(calculateAverageGrade(student));

