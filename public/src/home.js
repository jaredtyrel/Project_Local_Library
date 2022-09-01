function getTotalBooksCount(books) {
  let total = 0;
  total = books.length;
  return total;
}

function getTotalAccountsCount(accounts) {
  let total = 0;
  total = accounts.length;
  return total;
}

function getBooksBorrowedCount(books) {
  // have books out equal the legth of the array after filtering the books array
  // books array will use filter methode twice

  let booksOut = books.filter(
    (book) => book.borrows.filter((record) => record.returned === false).length
  );
  return booksOut.length;
}

function getMostCommonGenres(books) {
  // returns array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least.
  // Each object in the returned array has two keys:
  // - The `name` key which represents the name of the genre.
  // // - The `count` key which represents the number of times the genre occurs.

  let newObj = {};
  const bookList = [];
  books.map((book) => {
    let total = 0;
    for (let b of books) {
      if (b.genre === book.genre) {
        total++;
      }
    }
    newObj[book.genre] = total;
    return { name: book.genre, count: total };
  }, 0);
  for (let genre in newObj) {
    bookList.push({ name: genre, count: newObj[genre] });
  }
  return bookList.sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0, 5);
}


function getMostPopularBooks(books) {
  // the amount that a book has been checked out can be checked by how often it is borrowed
  //since borrowed is an array i should be able to push
  // objects in format ( name: "book name", count "count")

  let popbooks = [];
  let newObj = {};
  let bookname = " ";
  let popcount = 0;

  for (let book in books) {
    bookname = books[book].title;
    popcount = books[book].borrows.length;
    popbooks.push({ name: bookname, count: popcount });
  }
  return popbooks.sort((a, b) => b.count - a.count).slice(0, 5);
}


function getMostPopularAuthors(books, authors) {
  let result = [];

  authors.forEach((author) => {
    let theAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0,
    };
    books.forEach((book) => {
      if (book.authorId === author.id) theAuthor.count += book.borrows.length;
    });
    result.push(theAuthor);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

function sortnSplice(arr) {
  arr.sort((entryA,entryB) => entryB.count - entryA.count)
  return arr.splice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
