{
  //

  // class --> object blue print ----> method
  // inheritance ---> parent class ----> child class ----> derived class
  // abstraction ---> interface ----> implemented class ----> concrete class
  // encapsulation ---> private, public, protected ----> access modifiers
  // polymorphism ---> class ---> instance ---> function;

  
  class Animal { 
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound(): void {
      console.log(`${this.name} makes a sound.`);
    }
  }

  class Cat extends Animal {
    characteristic: string;

    constructor(name: string, species: string, characteristic: string) {
      super(name, species);
      this.characteristic = characteristic;
    }


  }


  //
}