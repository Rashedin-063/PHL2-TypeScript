{
  //
  class Person  {
    constructor(public name: string, public age: number, address: string) {
    
    }
    sleep(hour: number) {
      console.log(`${this.name} sleeps this ${hour} hours`);
      
    }
}

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address) 
    }
    study(hour: number) {
      console.log(`${this.name} studies ${hour} hours`)
      
    }
  }

  const student1 = new Student('std', 20, 'thikana')

  console.log(student1.sleep(8))
  console.log(student1.study(5))
  
  class Teacher extends Person {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
      super(name, age, address)
      this.designation = designation;
    }
    
    takeClass(cls: number) {
    console.log(`${this.name} sir takes ${cls} classes`)
    
    }
  }

  const myTeacher = new Teacher('Abul', 40, 'ctg', 'professor')
  console.log(myTeacher.sleep(8))
  console.log(myTeacher.takeClass(5))
  
  

  //
}