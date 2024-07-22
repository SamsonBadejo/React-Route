// src/components/MovieDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const MovieDetail = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find(movie => movie.title === title);

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={movie.trailer} allowFullScreen></iframe>
      </div>
      <Link to="/">
        <Button variant="primary" style={{ marginTop: '1rem' }}>Back to Home</Button>
      </Link>
    </div>
  );
};

export default MovieDetail;
