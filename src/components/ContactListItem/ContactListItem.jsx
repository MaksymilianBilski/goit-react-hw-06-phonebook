import { useSelector, useDispatch } from 'react-redux';
import { setContacts, removeContact } from 'redux/actions';
import { getContacts } from 'redux/selectors';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ contact }) => {
  const { name, id, number } = contact;

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onContactDelete = id => {
    dispatch(removeContact(id));
    const deletedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(deletedContacts);
    localStorage.setItem('contacts', JSON.stringify(deletedContacts));
  };

  return (
    <>
      <li className={css.listItem}>
        {name}: {number}
        <button
          className={css.button}
          type="button"
          onClick={() => onContactDelete(id)}
        >
          DELETE
        </button>
      </li>{' '}
    </>
  );
};
