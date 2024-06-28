import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.css';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onAddContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        placeholder="Phone number"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
