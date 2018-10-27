import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost } from '../actions/index';

class NewPost extends Component {
  renderField(field) {
    // ES6 Destructuring
    // grab meta property from field
    // then the touched and error properties from meta
    const {
      meta: { touched, error }
    } = field;

    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  // Handling Form Submission
  onSubmit(values) {
    // Create Post
    this.props.createPost(values, () => {
      // Programmatic Navigation After Successful Post
      this.props.history.push('/');
    });
  }

  render() {
    // Passed on behalf of redux-form
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title"
          label="Post Title"
          component={this.renderField}
        />
        <Field
          name="content"
          label="Post Content"
          component={this.renderField}
        />
        <Field
          name="categories"
          label="Categories"
          component={this.renderField}
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
        <Link className="btn btn-danger" to="/">
          Cancel
        </Link>
      </form>
    );
  }
}

const validate = values => {
  // console.log(values); -> {title: 'hello world', content: 'asdf', categories: 'xyz'}

  // If errors has no properties, redux-form will validate form
  // Else – redux-form assumes form is invalid
  const errors = {};

  // Validate inputs from values
  if (!values.title) {
    errors.title = 'Please enter a post title';
  }

  if (!values.content) {
    errors.content = 'Please enter post content';
  }

  if (!values.categories) {
    errors.categories = 'Please add one or more categories';
  }

  return errors;
};

// arg1: Options Object
// validate: Used for form validation
// form: String used to represent the form name
// arg2: Component to be used as a redux form
export default reduxForm({ validate: validate, form: 'NewPostForm' })(
  connect(null, { createPost: createPost })(NewPost)
);
