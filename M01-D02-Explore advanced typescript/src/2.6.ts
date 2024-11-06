{
  //

  // constraints
 interface StudentType {id: number, name: string, email: string}
  
  const addCourseToStudents = <T extends StudentType>(student: T) => {
    const course = 'Next level web development';

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudents({
    id: 1,
    name: 'Mr. X',
    email: 'x@gmial.com',
    isDedicated: true,
  });
  const student2 = addCourseToStudents({
    id: 2,
    name: 'Mr. Y',
    email: 'y@gmial.com',
    isLady: true,
  });


  const student3 = addCourseToStudents({
    id: 3,
    name: 'hello',
    email: 'hello@world.com',
  emni: 'emni'
  });


console.log(student1, student2)



  //
}