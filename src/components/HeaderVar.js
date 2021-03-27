import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderVar.css';

function HeaderVar() {
  return (
    <div className="HeaderVar">
      <Link to="/home">K-LOG</Link>
    </div>
  );
}

export default HeaderVar;
