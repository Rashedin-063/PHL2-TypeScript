{
  //

  type GenericArray<T> = Array<T>

  const numArray: GenericArray<number> = [1, 2, 3, 4, 5];
  const strArray: GenericArray<string> = ["apple", "banana", "cherry"];
  const mixedArray: GenericArray<number | string> = [1, "apple", 2, "banana", 3, "cherry"];
  const boolArray: GenericArray<boolean> = [true, false, true, false, true];

  // console.log(numArray)
  // console.log(strArray)
  // console.log(mixedArray)
  // console.log(boolArray)
  
  // interface with Generic

  interface User<T, S, R> {
    id: T
    name: string;
    age: S;
    email: string;
    isPremium: R;
  }
  

  const person1: User<string, number, boolean> = {
    id: "user123",
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    isPremium: true,
  }

  const person2: User<number, string, string> = {
    id: 12345,
    name: "Jane Smith",
    age: '25', 
    email: "jane.smith@example.com",
    isPremium: 'false',
  }

  console.log(person2)

 


  //
}