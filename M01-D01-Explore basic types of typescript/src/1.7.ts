{
  const poorUser: {
    firstName: string;
    lastName: string;
}  = {
  firstName: 'Ru',
  lastName: 'Stark'
  }
  // spread operator
  // rest operator


  // learn spread operator

  const bros1: string[] = ['Shashwoto', 'Mehedi', "Arefin"]
  const bros2: string[] = ['Tahmid', 'Tamim', 'Rocky']

  bros1.push(...bros2)

  const mentors1 = {
    typescript: 'Mezba',
    redux: 'Mir',
    dbms: 'Mizan'
  }

  const mentors2 = {
    prisma: 'Firoz',
    next: 'Tanmoy',
    cloud: 'Nahid',
  }


  const mentorList = {
    ...mentors1, ...mentors2
  }

  console.log(mentorList)
  


  // learn rest operator

  const greetFriends = (...friends: string[]) => {
    // console.log(`Hi ${friend1}, ${friend2}, ${friend3}`)

    friends.forEach(friend => console.log(`Hello there, ${friend}`)
    )
    
  }

  greetFriends('Abul','Babul', 'Cabul')

}