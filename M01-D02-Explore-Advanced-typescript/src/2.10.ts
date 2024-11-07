{
  //

  // mapped types

  const arrayOfNums: number[] = [1, 4, 5]


  const makeStringArray = (array: number[]): void => {
    const arrayOfStr = array.map(num => num.toString())
    console.log(arrayOfStr)
    
  }
  
makeStringArray(arrayOfNums)

  
  // type AreaNumber = {
  //   height: number;
  //   width: number;
  // }


  type AreaString<T> = { 
    [key in keyof T]: T[key]
  }

  // lookup
  // type Height = AreaNumber['height']
  // type Width = AreaString['width']


  const area2: AreaString<{ height: string; width: number }> = {
    height: '100',
    width: 40,
  };



  //

}