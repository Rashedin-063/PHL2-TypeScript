{
  /**
   * Task 4: Union and Intersection Types
Objective: Create union and intersection types using interfaces.

Instructions:

Define interfaces Book and Magazine.
Create:
A type that is a union of Book and Magazine.
A type that is an intersection of Book and Magazine.

   */

  interface Book {
    name: string;
    author: string;
    totalPages: number;
    publishYear: string;
    price: number
  }

  interface Magazine {
    type: string;
    isExpensive: boolean;
    isBestSeller: boolean;
  }

  type NewBook = Book | Magazine;
  type NewBook2 = Book & Magazine;
  
}