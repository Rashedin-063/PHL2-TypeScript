/**
 * ### Task 16: Utility Types and Keyof Constraints

**Objective**: Access object properties dynamically using `keyof`.

**Instructions**:

- Create a function that:
  - Takes an object and a key.
  - Returns the property value from the object based on the provided key.
  - Use `keyof` to constrain the key to valid properties of the object.
 */

{

  interface User {
    name: string;
    email: string
  }

  const user: User = {
    name: 'R',
    email: 'r@gamil.com'
  }

  // const getName = <X, Y extends keyof X> (obj: X, key: Y) => {
  //   return obj[key]
  // }

  // console.log(getName(user, 'name'))

  const getValue =<T, K extends keyof T> (obj: T, key: K): T[K] => {
return obj[key]
  }
  
  console.log(getValue(user, 'email'))
  

  }