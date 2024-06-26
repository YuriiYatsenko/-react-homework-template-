import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import './HomePage.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch trending movies
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=e228a48ce493c266d1ac0e25cdb4d9c4')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => {
      });
  }, []);

  return (
    <div className="home-wrapper">
      <section>
        <h1>Weekly Trends</h1>
        <MovieList movies={movies} />
      </section>
      {/* Add other sections as necessary */}
    </div>
  );
};

export default HomePage;

