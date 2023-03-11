import React from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div className="Cart">
      <div className="flex h-60 items-center bg-slate-700">
        <div className="container mx-auto px-5">
          <p className="text-sm text-white">Home / Shopping cart</p>
          <h1 className="mt-3 text-4xl font-bold uppercase text-white">Shopping cart</h1>
        </div>
      </div>
      <div className="container mx-auto mt-10 px-5">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <p className="text-2xl font-bold uppercase">Product</p>
            <div className="Order mt-6 grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4">
                <button type="button" className="m-4">
                  X
                </button>
                <div className="flex h-20 w-40 items-center justify-center bg-slate-400">
                  <p>Image</p>
                </div>
                <p className="name text-lg font-bold uppercase">Jordan delta 3 sp</p>
                <button type="button" className="ml-10 rounded-md border border-red-500 p-2">
                  + 1 —
                </button>
                <p className="price ml-10 text-lg font-bold uppercase text-gray-400">$ 110</p>
              </div>
              <div className="flex items-center gap-4">
                <button type="button" className="m-4">
                  X
                </button>
                <div className="flex h-20 w-40 items-center justify-center bg-slate-400">
                  <p>Image</p>
                </div>
                <p className="name text-lg font-bold uppercase">Nike air forse 1'07</p>
                <button type="button" className="ml-10 rounded-md border border-red-500 p-2">
                  + 1 —
                </button>
                <p className="price ml-10 text-lg font-bold uppercase text-gray-400">$ 228</p>
              </div>
            </div>
          </div>
          <div>
            <div className="CartTotals h-60 bg-gray-800 p-6">
              <p className="text-lg font-bold uppercase text-white">Cart totals</p>
              <p className="text-sm font-bold text-gray-400">Subtotals:</p>
              <p className="text-lg font-bold uppercase text-white">Shipping</p>
              <p className="text-sm font-bold text-gray-400">Flat Rate: $15</p>
              <p className="text-sm font-bold text-gray-400">Where to: London, UK</p>
              <p className="text-lg font-bold uppercase text-white">Total:</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mt-5">
                <Link
                  to="/checkout"
                  className="inline-block w-full rounded-md border border-red-500 py-2 text-center text-xl font-semibold hover:border-0 hover:bg-indigo-600 hover:text-white hover:shadow-lg active:bg-indigo-700">
                  Proceed to checkout
                </Link>
              </div>
              <div className="mt-5">
                <Link
                  to="/shop"
                  className="inline-block w-full rounded-md border border-red-500 py-2 text-center text-xl font-semibold hover:border-0 hover:bg-indigo-600 hover:text-white hover:shadow-lg active:bg-indigo-700">
                  Continue shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
