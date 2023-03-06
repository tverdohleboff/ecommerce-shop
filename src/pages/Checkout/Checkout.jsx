import React from 'react';
import { Link } from 'react-router-dom';

function Checkout() {
  return (
    <div>
      <h1>Checkout</h1>
      <Link to='/cart'>Cart</Link>
      <Link to='/thank-you'>Proceed to payment</Link>
    </div>
  );
}

export default Checkout;
