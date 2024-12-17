{
  //

  // nullable type || unknown type

  // nullable type
  const searchName = (value: string | null) => {
    if (value) {
      console.log('Searching')  
    } else {
      console.log('There is nothing to search for')
      
    }
  }
  searchName(null)
  
  
  // unknown typeof
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === 'number') {
      const convertedSpeed = ((value * 1000) / 3600).toFixed(2);

      console.log(`The speed is ${convertedSpeed} ms^-1`)   
    }else if (typeof value === 'string') {
      const valueInNumber = parseFloat(value.split(' ')[0])
      console.log(valueInNumber)
      
       const convertedSpeed = ((valueInNumber * 1000) / 3600).toFixed(2);

      console.log(`The speed is ${convertedSpeed} ms^-1`); 
    } else {
      console.log('wrong input')
      
    }
  }
  
  //  getSpeedInMeterPerSecond(1000);
  getSpeedInMeterPerSecond('1000 kmh^-1');
  

  //never
  const throwError = (msg: string): never => {
    throw new Error(msg)
  }

  throwError('Mushkil se error ho geya')

// 
}