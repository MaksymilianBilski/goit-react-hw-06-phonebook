import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setContacts } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { AddContacts } from './Form/ContactsList';
import { Section } from './Section/Section';
import { SearchForm } from './SearchByName/SearchForm';
import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  useEffect(() => {
    dispatch(setContacts(contacts));
  }, [dispatch]);

  return (
    <div>
      <Section title="Phonebook">
        <AddContacts />
      </Section>
      <SearchForm />
      {contacts !== undefined && <ContactsList />}
    </div>
  );
};
