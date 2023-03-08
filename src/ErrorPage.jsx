import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex-col text-center" id="error-page">
      <h1 className="mt-40 text-2xl font-semibold">Oops!</h1>
      <Link to="/shop">
        <p className="mt-5 text-xl  hover:text-green-400">
          Sorry, an unexpected error has occurred.
        </p>
      </Link>
      <p className="mt-5">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
