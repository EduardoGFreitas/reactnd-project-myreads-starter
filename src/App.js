import React from 'react'
import * as BooksAPI from './BooksAPI';
import './App.css'
import { Route } from 'react-router-dom';

import BookList from './component/BookList';
import SearchBook from './component/SearchBook';


class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books });
    });
  }


  updateBook(bookToUpdate) {
    const { books } = this.state;
    let haveBook = false;

    let updatedBooks = books.map((book) => {
      if (book.id === bookToUpdate.id) {
        haveBook = true;
        return bookToUpdate;
      } else {
        return book;
      }
    });

    if(!haveBook){
      updatedBooks.push(bookToUpdate);
    }

    BooksAPI.update(bookToUpdate, bookToUpdate.shelf).then(
      this.setState({ books: updatedBooks })
    );
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBook libararyBooks={books}
            updateBook={this.updateBook.bind(this)}/>
        )} />
        <Route exact path="/" render={() => (
          <BookList books={books}
            updateBook={this.updateBook.bind(this)} />
        )} />
      </div>
    )
  }
}

export default BooksApp
