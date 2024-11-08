{
  //

  // define a simple book type
  type Book = {
    title: string;
    author: string;
    publicationYear: number;
  };

  const myBook: Book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
  }

  // use "keyof" to get keys of the Book type
  type BookKeys = keyof Book;

  // function getBookProperty<T, K extends keyof T>(book: T, key: K): T[K] {
  //   return book[key];
  // }

  // console.log(getBookProperty(myBook, "title")); // To Kill a Mockingbird
  
  // function getBookProperty<T, K extends keyof T>(book: T, key: K): T[K] {
  //   return book[key];
  // }

  // console.log(getBookProperty(myBook, 'author'));


  function getBookProperty<T, K extends keyof T>(book: T, key: K): T[K] {
    return book[key];
  }
  
  console.log(getBookProperty(myBook, 'publicationYear'));
  






  //
}