{
  /**
 * Task 2: Functions, Optional, and Literal Types
Objective: Create a function with parameters and an optional literal type.

Instructions:

Define a function that takes:
name (string)
age (number)
role (optional, with type 'admin' | 'user' | 'guest')
The function should log these values or perform a basic action.
 */

  const name: string = 'Arjuman Rashedin';
  const age: number = 30;
  type Role = 'admin' | 'user' | 'guest'

  type User = { name: string, age: number;  role: 'admin' | 'user' | 'guest'}
  
  const userInfo: User = {
    name: 'Arjuman Rashedin',
    age: 30,
    role: 'user'
  }

  const greetUser = (userInfo: User): void => {
    const { name, age, role } = userInfo;

    console.log(`This is ${name} with age ${age} and role ${role}`)
    

  }

  greetUser(userInfo)

}
