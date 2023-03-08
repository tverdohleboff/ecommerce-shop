import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Hello!</h1>
      <Link to='/shop'>Shop</Link>
    </div>
  );
}

export default HomePage;
