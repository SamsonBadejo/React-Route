import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleFilter = () => {
    onFilter({ title, rating });
  };

  return (
    <div style={{ margin: '1rem 0' }}>
      <Form>
        <Form.Group controlId="titleFilter">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="ratingFilter">
          <Form.Label>Rating</Form.Label>
          <Form.Control type="number" placeholder="Enter rating" value={rating} onChange={(e) => setRating(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={handleFilter}>
          Filter
        </Button>
      </Form>
    </div>
  );
};

export default Filter;
