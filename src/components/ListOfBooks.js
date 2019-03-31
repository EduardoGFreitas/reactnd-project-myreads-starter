import React, { Fragment } from 'react';

import BookShelf from './BookShelf';

const BOOK_SHELF = {
  CURRENT_READING: 'currentlyReading',
  READ: 'read',
  WANT_TO_READ: 'wantToRead'
};

const getBookFromShelf = (books, bookshelf) => {
  //books.map(book => console.log(book));
  //return ` ${books}  ${bookshelf}`;
  //console.log(books[0].shelf, bookshelf);

  return books.filter(book => book.shelf === bookshelf);
};

// getBookFromShelf(books, bookshelf) {
//   return books.filter((book) => book.shelf === bookshelf);
// }

const ListOfBooks = props => {
  console.log(getBookFromShelf(props.listOfBooks, BOOK_SHELF.CURRENT_READING));

  return (
    <Fragment>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              books={getBookFromShelf(
                props.listOfBooks,
                BOOK_SHELF.CURRENT_READING
              )}
              shelf="Current Reading"
            />
            <BookShelf
              books={getBookFromShelf(props.listOfBooks, BOOK_SHELF.READ)}
              shelf="Read"
            />
            <BookShelf
              books={getBookFromShelf(
                props.listOfBooks,
                BOOK_SHELF.WANT_TO_READ
              )}
              shelf="Want To Read"
            />
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ListOfBooks;
