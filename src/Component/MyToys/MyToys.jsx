import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../ProviderContext/AuthProvider';
import MyToyRow from './MyToyRow';
import { Helmet } from "react-helmet";

const MyToys = () => {
    const { user, loading } = useContext(AuthContext)
    const [userToy, setUsertoy] = useState([])
    console.log(user.email)

    useEffect(() => {
        fetch(`http://localhost:5000/alldata?email=${user.email}`)
            .then(res => res.json())
            .then(data => setUsertoy(data))
    }, [])

    const handleDelete = (id) => {
        console.log(id)
        const proceed = confirm("Are you sure?")
        if (proceed) {
            fetch(`http://localhost:5000/alldata/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert("Delete successful")
                        const remaining = userToy.filter(toy => toy._id !== id)
                        setUsertoy(remaining)
                    }
                })

        }
    }


    return (
        <div className='mt-24 mb-64'>
            <Helmet>
                <title>TF -MyToys</title>
            </Helmet>
            <p className='text-4xl font-semibold mb-5'> Total Toy Added {userToy.length}</p>
            <button className='btn btn-primary'>sort</button>
            <div className="">
                <table className=" table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>

                            <th></th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>

                        {userToy && userToy.map(toy => <MyToyRow
                            key={toy._id}
                            toy={toy}
                            handleDelete={handleDelete}
                        ></MyToyRow>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;