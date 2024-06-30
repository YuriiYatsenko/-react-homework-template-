import React, { useContext } from 'react';
import { MoviesContext } from './context/MoviesContext';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const { addToLibrary } = useContext(MoviesContext);

  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
      <button onClick={() => addToLibrary(movie)}>Add to Library</button>
    </div>
  );
};

export default MovieCard;




