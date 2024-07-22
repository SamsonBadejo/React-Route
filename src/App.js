import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/addMovie";
import MovieDetail from "./components/MovieDetail";
import Container from "react-bootstrap/Container";

const initialMovies = [
  {
    title: "Bloodshot",
    description: "It follows a soldier who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon.",
    posterURL: "https://upload.wikimedia.org/wikipedia/en/4/45/Bloodshot_-_official_film_poster.jpeg",
    rating: 4,
    trailer: "https://www.youtube.com/embed/vOUVVDWdXbo"
  },
  {
    title: "Resident Evil",
    description: "A special military unit fights a powerful, out-of-control supercomputer and hundreds of scientists who have mutated into flesh-eating creatures after a laboratory accident.",
    posterURL: "https://upload.wikimedia.org/wikipedia/en/a/a1/Resident_evil_ver4.jpg",
    rating: 5,
    trailer: "https://www.youtube.com/embed/PWUT-l1A5iY"
  },
  {
    title: "The Old Guard",
    description: "A covert team of immortal mercenaries are suddenly exposed and must now fight to keep their identity a secret just as an unexpected new member is discovered.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BZTY5YTk0ZDMtODg0Zi00OGM4LTgxMTQtODAzODg2ZjE2MmM1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    rating: 4,
    trailer: "https://www.youtube.com/embed/aK-X2d0lJ_s"
  }
];

const App = () => {
  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);

  const handleFilter = ({ title, rating }) => {
    const filtered = movies.filter(
      (movie) =>
        (title
          ? movie.title.toLowerCase().includes(title.toLowerCase())
          : true) && (rating ? movie.rating >= rating : true)
    );
    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  const handleDeleteMovie = (title) => {
    const updatedMovies = movies.filter(movie => movie.title !== title);
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  return (
    <Router>
      <Container
        style={{
          backgroundColor: "#f0f0f0",
          padding: "2rem",
          borderRadius: "8px",
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 style={{ color: "red", textAlign: "center", marginBottom: "1rem" }}>
                  Movie List
                </h1>
                <Filter onFilter={handleFilter} />
                <AddMovie onAdd={handleAddMovie} />
                <MovieList movies={filteredMovies} onDelete={handleDeleteMovie} />
              </>
            }
          />
          <Route path="/movie/:title" element={<MovieDetail movies={movies} />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
