import React, { useContext } from 'react';
import { MoviesContext } from './context/MoviesContext';
import MovieCard from './MovieCard';
import './Library.css';

const Library = () => {
  const { library, removeFromLibrary } = useContext(MoviesContext);

  return (
    <div className="library">
      <h2>My Library</h2>
      <div className="movies-container">
        {library.map(movie => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
            <button onClick={() => removeFromLibrary(movie.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;

