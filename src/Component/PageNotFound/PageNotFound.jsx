import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='w-full relative'>
            <Helmet>
                <title>TF -Page Not Found</title>
            </Helmet>
            <img className='w-[100%] h-[38.7rem]' src="https://i.ibb.co/3TvsR2G/404.png" alt="" />
            <Link to='/' className='absolute  left-[50%] bottom-10'> <button className='btn btn-primary'> Back to Home</button></Link>
        </div>
    );
};

export default PageNotFound;