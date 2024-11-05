{
  //

  // generic type

  // type newArr = number[]
  // interface newArr2 {
  //   [index: number] : number
  // }

  // type thirdArr = newArr & newArr2;
  // interface arr4 extends newArr {

  // }
  
  // const rollNumber: number[] = [3, 4, 5, 6];
  // const mentors: string[] = ['xx', 'dd', 'dfdf'];
  // const boolArray: boolean[] = [true, false, true];


  type GenericArr<T> = Array<T>

  
  const rollNumber: GenericArr<number> = [3, 4, 5, 6];
  const mentors: GenericArr<string> = ['xx', 'dd', 'dfdf'];
  const boolArray: GenericArr<boolean> = [true, false, true];

  // const rollNumber: Array<number> = [3, 4, 5, 6];
  // const mentors: Array<string> = ['xx', 'dd', 'dfdf'];
  // const boolArray: Array<boolean> = [true, false, true];

 type NewObj = {
    name: string;
    age: number;
  } 

  const user: GenericArr<NewObj> = [
    {
      name: 'Rashedin',
      age: 29
    },
    {
      name: 'Sraboni',
      age: 30
    }
  ]
  

  // generic tuple

  type GenericTuple<X, Y> = [X, Y]

  const couple: GenericTuple<string, string> = ['Mr. X', 'Mrs. X']



  const userWithId: GenericTuple<number, { name: string;  email: string}> = [1234, {
    name: 'hello',
    email: 'h@gmail.com'
  }]






  //
}