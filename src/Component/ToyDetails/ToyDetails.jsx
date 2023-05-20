import { Result } from 'postcss';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet";

const ToyDetails = () => {
    const { id } = useParams();
    const [allData, setAllData] = useState([]);

    console.log(id)

    useEffect(() => {
        fetch('http://localhost:5000/alldata')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    let result = allData?.find(data => data._id == id)
    // const { seller, toyName, email, category, quantity, price, photo, rating } = result;
    console.log(result)
    return (
        <div>
            <Helmet>
                <title>TF -Toy Details</title>
            </Helmet>
            <div className='flex justify-center items-center gap-24'>
                <div className='border px-5 py-5 w-[25%] shadow-lg'>
                    {
                        result?.photo ? <img className='' src={result?.photo} alt="" /> : <div className='w-[100%]'>
                            <h1>ghdh{result?.photo}</h1>
                        </div>
                    }
                    < p className='text-3xl font-semibold'>{result?.toyName}</p>
                    <p>Price: {result?.price}</p>
                    <p>Rating: {result?.rating}</p>
                </div>
                <div className='border py-28 px-5 shadow-lg'>
                    <h1 className='text-5xl font-bold text-center'>Seller Information</h1>
                    <hr className='my-5' />
                    <p className='text-2xl'>
                        <span className='text-2xl font-semibold'>Name:</span> {result?.seller}
                    </p>
                    <p className='text-2xl'>
                        <span className='text-2xl font-semibold'>Seller Email:</span> {result?.email}
                    </p>
                    <p className='text-2xl'>
                        <span className='text-2xl font-semibold'>Cateogry:</span> {result?.category}
                    </p>
                    <p className='text-2xl'>
                        <span className='text-2xl font-semibold'>Available Quantity:</span> {result?.quantity
                        }</p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;