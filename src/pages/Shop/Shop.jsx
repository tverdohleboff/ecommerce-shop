import React from 'react';
import ProductCard from './ProductCard';

function Shop() {
  return (
    <div>
      <div className="flex h-40 items-center bg-slate-700">
        <div className="container mx-auto px-5">
          <p>{}</p>
          <h1 className="text-3xl font-bold uppercase leading-10 text-white">Shop</h1>
        </div>
      </div>
      <div className="container mx-auto px-5">
        <div className="mt-10 grid grid-cols-4 gap-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default Shop;
