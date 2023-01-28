import { useSelector, useDispatch } from 'react-redux';
import { setContacts } from 'redux/actions';
import { getContacts, getFilter } from 'redux/selectors';
import css from './SearchForm.module.css';

export const SearchForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onFilterChange = e => {
    const input = e.target.value;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(input.toLowerCase())
    );
    dispatch(setContacts(filteredContacts));
  };

  return (
    <label className={css.label}>
      Find contacts by name:
      <input
        className={css.input}
        type="text"
        name="input"
        // value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
};
