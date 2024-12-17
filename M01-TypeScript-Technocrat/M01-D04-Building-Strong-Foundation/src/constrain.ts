{
  //

  function getLength<T extends {length: number}>(strArray: T): number { 
    return strArray.length;
  }


  console.log(getLength<string>('Hello World'));
  






  //
}