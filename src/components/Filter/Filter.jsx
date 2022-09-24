import React from 'react';

import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Filter = () => {
  const filter = useSelector(getFilter, shallowEqual);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Form style={{ marginTop: '20px' }}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={6} className="text">
          Find contacts by name
        </Form.Label>
        <Col sm={6}>
          <Form.Control
            type="text"
            placeholder="Alex"
            onChange={handleFilterChange}
            value={filter}
            name="filter"
            title="Find contacts by name"
          />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default Filter;
