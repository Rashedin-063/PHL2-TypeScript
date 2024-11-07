{
  //

  // utility

  // Pick

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  }

  type Name = Pick<Person, 'name'>
  type Age = Pick<Person, 'age'>;
  type AgeName = Pick<Person, 'name' | 'age'>


  // by using pick we can take an existing property of an existing type


  // Omit
  type ContactInfo = Omit<Person, "name" | 'age'>

  // by using omit we can create a new type by excluding certain key that mentions in Omit


  // Required

  type PersonRequired = Required<Person>

  // by using required we can create a new type making every property of an existing type 'required'


  // partial

  type PersonPartial = Partial<Person>

  // by using Partial , we can create a new type making every property of an existing type 'Optional'
  

  // readonly
  type ReadOnly = Readonly<Person>

  // by using Readonly , we can create a new type making all the property readonly of an existing type 'Read only'
  

  // Record

  type myObj = {
    a: string;
    b: string;
  }

  type MyObj = Record<string, string>

  // const obj1: myObj = {a: 'aa', b: 'cc', c: 'dd'}
  const obj1: MyObj = { a: 'aa', b: 'cc', c: 'dd' }
  
  const emtObj : Record<string, unknown> = {}

  //
}