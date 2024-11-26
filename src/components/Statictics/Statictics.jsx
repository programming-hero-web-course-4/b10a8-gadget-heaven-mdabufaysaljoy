import React from 'react';
import LaptopPriceChart from './Statistic';

const Statictics = () => {
    return (
      <>
        <div className="bg-primary flex justify-center items-center text-white">
          <div className="space-y-4 py-12 text-center">
            <h1 className="text-3xl font-bold "> Statictics</h1>
            <p>
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
        <div className="py-12 flex justify-center items-center">
          <LaptopPriceChart />
        </div>
      </>
    );
};

export default Statictics;