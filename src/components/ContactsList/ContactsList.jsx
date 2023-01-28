import { useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { getContacts } from 'redux/selectors';
import css from './ContactsList.module.css';

export const ContactsList = () => {

  
  const contacts = useSelector(getContacts);
  return (
    <ol className={css.list}>
      <h5>Contacts</h5>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} contact={{ id, name, number }} />
      ))}
    </ol>
  );
};
