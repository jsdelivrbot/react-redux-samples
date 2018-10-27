// Action Creator
export const selectBook = book => {
  // Returns an action
  // Type identifies the type of action
  // Payload gives more info about the action that occurered
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
};
