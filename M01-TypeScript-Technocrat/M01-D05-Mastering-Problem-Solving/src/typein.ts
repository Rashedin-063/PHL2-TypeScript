{
  //

type User = {
  id: 1 | 2 | 3;
  name: string;
  email?: string;
  }
  
  const user: User = {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
  }

  function logMessage(user: User): void {
    if ('email' in user) {
      console.log('This is a valid user')
    } else {
      console.log('This is not a valid user')
    }
  }

  const user2: User = {
    id: 3,
    name: 'Alice Johnson',
  };

  logMessage(user)
  logMessage(user2)






  //
}