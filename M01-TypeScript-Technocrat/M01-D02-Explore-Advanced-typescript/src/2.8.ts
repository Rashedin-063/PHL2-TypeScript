{
  //
 
  // promise --> resolve, reject

  // simulate

  interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  
  const getUsers = async (): Promise<Todo> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');

    const data = await res.json()

    console.log(data)
    return data;
  }

  getUsers()

  const createPromise = () : Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data = 'something';

      if (data) {
         resolve(data)
      } else {
        reject('failed to load data')
       }
  })
}

  // calling create promise function
  
  const showData = async (): Promise<void> => {
    const res = await createPromise();

    console.log(res)
    
  }

  showData()
  

  //
}