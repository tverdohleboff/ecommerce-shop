import React from 'react';
import ProductCard from './ProductCard';

function Shop() {
  return (
    <div className="Shop">
      <div className="flex h-60 items-center bg-slate-700">
        <div className="container mx-auto px-5">
          <p className="text-sm text-white">Home / Shop</p>
          <h1 className="mt-3 text-4xl font-bold uppercase text-white">Shop</h1>
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
