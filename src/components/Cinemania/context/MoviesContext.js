import React, { createContext, useState } from 'react';

export const MoviesContext = createContext();

const initialLibrary = [
  { id: 'id-1', title: 'Rosie Simpson', release_date: '2023-01-01', poster_path: '/path/to/poster1.jpg' },
  { id: 'id-2', title: 'Hermione Kline', release_date: '2023-01-02', poster_path: '/path/to/poster2.jpg' },
  { id: 'id-3', title: 'Eden Clements', release_date: '2023-01-03', poster_path: '/path/to/poster3.jpg' },
  { id: 'id-4', title: 'Annie Copeland', release_date: '2023-01-04', poster_path: '/path/to/poster4.jpg' },
];

export const MoviesProvider = ({ children }) => {
  const [library, setLibrary] = useState(initialLibrary);

  const addToLibrary = movie => {
    setLibrary(prevLibrary => [...prevLibrary, movie]);
  };

  const removeFromLibrary = id => {
    setLibrary(prevLibrary => prevLibrary.filter(movie => movie.id !== id));
  };

  return (
    <MoviesContext.Provider value={{ library, addToLibrary, removeFromLibrary }}>
      {children}
    </MoviesContext.Provider>
  );
};
