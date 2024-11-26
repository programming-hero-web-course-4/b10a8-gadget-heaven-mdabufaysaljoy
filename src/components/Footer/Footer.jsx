import React from 'react';

const Footer = () => {
    return (
      <div className="text-center mt-20 py-12 bg-white">
        <div className="container mx-auto px-4 space-y-2 pb-4 border-b-2">
          <h2 className="text-3xl font-bold">Gadget Haven</h2>
          <p className="text-sm text-secondary/60">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <div className="max-w-xl mx-auto px-4 py-8 flex justify-between">
          <div className="space-y-3">
            <h3 className='text-lg font-bold'>Service</h3>
            <ul className='text-sm text-secondary/70 space-y-2'>
              <li>
                <a href="#">Product Support</a>
              </li>
              <li>
                <a href="#">Order Tracking</a>
              </li>
              <li>
                <a href="#">Shipping & Delivery</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className='text-lg font-bold'>Company</h3>
            <ul className='text-sm text-secondary/70 space-y-2'>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
                    <h3 className='text-lg font-bold'>Legal</h3>
                    <ul className='text-sm text-secondary/70 space-y-2'>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                    </ul>
          </div>
        </div>
      </div>
    );
};

export default Footer;