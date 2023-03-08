import React from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../../images/search.svg';
import heartIcon from '../../images/heart.svg';
import cartIcon from '../../images/cart.svg';

function Header() {
  return (
    <header className="container mx-auto flex h-20 justify-between px-5">
      <div className="flex items-center justify-center text-center">
        <h2 className="text-3xl font-semibold">Miralou</h2>
      </div>
      <nav className="flex items-center justify-center gap-12 text-xl font-semibold">
        <Link className="hover:text-violet-600 hover:drop-shadow-md" to="/">
          Home
        </Link>
        <Link className="hover:text-violet-600 hover:drop-shadow-md" to="/shop">
          Shop
        </Link>
        <Link className="hover:text-violet-600 hover:drop-shadow-md" to="/product">
          Product
        </Link>
        <Link className="hover:text-violet-600 hover:drop-shadow-md" to="/blog">
          Blog
        </Link>
        <Link className="hover:text-violet-600 hover:drop-shadow-md" to="/page">
          Page
        </Link>
      </nav>
      <div className="flex w-40 items-center justify-center gap-4">
        <Link className="flex w-3/12 items-center justify-center" to="/search">
          <img className="hover:fill-color-white" src={searchIcon} alt="Search Icon" />
        </Link>
        <Link className="flex w-3/12 items-center justify-center" to="/favorites">
          <img src={heartIcon} alt="Heart Icon" />
        </Link>
        <Link className="flex w-3/12 items-center justify-center" to="/cart">
          <img src={cartIcon} alt="Cart Icon" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
