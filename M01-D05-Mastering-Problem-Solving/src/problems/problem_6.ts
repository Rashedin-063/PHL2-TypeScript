// You are given an object representing a book with properties title (string), author (string), and publishedYear (number). Use type alias for declaring the object. Write a TypeScript function called isRecentBook that takes this book object as input and determines if the book was published in the last 5 years.


type Book = {
  title: string;
  author: string;
  publishedYear: number;
};

const harryPotter: Book = {
  title: 'Harry Potter and the Philosopher\'s Stone',
  author: 'J.K. Rowling',
  publishedYear: 1997,
}

const theOrigin: Book = {
  title: 'The Origin',
  author: 'Margaret Atwood',
  publishedYear: 2026,
}

function isRecentBook(book: Book): boolean | undefined {
  const currentYear = new Date().getFullYear();
  const isRecentBook = currentYear - book.publishedYear
  if (isRecentBook >= 0 && isRecentBook <= 5) {
    return true
  } else if (isRecentBook < 0) {
    return undefined;
  } else {
    return false;
  }
}

console.log(isRecentBook(harryPotter)); // Output: true
console.log(isRecentBook(theOrigin)); // Output: true

