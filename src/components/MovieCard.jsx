// src/components/MovieCard.js
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, onDelete }) => {
  return (
    <Card
      style={{ width: "18rem", margin: "1rem", transition: "transform 0.2s" }}
      className="movie-card"
    >
      <Card.Img variant="top" src={movie.posterURL} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Card.Text>Rating: {movie.rating}</Card.Text>
        <Link to={`/movie/${movie.title}`}>
          <Button variant="primary" style={{ marginRight: "1rem" }}>View Details</Button>
        </Link>
        <Button variant="danger" onClick={() => onDelete(movie.title)}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
