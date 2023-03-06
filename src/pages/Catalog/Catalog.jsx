import React from 'react';
import { Link } from 'react-router-dom';

function Catalog() {
  return (
    <div>
      <h1>I am Catalog!</h1>
      <Link to='/product/1'>Product-1</Link>
      <Link to='/product/2'>Product-2</Link>
    </div>
  );
}

export default Catalog;
