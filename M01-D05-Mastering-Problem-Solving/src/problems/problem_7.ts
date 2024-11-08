// Create a TypeScript function logString that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.


function logString(param: unknown): void {
  if (typeof param === 'string') {
   console.log(param);
  } else {
    console.error('Error Message');
}
}
function logString2<T extends string>(param: T): void {

  if (typeof param === 'string') {
   console.log(param);
  } else {
    console.error('Error Message');
}
}

logString2<string>('Hello World');
// logString2<number>(123)// Logs: Hello World