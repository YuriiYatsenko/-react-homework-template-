import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, updateFilter } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import './Phonebook.css';

const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const handleAddContact = ({ name, number }) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = event => {
    dispatch(updateFilter(event.target.value));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className="phonebook-container">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default Phonebook;


