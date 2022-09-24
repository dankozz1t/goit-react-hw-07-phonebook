import React, { useMemo } from 'react';

import { useFetchContactsQuery } from 'redux/contactsSlice';

import { ContactItem } from '../ContactItem/ContactItem';

import s from './ContactList.module.css';

import { useSelector, shallowEqual } from 'react-redux';

import { getFilter } from '../../redux/selectors';
import Loader from 'components/Loader';

export function ContactList() {
  const filter = useSelector(getFilter, shallowEqual);
  const { data: contacts, isFetching } = useFetchContactsQuery();

  const filteredContacts = useMemo(() => {
    if (isFetching) {
      return;
    }

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }, [filter, contacts, isFetching]);

  if (isFetching) {
    return <Loader />;
  }

  const elements = filteredContacts.map(({ id, name, phone }) => (
    <ContactItem key={id} id={id} name={name} phone={phone} />
  ));

  return <ul className={s.list}>{elements}</ul>;
}
