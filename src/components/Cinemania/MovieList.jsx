import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=e228a48ce493c266d1ac0e25cdb4d9c4');
        setMovies(response.data.results); // assuming 'results' is the array of movies in the response
      } catch (error) {
        console.error('Error fetching movies:', error);
        setMovies([]); // set empty array or handle error state as needed
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

