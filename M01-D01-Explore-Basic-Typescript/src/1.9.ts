{
  //


  //type alias
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };



  const student1: Student = {
    name: "Rashedin Islam",
    age: 29,
    gender: 'Male',
    contactNo: 'dfdlfjdljf',
    address: 'gb'
  }

  const student2: Student = {
    name: "Laila Arjuman",
    age: 30,
    gender: 'Female',
    contactNo: '01252221',
    address: 'gb'
  }


  type UserName = string;
  type IsAdmin = boolean;
  type AddFn = (num1: number, num2: number) => number


  const user1: UserName = 'hello';
  const user2: UserName = '45';

  const user3: IsAdmin = true

  const add: AddFn = (num1, num2) => {
    return num1 + num2
  }


  //
}