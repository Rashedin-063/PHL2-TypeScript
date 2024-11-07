{
  /**
   * Task 7: Type Assertion and Narrowing
Objective: Write a function that behaves differently based on the input type.

Instructions:

Create a function that accepts a parameter of type string | number.
The function should:
Return the length if the input is a string.
Return the square if the input is a number.
   */

  const stringOrSquare = (param: string | number): string | number => {
    if (typeof param === 'string') {
      return param.length;
    } else  {
      return param * param;
    }
  } 
  

  const result1 = stringOrSquare('hello world') as string;
  const result12 = stringOrSquare(12) as number;

  console.log(result1)
  console.log(result12)
  
  //
}