import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPost, deletePost } from '../actions/index';

class ShowPost extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    // this.props === ownProps

    const { post } = this.props;

    if (!post) {
      return <div> Loading... 🕑</div>;
    }

    return (
      <div>
        <h3> {post.title} </h3>
        <p> {post.content}</p>
        <h6> Tags: {post.categories}</h6>
        <Link className="btn btn-primary" to="/">
          Home
        </Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}>
          Delete Post
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }, ownProps) => {
  return { post: posts[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchPost, deletePost })(
  ShowPost
);
