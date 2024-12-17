{// destructuring

  const user: {
    id: number;
    name: {
      firstName: string;
      lastName: string;
    }
    contactNo: string;
    address: string
} = {
  id: 345,
  name: {
    firstName: 'Rashedin',
    lastName: 'Islam'
  },
  contactNo: '017313010',
  address: 'Australia'
}

  const { name: { firstName: fName } } = user;

  // array destructuring
  
  const myFriends = ['Chandler', 'Joey', 'Ross', 'Rachel', 'Monica', 'Phoebe']

  const [a, b, bestFriend, ...rest] = myFriends;

}