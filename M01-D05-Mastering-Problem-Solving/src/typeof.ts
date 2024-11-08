const myString = "Hello, TypeScript!";

type StrType = typeof myString;

// const newStr: StrType = 'greetings, World!';

const myObj = {
  name: "John Doe",
  age: 30,
}

type ObjType = typeof myObj;

const newObj: ObjType = {
  name: "Jane Doe",
  age: 25,
} 



console.log(newObj)

