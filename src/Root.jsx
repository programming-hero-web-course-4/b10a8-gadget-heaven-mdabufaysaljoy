import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

const Root = () => {
    return (
      <>
        <div className="max-w-7xl mx-auto my-4">
                <Navbar />
                <Outlet />
        </div>
          <Footer />
      </>
    );
};

export default Root;