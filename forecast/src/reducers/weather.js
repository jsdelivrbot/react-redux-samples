import { FETCH_WEATHER } from '../actions';

// Reducer to Handle Weather API Responses
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      // Comment Below Mutates State :-(
      // return state.push(action.payload.data);
      return [action.payload.data, ...state]; // -> [city, city, city]
  }
  return state;
};
