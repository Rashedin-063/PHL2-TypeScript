// basic data types

const myString: string = 'Hello, TypeScript!';
const myNumber: number = 10;
const myBoolean: boolean = true;
const nullVar: null | undefined = null;
const undefinedVar: undefined | null = undefined;


// arrays
const myArray: number[] = [1, 2, 3];
const strArray: string[] = ['apple', 'banana', 'cherry'];
const boolArray: boolean[] = [true, false, true];
const mixedArray: (string | number | boolean)[] = ['apple', 1, true];

// tuples
const myTuple: [string, number] = ['Hello', 10];
const myTuple2: [number, boolean] = [23, true];

/**
 * in tuple serial of the array elements are fixed, which isn't in case of arrays.
 */

// objects
const myObj: { name: string, age: number } = { name: 'John', age: 30 };

type Person = { name: string, age: number };

const randomPerson: Person = { name: 'Alice', age: 25 };

interface Laptop {
  id: string;
  model: string;
  manufacturer: string;
  price: number;
  releasedYear: number;
}

const newLaptop: Laptop = {
  id: 'ABC123',
  model: 'XPS 15',
  manufacturer: 'Dell',
  price: 1299.99,
  releasedYear: 2020,
}

// functions
function myFunc(num1: number, num2: number): number {
  return num1 + num2;
}


const strFn = (param: string): string => {
return param.toUpperCase()
}

const mixedFn = (param1: string, param2: number): string | number => {
  if (typeof param2 === 'number' && typeof param1 === 'number') {
    return param1 + param2;
  } else {
    return param1.toString().concat(param2.toString());
  }
}


const voidFn = (): void => { 

  console.log('This function does not return anything');
  
}

function voidFn2(): void{
  console.log('This function also does not return anything');
}