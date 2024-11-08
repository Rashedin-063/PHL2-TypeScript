{
  //

  // function with generics
  const showMessage = <T>(param: T) => {
    return param;
  }

  console.log(showMessage<string>('Hello World'))


  const add = <T extends number | string, Q extends number | string>(num1: T, num2: Q): number => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
      return num1 + num2;
    } else {
      return parseInt(num1 as string) + parseInt(num2 as string);
    }
  }

  console.log(add<number, string>(3, '4'))

    interface User {
      id: string;
      name: string;
      age: number;
      email: string;
    }
  
  const user123: User = {
    id: '123',
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
  }
  
  const showMessage2 = <msg1type, msg2type, T extends User>(message1: msg1type, message2: msg2type, userInfo: T): string => {
    console.log(userInfo.name)
     // to avoid error TS2339: Property 'id' does not exist on type 'User'.
    return `${message1} ${message2}`;
  }
  
  console.log(
    showMessage2<string, string, User>('Hello', 'World',
      {
      id: '123',
      name: 'John Doe',
      age: 30,
      email: 'john.doe@example.com',
    })
  );








  //
}