import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, setContacts, setFilters } from './actions';

export const initialState = {
  contacts: [],
  filter: '',
};
const state = initialState;

export const rootReducer = createReducer(state, {
  [addContact]: (state, action) => {
    state.contacts.push(action.payload);
  },
  [removeContact]: (state, action) => {
    const index = state.contacts.findIndex(
      contact => contact.id === action.payload
    );
    state.contacts.splice(index, 1);
  },
  [setContacts]: (state, action) => {
    return { ...state, contacts: [...action.payload] };
  },
  [setFilters]: (state, action) => {
    return { ...state, filter: action.payload };
  },
});
