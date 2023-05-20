import React from 'react';
import { Helmet } from "react-helmet";

const PageNotFound = () => {
    return (
        <div className='w-full'>
            <Helmet>
                <title>TF -Page Not Found</title>
            </Helmet>
            <img className='w-[100%] h-[38.7rem]' src="https://i.ibb.co/3TvsR2G/404.png" alt="" />
        </div>
    );
};

export default PageNotFound;