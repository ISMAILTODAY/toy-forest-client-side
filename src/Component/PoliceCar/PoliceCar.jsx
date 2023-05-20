import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const PoliceCar = ({ policeCar }) => {
    const { name, picture, price, rating } = policeCar;
    return (
        <div>
            {/* <Helmet>
                <title>TF -Mini Police Car</title>
            </Helmet> */}
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className='w-[50%]' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions justify-end">
                        <Link><button className="btn btn-primary">Show Details</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PoliceCar;