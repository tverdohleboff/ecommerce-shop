import React from 'react';
import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <div>
      <h1>Thank You!</h1>
      <Link to='/catalog'>Catalog</Link>
    </div>
  );
}

export default ThankYou;
