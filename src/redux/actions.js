import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction(
  'contacts/addContacts',
  ({ name, number }) => {
    return {
      payload: {
        name,
        number,
        id: nanoid(),
      },
    };
  }
);

export const setContacts = createAction('contacts/setContacts', contacts => {
  return {
    type: 'contacts/setContacts',
    payload: contacts,
  };
});

export const removeContact = createAction('contacts/removeContact', id => {
  return { type: 'contacts/removeContact', payload: id };
});

export const setFilters = createAction('contacts/setFilters', filter => {
  return { type: 'contacts/setFilters', payload: filter };
});
