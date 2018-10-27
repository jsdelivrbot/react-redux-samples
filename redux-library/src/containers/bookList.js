import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends Component {
  render() {
    // console.log(this.props.books); -> array of books
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }

  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => {
            this.props.selectBook(book);
          }}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }
}

// Whatever is returned will show up as
// props inside of the BookList container
const mapStateToProps = state => {
  return {
    books: state.books
  };
};

// Anything returned from this function
// will show up as props on the BookList container
const mapDispatchToProps = dispatch => {
  // Whenever selectBook is called, the result will be
  // passed to all reducers
  return bindActionCreators(
    { selectBook: selectBook },
    dispatch
  );
};

// Promote BookList from component to container
// BookList should know about the dispatch method,
// selectBook
// Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(
  BookList
);
