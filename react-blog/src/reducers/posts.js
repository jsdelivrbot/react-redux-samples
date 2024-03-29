import _ from 'lodash';

import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');

    case FETCH_POST:
      // ES6 Key Interpolation
      return { ...state, [action.payload.data.id]: action.payload.data };

    case DELETE_POST:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};
