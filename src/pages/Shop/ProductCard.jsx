import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard() {
  return (
    <div>
      <div className="flex h-48 items-center justify-center bg-slate-300">
        <p>image</p>
      </div>
      <div className="text-center">
        <p className="mt-3 text-gray-400">Jordan</p>
        <h3 className="mt-3 font-bold uppercase">Air Jordan 1 mid</h3>
        <p className="mt-3 font-semibold text-red-600">$120</p>
        <Link
          className="mt-2 inline-block rounded-md  bg-black px-10 py-3 font-semibold text-white"
          to="/product/1">
          View product
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
