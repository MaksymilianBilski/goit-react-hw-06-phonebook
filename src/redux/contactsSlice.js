// import { createReducer } from '@reduxjs/toolkit';
// import { addContact, removeContact, setContacts, setFilters } from './actions';

// export const initialState = {
//   contacts: [],
//   filter: '',
// };
// const state = initialState;

// export const rootReducer = createReducer(state, {
//   [addContact]: (state, action) => {
//     state.contacts.push(action.payload);
//   },
//   [removeContact]: (state, action) => {
//     const index = state.contacts.findIndex(
//       contact => contact.id === action.payload
//     );
//     state.contacts.splice(index, 1);
//   },
//   [setContacts]: (state, action) => {
//     return { ...state, contacts: [...action.payload] };
//   },
//   [setFilters]: (state, action) => {
//     return { ...state, filter: action.payload };
//   },
// });

import { nanoid } from 'nanoid';
import { combineReducers, createSlice } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';

export const initialState = {
  contacts: [],
};

export const contactsReducer = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    removeContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    setContacts(state, action) {
      return { ...state.contacts, contacts: [...action.payload] };
    },
  },
});

export const { setContacts, addContact, removeContact } =
  contactsReducer.actions;

export const rootReducer = combineReducers({
  contacts: contactsReducer.reducer,
  filter: filterSlice.reducer,
});
