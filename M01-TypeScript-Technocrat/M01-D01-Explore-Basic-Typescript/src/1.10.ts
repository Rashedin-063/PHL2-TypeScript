{
  //

  // union types
  // type FrontendDeveloper = 'fakibajDeveloper' | 'juniorDeveloper'
  // type FullStackDeveloper = 'frontend developer' | 'backend developer'

  // type Developer = FrontendDeveloper | FullStackDeveloper


  // type User = {
  //   name: string;
  //   email?: string;
  //   gender: 'Male' | 'Female';
  //   bloodGroup: 'O+' | 'A+' | 'B+' | 'Ab+';
  // };


  // const newDeveloper: FrontendDeveloper = 'juniorDeveloper'
  

  

  // const user1: User = {
  //   name: "Ru Stark",
  //   email: 'rashedinislam.06@gamil.com',
  //   gender: 'Male',
  //   bloodGroup: 'B+'
  // }


  type FrontendDeveloper = {
    skills: string[];
    designation1: 'Fronted Developer'
  }
  type BackendDeveloper = {
    skills: string[];
    designation2: 'Backend Developer'
  }

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper

  const fullStackDeveloper: FullStackDeveloper = {
    skills: ['HTML', 'JS', 'React', 'Express', 'MongoDB'],
    designation1: 'Fronted Developer',
    designation2: 'Backend Developer'
  }








  //
}