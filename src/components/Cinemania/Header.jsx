import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Cinemania</div>
      <nav>
        <Link to="/cinemania">Home</Link>
        <Link to="/cinemania/catalog">Catalog</Link>
        <Link to="/cinemania/library">My Library</Link>
      </nav>
    </header>
  );
};

export default Header;

