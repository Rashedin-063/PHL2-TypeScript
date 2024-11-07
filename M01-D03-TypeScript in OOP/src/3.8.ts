{
  //

  // polymorphism

  class Person {
    getSleep() {
      console.log(`I am sleeping for 8 hours per day`)
      
    }
  }

  class Student extends Person{
    getSleep(): void {
      console.log(`I am sleeping for 7 hours per day`)
      
    }
  }
  class Developer extends Person{
    getSleep(): void {
      console.log(`I am sleeping for 6 hours per day`)
      
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep()
  }

  const normalPerson = new Person();
  const student = new Student();
  const developer = new Developer();

  // console.log(normalPerson.getSleep(), student.getSleep(), developer.getSleep())

  // getSleepingHours(normalPerson)
  // getSleepingHours(student)
  // getSleepingHours(developer)
  


  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * Math.pow(this.radius, 2);
    }

  }


    class Rectangle extends Shape{
      height: number;
      width: number;

      constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
      }

      getArea(): number {
        return this.height * this.width;
      }
  }


  const getShapeArea = (param: Shape) => {
    console.log(param.getArea())
  }
  
  const shape = new Shape();
  const shape2 = new Circle(5);
  const shape3 = new Rectangle(3, 4);

   getShapeArea(shape)
   getShapeArea(shape2)
  getShapeArea(shape3)
  

  //
}