import React from 'react';

const TruckCar = ({ truckToy }) => {
    const { name, picture, price, rating } = truckToy;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className='w-[50%]' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Show Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TruckCar;