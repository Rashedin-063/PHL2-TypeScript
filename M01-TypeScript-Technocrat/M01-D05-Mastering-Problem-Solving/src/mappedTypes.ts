{
  //

  type Todo = {
    task: string;
    completed: boolean;
    dueDate: string;
  }

//   type TodoList = {
//   [T in keyof Todo]: Todo[T]
  // }
  
  const requiredTodos: Todo = {
    task: "Complete the homework",
    completed: false,
    dueDate: "2022-01-20",
  }

  // type TodoList = {
  //   [T in keyof Todo]?: Todo[T]
  // }

  type TodoList = {
    [T in keyof Todo]?: Todo[T]
  }

  const optionalTodos: TodoList = {
    task: "Clean the house",
    completed: true,
  }

  console.log(optionalTodos)
  





  //
}