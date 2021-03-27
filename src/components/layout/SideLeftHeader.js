import React from 'react';
import { Link } from 'react-router-dom';

function SideLeftHeader() {
  return (
    <div>
      <a>
        <Link to="/home">Blog</Link>
      </a>
      <a>
        <Link to="/youtubeClone">Youtube API</Link>
      </a>
    </div>
  );
}

export default SideLeftHeader;
