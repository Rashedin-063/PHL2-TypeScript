{
  //

  // ternary operator || optional chaining || nullish coalescing


  const age: number = 15;

  const adult = age >= 18 ? true : false
  // console.log({ adult })
  
  const isAdult = undefined;

  const result1 = isAdult ?? "Guest"
  
  // console.log({result1})

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string
    }
  }

  const user3: User = {
    name: 'Rashedin',
    address: {
      city: 'GB',
      road: 'Awesome road',
      presentAddress: 'GB city'
    }
  }

  const permanentAddress = user3?.address?.permanentAddress ?? 'No Permanent Address'
  console.log(permanentAddress)

  
  const presentAddress = user3?.address?.presentAddress ?? 'No Permanent Address'

  console.log(presentAddress)
  
  
  
  







  //
}