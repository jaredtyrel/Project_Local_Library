function findAuthorById(authors, id) {
  // use a loop to find the author
  // loop through array

  for (let author in authors) {
    if (authors[author].id === id) return authors[author];
  }
}

function findBookById(books, id) {
  // use a loop to find a book
  // loop through array

  for (let book in books) {
    if (books[book].id === id) return books[book];
  }
}

function partitionBooksByBorrowedStatus(books) {
  let booksReturned = books.filter((book) =>
    book.borrows.every((borrow) => borrow.returned === true)
  );
  let booksBorrowed = books.filter((book) =>
    book.borrows.some((borrow) => borrow.returned === false)
  );
  return [[...booksBorrowed], [...booksReturned]];
}

function getBorrowersForBook(book, accounts) {
  // max number of accounts that should be returned
  // map new list into borrowlist
  // use find function since the methode will be repeating several times
  // each iteration will combined and place a whole object into the borrowlist array
  //use the slice methode so that only the first 10 will be returned

  const maxAccounts = 10;
  let borrowlist = book.borrows.map((borrow) => {
  let account = accounts.find((account) => account.id === borrow.id);
  return { ...borrow, ...account };
  });
  return borrowlist.slice(0, maxAccounts);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
