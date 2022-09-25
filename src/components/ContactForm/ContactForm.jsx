import React, { useEffect, useReducer } from 'react';

import {
  useAddContactMutation,
  useFetchContactsQuery,
} from '../../redux/contactsAPI';

import { toast } from 'react-toastify';

import { login } from '../Confetti/utils';

import Loader from 'components/Loader';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import inputReducer from './inputReducer';

const initialValue = {
  phone: '',
  name: '',
};

const ContactForm = () => {
  const [{ name, phone }, dispatchReducer] = useReducer(
    inputReducer,
    initialValue
  );

  const { data: contacts } = useFetchContactsQuery();
  const [addContact, { isLoading: isDeleting, isError }] =
    useAddContactMutation();

  useEffect(() => {
    login.submit();
  }, [contacts]);

  const handleFormSubmit = e => {
    e.preventDefault();
    if (isUniqueName(name)) {
      addContact({ name, phone });
      toast.info(`"${name}" added to your contacts`);
    }
    dispatchReducer({ type: 'reset', payload: initialValue });
  };

  const isUniqueName = newName => {
    const searchUnique = newName.toLowerCase();
    if (contacts.find(({ name }) => name.toLowerCase() === searchUnique)) {
      toast.info(`"${newName}" is already in contacts`);
      return false;
    }
    return true;
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    dispatchReducer({ type: name, payload: value });
  };

  if (isError) {
    toast.info(`ERROR`);
    return;
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <Row className="align-items-center">
        <Col xs="auto">
          <Form.Label htmlFor="name" className="text">
            Name
          </Form.Label>
          <Form.Control
            className="mb-2"
            id="name"
            placeholder="Alex"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleInputChange}
            required
          />
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="phone" className="text">
            Phone
          </Form.Label>
          <Form.Control
            className="mb-2"
            id="phone"
            placeholder="410-371-6599"
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={phone}
            onChange={handleInputChange}
            required
          />
        </Col>
      </Row>
      <div className="d-grid gap-2">
        <Button variant="primary" type="submit" disabled={isDeleting}>
          {isDeleting ? (
            <Loader width="45" height="10" color="#fff" />
          ) : (
            <span>Add Contact</span>
          )}
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
