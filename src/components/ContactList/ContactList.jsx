import React, { useMemo } from 'react';

import { useFetchContactsQuery } from 'redux/contactsSlice';

import { ContactItem } from '../ContactItem/ContactItem';

import { useSelector, shallowEqual } from 'react-redux';

import { getFilter } from '../../redux/selectors';
import Loader from 'components/Loader';

import ListGroup from 'react-bootstrap/ListGroup';

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

  return (
    <ListGroup
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
      }}
      variant="flush"
    >
      {elements}
    </ListGroup>
  );
}
