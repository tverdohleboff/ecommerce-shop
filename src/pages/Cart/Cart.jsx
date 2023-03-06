import React from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div>
      <h1>Cart</h1>
      <Link to='/checkout'>Checkout</Link>
    </div>
  );
}

export default Cart;
