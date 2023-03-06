import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Product() {
  const { productId } = useParams();

  return (
    <div>
      <h1>Product {productId}</h1>
      <Link to='/catalog'>Catalog</Link>
      <Link to='/cart'>Add to cart</Link>
    </div>
  );
}

export default Product;
