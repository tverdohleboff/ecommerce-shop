import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';

function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
