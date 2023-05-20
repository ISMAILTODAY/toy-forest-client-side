import React, { useEffect, useState } from 'react';
import ToyRow from './toyRow';
import { Helmet } from "react-helmet";

const AllToy = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://toy-market-server-site.vercel.app/alldata')
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])

    return (
        <div className="mt-24">
            <Helmet>
                <title>TF -AllToy</title>
            </Helmet>
            <div>
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            toys && toys.length > 20 ? toys.slice(0, 20).map(toy => <ToyRow
                                key={toy._id}
                                toy={toy}
                            ></ToyRow>) : toys.map(toy => <ToyRow
                                key={toy._id}
                                toy={toy}
                            ></ToyRow>)}
                    </tbody>
                </table>
                <div className='flex justify-center mt-10'>
                    <button className={`btn btn-primary  ${toys?.length > 20 ? 'block' : 'hidden'}`}>see more</button>
                </div>
            </div>
        </div>
    );
};

export default AllToy;