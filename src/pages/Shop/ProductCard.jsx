import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard() {
  return (
    <Link to="/product/1" className="hover:drop-shadow-sm">
      <div className="flex h-48 items-center justify-center bg-slate-300">
        <p>image</p>
      </div>
      <div className="text-center">
        <p className="mt-3 text-gray-400">Jordan</p>
        <h3 className="mt-3 font-bold uppercase hover:text-indigo-600">Air Jordan 1 mid</h3>
        <p className="mt-3 font-bold text-red-600">$120</p>
        <button
          type="button"
          className="mt-2 inline-block rounded-md bg-black px-10 py-3 font-semibold text-white hover:bg-indigo-600 hover:shadow-lg active:bg-indigo-700">
          View product
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;
