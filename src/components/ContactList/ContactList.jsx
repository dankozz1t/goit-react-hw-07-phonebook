import React, { useMemo } from 'react';

import { useFetchContactsQuery } from 'redux/contactsAPI';

import ContactItem from '../ContactItem/';

import { useSelector, shallowEqual } from 'react-redux';

import { getFilter } from '../../redux/selectors';
import Loader from 'components/Loader';

import ListGroup from 'react-bootstrap/ListGroup';

const ContactList = () => {
  const filter = useSelector(getFilter, shallowEqual);
  const { data: contacts, isLoading } = useFetchContactsQuery();

  const filteredContacts = useMemo(() => {
    if (isLoading) {
      return;
    }

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }, [filter, contacts, isLoading]);

  if (isLoading) {
    return <Loader />;
  }

  if (filteredContacts.length === 0) {
    return (
      <h2 className="text" style={{ fontSize: '40px' }}>
        Contact not found
      </h2>
    );
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
};

export default ContactList;
