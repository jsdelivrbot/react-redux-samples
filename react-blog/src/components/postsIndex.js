import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  // Automatically Called by React when
  // this Component has rendered to the DOM
  componentDidMount() {
    this.props.fetchPosts();
  }

  rednerPosts() {
    // this.props.posts -> {}
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" id="addPost" to="/posts/new">
            Add a Post!
          </Link>
        </div>
        <h3> Posts </h3>
        <ul className="list-group">{this.rednerPosts()}</ul>
      </div>
    );
  }
}

// Connect PostsIndex to App Level State
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

// Connect Action Creator to PostsIndex Component
// arg1: mapStateToProps, Action Creator Object
// arg2: Component to be connected to Action Creator
export default connect(mapStateToProps, { fetchPosts: fetchPosts })(
  PostsIndex
);
