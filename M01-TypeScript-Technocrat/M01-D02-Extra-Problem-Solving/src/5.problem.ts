{
  /**
   * Task 5: Function Type
Objective: Write a function that reverses a string.

Instructions:

Write a function reverseString that:
Takes a single string argument.
Returns the string in reverse order.
Example:
Input: "hello"
Output: "olleh"
   */

  const makeReverse = (input: string): void => {
    // const newArr: string[] = input.split('');
    // const newSentence = newArr.reverse().join('');

    const newSentence = input.split('').reverse().join('')
    console.log(newSentence) 
  }

  makeReverse('hello')
  
}