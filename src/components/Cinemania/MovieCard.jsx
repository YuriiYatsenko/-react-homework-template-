import React from 'react';
import './MovieCard.css'; // Припустимо, що це файли стилів для MovieCard

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
      <div className="info">
        <h2>{movie.title}</h2>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Overview:</strong> {movie.overview}</p>
        <p><strong>Original Title:</strong> {movie.original_title}</p>
        <p><strong>Original Language:</strong> {movie.original_language}</p>
        <p><strong>Popularity:</strong> {movie.popularity}</p>
        <p><strong>Vote Average:</strong> {movie.vote_average}</p>
        <p><strong>Vote Count:</strong> {movie.vote_count}</p>
        <p><strong>Genres:</strong> {movie.genre_ids.map(genre => <span key={genre}>{genre}</span>)}</p>
      </div>
    </div>
  );
};

export default MovieCard;



