import React, { Component, Fragment } from 'react';

import * as BooksAPI from '../BooksAPI';
import SearchBook from '../components/SearchBook';

export default class Search extends Component {
  state = {
    books: []
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
  }

  render() {
    return (
      <Fragment>
        <SearchBook />
      </Fragment>
    );
  }
}
