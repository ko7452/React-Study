import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <div className="Header">
      <a>
        <Link to="/PostList">게시글</Link>
      </a>
      <a>
        <Link to="/CreatePage">글작성</Link>
      </a>
      <a>
        <Link to="/contact">Delete</Link>
      </a>
    </div>
  );
}

export default Header;
