import React from 'react';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}

export default MainLayout;
