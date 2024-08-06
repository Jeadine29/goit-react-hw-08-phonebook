import { useDispatch, useSelector } from 'react-redux';
import { fetchAll, addContact, deleteContact } from '../../redux/contacts/operations';

function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <h1>Contacts</h1>
      <button onClick={() => handleAddContact({ name: 'New Contact', number: '123456789' })}>
        Add Contact
      </button>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name} - {contact.number}
            <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contacts;