import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';
import { Link } from 'react-router-dom';
import Book from './Book';

class SearchBook extends Component {
  state = {
    books: []
  };

  bookSearch(query) {
    const { libararyBooks } = this.props;
    const searchQuery = query.trim();

    if (searchQuery === '') {
      this.setState({ books: [] });
      return;
    }

    BooksAPI.search(searchQuery, 10).then(books => {
      if (books && books.length) {
        let normalizedBooks = books.map(book => {
          let bookInLibaray;
          libararyBooks.map(libararyBook => {
            if (libararyBook.id === book.id) {
              bookInLibaray = libararyBook;
            }
          });
          book.shelf = bookInLibaray ? bookInLibaray.shelf : 'none';
          return book;
        });
        this.setState({ books: normalizedBooks });
      }
    });
  }

  render() {
    const { books } = this.state;
    const { updateBook } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.bookSearch(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map(book => (
              <Book key={book.id} book={book} updateBook={updateBook} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBook;
