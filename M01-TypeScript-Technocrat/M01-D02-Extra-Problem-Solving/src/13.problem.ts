/**
 * 
### Task 13: Generics with Functions and Interfaces

**Objective**: Use generics to handle different types.

**Instructions**:

- Create a generic function that:
  - Accepts an array of any type.
  - Returns a new array with duplicate values removed.

---
 */

function genericFn<T>(param: T[]) {

  // const newArr = [...new Set(param)]
  // console.log(newArr);
  // return newArr

const newArr = [...new Set(param)]
  
 
  // const newArr: T[] = [];

  // for (let i=0; i < param.length; i++) {
  //   if (!newArr.includes(param[i])) {
  //     newArr.push(param[i])
  //   }
  // }

  // for (let value of param) {
  //   if (!newArr.includes(param[value])) {
  //     newArr.push(param[value])
  //   }
  // }

  return newArr
  
}

const res = genericFn([1, 2, 3, 1, 3, 4, 3, 5, 4, 5, 3, 2, 3, 1]);

console.log(res)
