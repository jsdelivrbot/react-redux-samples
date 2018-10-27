import axios from 'axios';
import promise from 'redux-promise';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const KEY = '?key=darkhist';

export const fetchPosts = () => {
  const req = axios.get(`${ROOT_URL}/posts${KEY}`);

  return {
    type: FETCH_POSTS,
    payload: req
  };
};

export const fetchPost = id => {
  const req = axios.get(`${ROOT_URL}/posts/${id}${KEY}`);

  return {
    type: FETCH_POST,
    payload: req
  };
};

export const createPost = (values, cb) => {
  // console.log(values); -> {title: 'hello world', content: 'asdf', categories: 'xyz'}

  const req = axios
    .post(`${ROOT_URL}/posts${KEY}`, values)
    .then(() => cb());

  return {
    type: CREATE_POST,
    payload: req
  };
};

export const deletePost = (id, cb) => {
  const req = axios
    .delete(`${ROOT_URL}/posts/${id}${KEY}`)
    .then(() => cb());

  return {
    type: DELETE_POST,
    payload: id
  };
};
