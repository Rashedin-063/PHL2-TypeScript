{
  //

// type guard or type narrowing

 // typeof --> type guard

  const add = (param1: string | number, param2: string | number): string | number => {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
      return param1 + param2
    } else {
      return param1.toString().concat(param2.toString())
    }
  }

  console.log(add(2, '3'))
  

  // in guard
  
  type NormalUser = {
    name: string
  }
  
  type AdminUser = {
    name: string;
    role: 'admin';
  }


  const getUser = (user: NormalUser | AdminUser) => {
    if ('role' in user) {
      console.log(`${user.name} is a ${user.role}`) 
    } else {
      console.log(`${user.name} is a normal user`)
      
    }
  }

  getUser({ name: 'Rashedin Islam', role: 'admin' });
  getUser({name: 'Arjuman Sraboni'})
  


  // 
}