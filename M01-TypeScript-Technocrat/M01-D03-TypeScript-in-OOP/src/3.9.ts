{
  //
  // abstraction
  
  interface Vehicle1{
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // const car1: Vehicle1 = {
  //   startEngine: () => console.log('Car engine started'),
  //   stopEngine: () => console.log('Car engine stopped'),
  //   move: () => console.log('Car is moving')
  // }

  // car1.startEngine()  

  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log('Car engine started')
  
    }
    
    stopEngine(): void {
      console.log('Car engine stopped')
      
    }

    move(): void {
      console.log('Car is moving')
    }

    test(): void {
      console.log('I am testing')
      
    };
  }

  const car1 = new Car1();

  // car1.startEngine()
  // car1.move()

// idea
  abstract class Vehicle2 {
   abstract startEngine(): void;
  abstract  stopEngine(): void;
    abstract move(): void;
    
    test() {
      console.log('Vehicle2 is testing')
      
    }
  }

  class Car2 extends Vehicle2 {
    startEngine(): void {
      console.log('Car engine started')
    }
 stopEngine(): void {
   console.log('Car engine stopped')
   
    }
    
    move(): void {
      console.log('Car is moving') 
      
    }

  }

  const car2 = new Car2();

  car2.startEngine()
  car2.move()



  //
}