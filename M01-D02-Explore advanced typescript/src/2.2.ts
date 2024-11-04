{
  //

  type User1 = {
    name: string;
    age: number;
  }

  type UserWithRole1 = User1 & { role: string };

   const user1: UserWithRole1 = {
     name: 'Rashedin',
     age: 29,
     role: 'admin'
   };


  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRole2 extends User2 {
    role?: string;
  }

  type NewUser = User2 & { isMarried: boolean }
  
  const newUser: NewUser = {
    name: 'abul',
    age: 23,
    isMarried: false
  }

  interface NewUser2 extends User1 {
    isMarried: boolean
  }

  const newUser2: NewUser2 = {
    name: 'babul',
    age: 32,
    isMarried: true
  }

  type RollNumber = number

  /**
   * primitive --> must type alias
   * reference --> type alias or interface
   */

   const user2: UserWithRole2 = {
     name: 'Rashedin',
     age: 29,
  };

  // js --> object, array-> object function --> object
  
  type Roll1 = number[];

  const rollNumber1 = [1, 2, 3, 4];
 
  // interface Roll2 {
  //   [index: number] : number
  // }

  interface Roll2 {
    [index: number] : number
  }
  

  /**
   * type --> type = type & {} , type = interface & {}
   * interface --> interface extends interface, interface extends type
   */


  type Add = (num1: number, num2: number) => number;
  
  interface Addition {
    (num1: number, num2: number) : number
  }
  

  // const add: Add = (num1, num2) => num1 + num2;
  const add: Add = (num1, num2) => num1 + num2;









  //
}