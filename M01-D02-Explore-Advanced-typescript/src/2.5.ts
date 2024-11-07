{
  //


  // function with generics

  const createArray = (param: string) : string [] => {
    return [param]
  }

  // const createArrayWithGeneric = <T>(param: T) : T [] => {
  //   return [param]
  // }

  // type User = { id: number; name: string };

  // const res1 = createArray('Bangladesh')
  // const res2 = createArrayWithGeneric(true)
  // const res3 = createArrayWithGeneric('Bangladesh')
  // const res4 = createArrayWithGeneric<User>({id: 222, name: 'Mr. Omuk'})


  // console.log(res2, res3, res4)
  

  const createTupleWithGeneric = <T, Q>(param: T, param2: Q): [T, Q] => {
    return [param  , param2];
  };

  type User = { id: number; name: string };


  const res2 = createTupleWithGeneric<boolean, number>(true, 123);
  const res3 = createTupleWithGeneric<string, string>('Bangladesh', 'Afg');
  const res4 = createTupleWithGeneric<User, {name: string}>({ id: 222, name: 'Mr. Omuk' }, {name: 'hello'});

  // console.log(res2, res3, res4);
  

  const addCourseToStudents = <T>(student: T) => {
    const course = 'Next level web development'

    return {
      ...student,
      course
    }
  }


  const student1 = addCourseToStudents({name: 'Mr. X', email: 'x@gmial.com', isDedicated: true})
  const student2 = addCourseToStudents({name: 'Mr. Y', email: 'y@gmial.com', isLady: true})



  //
}