import React, { useContext } from 'react';
import { json } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { AuthContext } from '../ProviderContext/AuthProvider';

const AddToy = () => {

    const { user } = useContext(AuthContext)
    const handleAddToy = (e) => {

        e.preventDefault();
        const form = e.target;
        const seller = form.seller.value;
        const email = form.email.value;
        const toyName = form.toyName.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.detail.value;
        const addToys = { seller, email, toyName, category, photo, quantity, price, rating, description }
        fetch('https://toy-market-server-site.vercel.app/alldata', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addToys)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Toy added successfully")
                }
            })
    }

    return (
        <div className=' p-8 my-16'>
            <Helmet>
                <title>TF -AddToy</title>
            </Helmet>
            <form onSubmit={handleAddToy} >
                <div className='grid grid-cols-2 gap-5'>
                    <div className="form-control">

                        <input type="text" placeholder="Seller Name" name='seller' className="input input-bordered input-sm" />

                    </div>
                    <div className="form-control">

                        <input type="email" placeholder="Seller Email" name='email' className="input input-bordered input-sm" value={user.email} />

                    </div>
                    <div className="form-control">

                        <input type="text" placeholder="Toy Name" name='toyName' className="input input-bordered input-sm" />

                    </div>
                    <div className="form-control">

                        <input type="text" placeholder="Sub Category" name='category' className="input input-bordered input-sm" />

                    </div>
                    <div className="form-control">

                        <input type="text" placeholder="Photo url" name='photo' className="input input-bordered input-sm" />

                    </div>
                    <div className="form-control">

                        <input type="text" placeholder="Available quantity" name='quantity' className="input input-bordered input-sm" />

                    </div>
                    <div className="form-control">

                        <input type="text" placeholder="Price" name='price' className="input input-bordered input-sm" />

                    </div>
                    <div className="form-control">

                        <input type="text" placeholder="Rating" name='rating' className="input input-bordered input-sm" />

                    </div>
                    <div className="form-control">

                        <input type="text" placeholder="Detail description" name='detail' className=" input input-bordered input-sm" />

                    </div>
                </div>
                <div className='flex justify-center mt-5'>
                    <button className='bg-blue-600 px-3 py-2 rounded-lg text-white' >Add Toy</button>
                </div>
            </form>
        </div>
    );
};

export default AddToy;