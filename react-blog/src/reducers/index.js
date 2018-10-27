import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import Posts from './posts';

// Create Mapping for State
const rootReducer = combineReducers({
  posts: Posts,
  form: formReducer
});

export default rootReducer;
