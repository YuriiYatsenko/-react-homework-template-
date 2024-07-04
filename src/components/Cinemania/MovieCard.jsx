import React, { useContext } from 'react';
import { MoviesContext } from './context/MoviesContext';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const { library, addToLibrary, removeFromLibrary } = useContext(MoviesContext);

  const isMovieInLibrary = library.some(libMovie => libMovie.id === movie.id);

  const handleButtonClick = () => {
    if (isMovieInLibrary) {
      removeFromLibrary(movie.id);
    } else {
      addToLibrary(movie);
    }
  };

  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
      <button onClick={handleButtonClick}>
        {isMovieInLibrary ? 'Remove from Library' : 'Add to Library'}
      </button>
    </div>
  );
};

export default MovieCard;










