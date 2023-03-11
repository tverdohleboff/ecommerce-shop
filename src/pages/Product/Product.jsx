import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Product() {
  const { productId } = useParams();

  return (
    <div className="container mx-auto px-5">
      <div className="grid grid-cols-2 gap-8">
        <div className="">
          <div className="h-80 bg-slate-200">Image</div>
        </div>
        <div className="">
          <p className="text-xl font-bold uppercase">Product {productId}</p>
          <p className="mt-2 text-xl font-bold uppercase text-red-600">$ 110</p>
          <div className="mt-4 flex gap-4">
            <label>
              <input className="peer sr-only" name="size" type="radio" value="xs" checked />
              <div className="flex h-14 w-14 items-center justify-center rounded-md border border-red-500 text-slate-700 peer-checked:bg-slate-900 peer-checked:font-semibold peer-checked:text-white">
                XS
              </div>
            </label>
            <label>
              <input className="peer sr-only" name="size" type="radio" value="s" />
              <div className="flex h-14 w-14 items-center justify-center rounded-md border border-red-500 text-slate-700 peer-checked:bg-slate-900 peer-checked:font-semibold peer-checked:text-white">
                S
              </div>
            </label>
            <label>
              <input className="peer sr-only" name="size" type="radio" value="m" />
              <div className="flex h-14 w-14 items-center justify-center rounded-md border border-red-500 text-slate-700 peer-checked:bg-slate-900 peer-checked:font-semibold peer-checked:text-white">
                M
              </div>
            </label>
            <label>
              <input className="peer sr-only" name="size" type="radio" value="l" />
              <div className="flex h-14 w-14 items-center justify-center  rounded-md border border-red-500 text-slate-700 peer-checked:bg-slate-900 peer-checked:font-semibold peer-checked:text-white">
                L
              </div>
            </label>
            <label>
              <input className="peer sr-only" name="size" type="radio" value="xl" />
              <div className="flex h-14 w-14 items-center justify-center rounded-md border border-red-500 text-slate-700 peer-checked:bg-slate-900 peer-checked:font-semibold peer-checked:text-white">
                XL
              </div>
            </label>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-8">
            <div>
              <Link
                className="inline-block w-full rounded-md border border-red-500 py-2 text-center text-xl font-semibold"
                to="/cart">
                Add to cart
              </Link>
            </div>
            <div>
              <Link
                className="inline-block w-full rounded-md border border-red-500 py-2 text-center text-xl font-semibold"
                to="/favorite">
                Add to favorite
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
