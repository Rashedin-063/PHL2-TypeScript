// Design a TypeScript class Car that represents a basic car with properties for brand, model, and year. Implement a method displayInfo that displays information about the car.

class Car { 
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  displayInfo(): void {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    
  }
}

const newCar = new Car('Toyota', 'Camry', 2022);

newCar.displayInfo(); // Output: Brand: Toyota, Model: Camry, Year: 2022