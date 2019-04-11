import React from 'react';
import Book from './Book';

const BookShelf = ({ books, bookShelfName, updateBook }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookShelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <li key={book.id}>
              <Book book={book} updateBook={updateBook} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
