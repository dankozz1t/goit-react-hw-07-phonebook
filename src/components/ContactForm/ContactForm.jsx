import React, { useEffect, useReducer } from 'react';

import {
  useAddContactMutation,
  useFetchContactsQuery,
} from '../../redux/contactsSlice';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { login } from '../Confetti/utils';

import s from './ContactForm.module.css';

const initialValue = {
  phone: '',
  name: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };

    case 'phone':
      return { ...state, phone: action.payload };

    case 'reset':
      return { ...action.payload };

    default:
      return state;
  }
};

export function ContactForm() {
  const [{ name, phone }, dispatchReducer] = useReducer(reducer, initialValue);

  const { data: contacts } = useFetchContactsQuery();
  const [addContact] = useAddContactMutation();

  useEffect(() => {
    login.submit();
  }, [contacts]);
  const handleFormSubmit = e => {
    e.preventDefault();
    if (isUniqueName(name)) {
      addContact({ name, phone });
    }
    dispatchReducer({ type: 'reset', payload: initialValue });
  };
  const isUniqueName = newName => {
    const searchUnique = newName.toLowerCase();
    if (contacts.find(({ name }) => name.toLowerCase() === searchUnique)) {
      Notify.failure(`"${newName}" is already in contacts`);
      return false;
    }
    return true;
  };
  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    dispatchReducer({ type: name, payload: value });
  };
  return (
    <form className={s.form} onSubmit={handleFormSubmit}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleInputChange}
          required
        />
      </label>
      <label className={s.label}>
        phone
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={phone}
          onChange={handleInputChange}
          required
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
