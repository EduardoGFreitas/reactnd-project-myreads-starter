import React, { Fragment } from 'react';

import BookItem from './BookItem';

const BookShelf = ({ books, shelf }) => {
  return (
    <Fragment>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <li key={book.id}>
                <BookItem book={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Fragment>
  );
};

export default BookShelf;
