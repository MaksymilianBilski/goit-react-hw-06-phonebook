export const getContacts = state => {
  if (state === undefined) {
    return;
  }
  if (state.filter) {
    return state.contacts.filter(contact =>
      contact.name.includes(state.filter)
    );
  }
  return state.contacts;
};

export const getFilter = state => {
  if (state === undefined) {
    return;
  }
  return state.filter;
};
