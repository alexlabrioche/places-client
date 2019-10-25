import React from 'react';
import { Link } from 'react-router-dom';

function PublicHome() {
  return (
    <div>
      Public Home
      <Link to="/sign">Sign</Link>
    </div>
  );
}

export default PublicHome;
