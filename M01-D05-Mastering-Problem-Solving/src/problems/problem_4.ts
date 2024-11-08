// Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.

// function reverseArray<T>(param: T[]) {
//   return param.reverse();
// }

// console.log(reverseArray<number>([1, 2, 3, 4, 5]));


function reverseArray<T>(param: T[]): T[] { 
  return param.reverse()
}

console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]

