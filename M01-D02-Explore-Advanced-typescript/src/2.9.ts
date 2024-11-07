{
  //

  // conditional type
  type A1 = 'null';
  type B1 = 'undefined';

  type X = A1 extends null ? true : false  // conditional type

type Y = A1 extends null ? true : B1 extends undefined ? 'b1 true' : false;
  // nested conditional

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
}

  // 
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false

  type HasBike = CheckVehicle<'bike'>
  type HasCar = CheckVehicle<'ferrari'>


  
//
}