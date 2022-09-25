import React from 'react';
import PropTypes from 'prop-types';

import { useDeleteContactMutation } from '../../redux/contactsAPI';

import { toast } from 'react-toastify';
import Loader from 'components/Loader';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting, isError }] =
    useDeleteContactMutation();

  const handleDeleteClick = () => {
    deleteContact(id);

    toast.info(`"${name}" removed from your contacts`);
  };

  if (isError) {
    toast.info(`Error`);
    return (
      <h2 className="text" style={{ fontSize: '40px' }}>
        ERROR
      </h2>
    );
  }

  return (
    <ListGroup.Item
      style={{
        borderRadius: '5px',
      }}
    >
      <Row>
        <Col xs={5}>
          <span style={{ fontWeight: '700' }}> {name} </span>
        </Col>
        <Col xs={4}>
          <span style={{ color: 'darkred', fontWeight: '600' }}> {phone} </span>
        </Col>
        <Col>
          <Button
            type="button"
            onClick={handleDeleteClick}
            disabled={isDeleting}
            variant="primary"
          >
            {isDeleting ? (
              <Loader width="45" height="10" color="#fff" />
            ) : (
              <span>Delete</span>
            )}
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;
