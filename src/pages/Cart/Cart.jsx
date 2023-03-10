import React from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div className="container mx-auto px-5">
      <div className="h-40 bg-slate-200">
        <h1>Cart</h1>
      </div>
      <div className="flex items-end justify-end">
        <Link to="/checkout" className="text-xl">
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
