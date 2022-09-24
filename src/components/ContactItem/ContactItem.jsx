import React from 'react';
import PropTypes from 'prop-types';

import { useDeleteContactMutation } from '../../redux/contactsSlice';

import s from './ContactItem.module.css';

export function ContactItem({ id, name, phone }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <li className={s.item}>
      <p>
        <span className={s.name}>{name}</span>: {phone}
      </p>
      <button
        className={s.btn}
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
