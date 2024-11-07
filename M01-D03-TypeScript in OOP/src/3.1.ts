{
  //

  // OOP --> Class

  class Animal {
    constructor(public name: string, public species : string, public sound: string) {
    }

    makeSound() {
      console.log(`The ${this.name} sounds ${this.sound}`)
      
    }
}

  const dog = new Animal('Alshesian', 'dog', 'ghew ghew')

  console.log(dog.makeSound())

  const cat = new Animal('Pet', 'cat', 'meaw meaw')
  console.log(cat.makeSound());


  //
}