// src/components/MovieList.js
import React from 'react';
import MovieCard from './MovieCard';
import Row from 'react-bootstrap/Row';

const MovieList = ({ movies, onDelete }) => {
  return (
    <Row>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} onDelete={onDelete} />
      ))}
    </Row>
  );
};

export default MovieList;
