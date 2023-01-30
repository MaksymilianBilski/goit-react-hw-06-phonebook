export const getContacts = state => {
  if (state === undefined) {
    return;
  }
  return state.rootReducer.contacts;
};

export const getFilter = state => {
  if (state === undefined) {
    return;
  }
  return state.rootReducer.filter;
};
