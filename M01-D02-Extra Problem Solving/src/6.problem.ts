{
  /**
   * Task 6: Spread and Rest Operators, Destructuring
Objective: Write a function that uses the rest operator for variable-length arguments.

Instructions:

Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.
   */

  const makeSum = (...nums: number[]): number => {
    
return nums.reduce(((curr, sum) => curr + sum),0)
  }

  console.log(makeSum(1, 2, 3, 4, 5));
  
  //
}


