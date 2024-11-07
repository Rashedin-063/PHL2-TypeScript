/**
 * ### Task 14: Asynchronous TypeScript and Type Aliases

**Objective**: Simulate an asynchronous operation with TypeScript.

**Instructions**:

- Write an asynchronous function that:
  - Simulates fetching user data (containing `name` and `age`).
  - Returns the data after a short delay.
 */

type UserType = {
  name: string;
  email: string
  }

const user: UserType = {
  name: 'Rashedin Islam',
  email: 'rashedinislam.06@gmail.com'
}

const createPromise = (): Promise<UserType> => {
  return new Promise<UserType>((resolve, reject) => {
    setTimeout(() => {
      if (user) {
        resolve(user);
      } else {
        reject('no data');
      }
    }, 2000);
  })
}

const displayData = async (): Promise<void> => {
  const result = await createPromise();
  console.log(result)
  
}

displayData()

// const createPromise = () : Promise<string> => {
//     return new Promise<string>((resolve, reject) => {
//       const data = 'something';

//       if (data) {
//          resolve(data)
//       } else {
//         reject('failed to load data')
//        }
//   })
// }

//   // calling create promise function
  
//   const showData = async (): Promise<void> => {
//     const res = await createPromise();

//     console.log(res)
    
//   }

//   showData()

//   interface Todo {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
// }
  
// const getUsers = async (): Promise<Todo> => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//   const data = await res.json()
//   console.log(data)
  
//   return data;
// }

// getUsers()

  
