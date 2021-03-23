import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <div className="Header">
      <a>
        <Link to="/">BLOG</Link>
      </a>
      <a>
        <Link to="/home">Home</Link>
      </a>
      <a>
        <Link to="/about">About</Link>
      </a>
      <a>
        <Link to="/contact">Contact</Link>
      </a>
    </div>
  );
}

export default Header;
