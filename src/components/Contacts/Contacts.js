// src/components/Contacts/Contacts.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from '../Filter/Filter';
import { fetchAll, addContact, deleteContact } from '../../redux/operations';
import { selectIsLoading, selectError, selectFilteredContacts, selectFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';
import styles from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  const handleAddContact = (name, number) => {
    dispatch(addContact({ name, number }));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default Contacts;
