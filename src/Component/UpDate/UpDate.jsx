import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Helmet } from "react-helmet";

const UpDate = () => {

    const { id } = useParams()
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const description = form.detail.value;
        const updated = { quantity, price, description }

        fetch(`https://toy-market-server-site.vercel.app/alldata/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Data successfully updated')
                }

            })
    }
    return (
        <div className=' p-8 my-16'>
            <Helmet>
                <title>TF -Update Data</title>
            </Helmet>
            <form onSubmit={handleUpdate} >
                <div className='grid grid-cols-2 gap-5'>



                    <div className="form-control">

                        <input type="text" placeholder="Available quantity" name='quantity' className="input input-bordered input-sm" />

                    </div>
                    <div className="form-control">

                        <input type="text" placeholder="Price" name='price' className="input input-bordered input-sm" />

                    </div>

                    <div className="form-control">

                        <input type="text" placeholder="Detail description" name='detail' className=" input input-bordered input-sm" />

                    </div>
                </div>
                <div className='flex justify-center mt-5'>
                    <button className='bg-blue-600 px-3 py-2 rounded-lg text-white' >Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpDate;