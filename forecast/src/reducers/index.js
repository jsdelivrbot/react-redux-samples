import { combineReducers } from 'redux';

import Weather from './weather';

// Setup Mapping for State
const rootReducer = combineReducers({
  weather: Weather
});

export default rootReducer;
