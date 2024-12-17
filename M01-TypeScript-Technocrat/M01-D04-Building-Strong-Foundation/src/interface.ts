{
  //
  interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    address?: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    }
  }

  interface Admin extends User { 
    role: 'admin';
    accessLevel: 1 | 2 | 3;
  }

  const newUser: User = {
    id: 'user123',
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001'
    }
  }

  const newAdmin: Admin = {
    id: 'admin456',
    name: 'Jane Smith',
    age: 45,
    email: 'janesmith@example.com',
    role: 'admin',
    accessLevel: 3
  }

  type UserType = User | Admin;
  type AdminType = User & Admin;

  const myAdmin: AdminType = {
    id: 'admin789',
    name: 'Bob Johnson',
    age: 50,
    email: 'bobjohnson@example.com',
    role: 'admin',
    accessLevel: 2,
    address: {
      street: '456 Elm St',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001'
    }
  }
  

  console.log(myAdmin.address?.street);
  



  //
}