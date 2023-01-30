import { useSelector, useDispatch } from 'react-redux';
import { setContacts, removeContact } from 'redux/contactsSlice';
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
