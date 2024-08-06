import { ContactsForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactListontactList/ContactList';
import { ContactFilter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useCallback } from'react';
import { useDispatch, useSelector } from'react-redux';
import { fetchContacts } from'redux/operations';
import { selectError, selectIsLoading } from'redux/selectors';
import css from './Phonebook.module.css';

const Phonebook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const fetchContactsCallback = useCallback(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    fetchContactsCallback();
  }, [fetchContactsCallback]);

  return (
    <div className={css.one}>
      <h1>Phonebook</h1>
      <ContactsForm></ContactsForm>
      <h2>Contacts</h2>
      <ContactFilter></ContactFilter>
      <ContactList />
      {isLoading &&!error && <Loader />}
    </div>
  );
};

export default Phonebook;
		