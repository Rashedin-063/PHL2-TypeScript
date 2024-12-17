{
  //

  // generic constraint with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string
}

  type Owner = "string" | 'car' | 'ship' // manually
  
  type Owner2 = keyof Vehicle;


  const person1: Owner = 'car';
  const person2: Owner2 = 'ship';


  console.log(person1, person2)


  const user = {
    name: 'Rashedin',
    age: 29,
    address: 'gb'
  }


  const getPropertyValue = <X, Y extends keyof X> (obj: X, key: Y) => {
  return obj[key]
}
  
  // const getPropertyValue2 = <X, Y extends keyof X>(obj: X, key: Y) => {
  //   return obj[key]
  // }

  const car = {
    model: 'Toyota 100',
    year: 2000
  }
  
  
  const result1 = getPropertyValue(user, 'name')
  const result2 = getPropertyValue(car, 'model')

  console.log(result1, result2)
  
  

  //
}