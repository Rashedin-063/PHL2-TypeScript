// Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.

// function repeatString(inputString: string, repeatCount: number): string {
//   return inputString.repeat(repeatCount);
// }

function repeatString(string: string, count: number): string {
return string.repeat(count);
}

console.log(repeatString("Hello", 3)); // Output: "HelloHelloHello"
