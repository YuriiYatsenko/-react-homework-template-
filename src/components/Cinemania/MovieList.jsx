import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard'; // Коректний імпорт MovieCard
import './MovieList.css'; // Додайте стилі для MovieList

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=e228a48ce493c266d1ac0e25cdb4d9c4');
        setMovies(response.data.results); // assuming 'results' is the array of movies in the response
      } catch (error) {
        setMovies([]); // set empty array or handle error state as needed
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-list">
      <h2>Movie List</h2>
      <div className="movies-container">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;



