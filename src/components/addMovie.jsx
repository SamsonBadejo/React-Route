import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddMovie = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleAddMovie = () => {
    if (title && description && posterURL && rating) {
      onAdd({ title, description, posterURL, rating: parseFloat(rating) });
      setTitle('');
      setDescription('');
      setPosterURL('');
      setRating('');
    }
  };

  return (
    <div style={{ margin: '1rem 0' }}>
      <Form>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="posterURL">
          <Form.Label>Poster URL</Form.Label>
          <Form.Control type="text" placeholder="Enter poster URL" value={posterURL} onChange={(e) => setPosterURL(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="rating">
          <Form.Label>Rating</Form.Label>
          <Form.Control type="number" placeholder="Enter rating" value={rating} onChange={(e) => setRating(e.target.value)} />
        </Form.Group>
        <Button variant="success" onClick={handleAddMovie}>
          Add Movie
        </Button>
      </Form>
    </div>
  );
};

export default AddMovie;
