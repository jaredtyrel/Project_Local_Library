/*
  {
    "id": "5f446f2ecfaf0310387c9603",
    "name": {
      "first": "Esther",
      "last": "Tucker"
    },
    ...
  }
*/

function findAccountById(accounts, id) {
  // return the opject that has the sameIB
  // for loop to look at all the objects
  // if id matches return object

  let accId = accounts.find((acc) => acc.id === id);
  return accId;
}

function sortAccountsByLastName(accounts) {
  // return given array that is sorted by last name
  // use sort methode on given array

  accounts.sort((accA, accB) =>
    accA.name.last.toLowerCase() > accB.name.last.toLowerCase() ? 1 : -1
  );
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  // return the number of accounts that have borrowed any given book
  // compare the account ID [account[x].id] to the ID of a books borrower [books.borrows.id]
  // for loop to cycle through each book
  // runnning count of times borrowed

  const accId = account.id;
  let booksOwed = 0;

  return books.reduce((total, book) => {
    book.borrows.reduce((total, borrowed) => {
      if (accId === borrowed.id) {
        booksOwed++;
      }
    });
    return booksOwed;
  });
}
function findBook(book, booksOwed, accId) {
  
}

//   const accId = account.id;
//   borrowed = 0;
//   books.forEach((book) =>
//     book.borrows.forEach((borrow) => accId === borrow.id && borrowed++)
//   );

//   return borrowed;
// }

function getBooksPossessedByAccount(account, books, authors) {
  // answer structure
  // {
  //  id: -----
  //  title: -------
  //  genre: ------
  //  authorId: --
  //  author: { author object}
  //  }
  //  { borrows array }
  //

  let accID = account.id; // account ID
  let result = []; //Books possessed for this account

  return books
    .filter((book) =>
      book.borrows.some(
        ({ returned, id }) => returned === false && id === accID
      )
    )
    .map((book) => {
      book.author = authors.find((author) => book.authorId === author.id);
      return book;
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
