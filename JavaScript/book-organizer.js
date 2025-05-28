const books = [
  {
    title: "To Kill a Mockingbird",
    authorName: "Harper Lee",
    releaseYear: 1960,
  },
  {
    title: "1984",
    authorName: "George Orwell",
    releaseYear: 1949,
  },
  {
    title: "The Great Gatsby",
    authorName: "F. Scott Fitzgerald",
    releaseYear: 1925,
  },
  {
    title: "Beloved",
    authorName: "Toni Morrison",
    releaseYear: 1987,
  },
  {
    title: "The Catcher in the Rye",
    authorName: "J.D. Salinger",
    releaseYear: 1951,
  },
  {
    title: "Things Fall Apart",
    authorName: "Chinua Achebe",
    releaseYear: 1958,
  },
  {
    title: "One Hundred Years of Solitude",
    authorName: "Gabriel García Márquez",
    releaseYear: 1967,
  },
  {
    title: "The Color Purple",
    authorName: "Alice Walker",
    releaseYear: 1982,
  },
];

function sortByYear(book1, book2) {
  if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else {
    return 0;
  }
}

const filteredBooks = books.filter((book) => book.releaseYear > 1950);

filteredBooks.sort(sortByYear);

console.log(filteredBooks);
