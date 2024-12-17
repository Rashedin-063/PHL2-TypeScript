{
  //

  // type assertion

  let anything: any;

  anything = 'Next Level Web Development';

  anything = 222;
  
  (anything as number).toExponential();


  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === 'string') {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value id ${convertedValue}`;
    }
    if (typeof value === 'number') {
      return value * 1000;
    }
  }

  const result1 = kgToGm(1000) as number;

  const result12 = kgToGm('1000') as string;

  type CustomError = {
    message: string
  }

  try {
    
  } catch (error) {
    console.error((error as CustomError).message);
    
  }








  //
}

console.error();