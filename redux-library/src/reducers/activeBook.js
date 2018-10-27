// The state param does not represent app state
// Instead, it represents the state of this reducer
export default (state = null, action) => {
  switch (action.type) {
    case 'BOOK_SELECTED':
      // return the book which was selected
      return action.payload;
  }
  return state;
};
