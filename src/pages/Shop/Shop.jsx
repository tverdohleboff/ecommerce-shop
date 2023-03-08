import React from 'react';
import ProductCard from './ProductCard';

function Shop() {
  return (
    <div className="container mx-auto px-5">
      <h1 className="p-2 text-center">I am Shop!</h1>
      <div className="grid grid-cols-4 gap-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default Shop;
