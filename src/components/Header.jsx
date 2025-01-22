import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="icon">🎥</div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/new">Registrar Video</Link>
    </nav>
  </header>
);

export default Header;
