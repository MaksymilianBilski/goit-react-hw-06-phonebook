import { nanoid } from 'nanoid';

export const addContact = ({ name, number }) => {
  return {
    type: 'contacts/addContact',
    payload: {
      name,
      number,
      id: nanoid(),
    },
  };
};

export const setContacts = contacts => {
  return {
    type: 'contacts/setContacts',
    payload: contacts,
  };
};

export const removeContact = id => {
  return { type: 'contacts/removeContact', payload: id };
};

export const setFilters = (filter) => {
  return { type: 'contacts/setFilters', payload: filter };
};
