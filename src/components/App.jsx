import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setContacts } from 'redux/actions';
import { getContacts } from 'redux/selectors';
import { AddContacts } from './Form/ContactsList';
import { Section } from './Section/Section';
import { SearchForm } from './SearchByName/SearchForm';
import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem('contacts')) === undefined ||
      JSON.parse(localStorage.getItem('contacts')) === null
    ) {
      return;
    }
    const localUsers = JSON.parse(localStorage.getItem('contacts'));
    dispatch(setContacts(localUsers));
  }, [dispatch]);

  const contacts = useSelector(getContacts);

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
