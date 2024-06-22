import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Cinemania.css';

const HomePage = lazy(() => import('./HomePage'));
const MovieDetails = lazy(() => import('./MovieDetails'));

const Cinemania = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default Cinemania;

