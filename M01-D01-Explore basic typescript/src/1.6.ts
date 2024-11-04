// learning function
// normal function
// arrow function


function addTwo(num1:number, num2:number): number {
  return num1 + num2
}


addTwo(2, 3)


function sayHello(name:string): void {
  console.log(`Hello ${name}`)
  
}

sayHello('Ru')

const addArrow = (num1: number = 10, num2: number = 10): number => num1 + num2;



// object --> function --> method

const poorUser = {
  name: "Rashedin",
  balance: 0,

  addBalance(balance: number):string {
    return `My new balance is : ${this.balance + balance}`
  }
}


const arr: number[] = [1, 3, 5]

const newArray: number[] = arr.map((num:number): number => num*num)



