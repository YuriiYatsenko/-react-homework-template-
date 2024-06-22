import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e228a48ce493c266d1ac0e25cdb4d9c4`)
      .then(response => response.json())
      .then(data => setMovie(data));
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-wrapper">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div className="info">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        {/* Add more movie details as necessary */}
      </div>
    </div>
  );
};

export default MovieDetails;
