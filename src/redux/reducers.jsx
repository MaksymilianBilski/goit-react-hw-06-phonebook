import { initialState } from './store';

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return { ...state, contacts: [...state.contacts, action.payload] };
    case 'contacts/removeContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case 'contacts/setContacts':
      return { ...state, contacts: [...action.payload] };
    case 'contacts/setFilters':
      return { ...state, filters: action.payload };
    default:
      return;
  }
};
