import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {

    return (
      <div>
        <div className=" text-primary h-screen  flex flex-col gap-6 justify-center items-center">
                <h1 className="text-3xl font-bold">{} not found</h1>
                <Link to="/" className="px-4 py-3 text-primary border-2 border-primary rounded-xl">Back to the home page</Link>
        </div>

      </div>
    );
};

export default NotFound;