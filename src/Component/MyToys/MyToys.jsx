import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../ProviderContext/AuthProvider';
import MyToyRow from './MyToyRow';
import { Helmet } from "react-helmet";

const MyToys = () => {
    const { user, loading } = useContext(AuthContext)
    const [userToy, setUsertoy] = useState([])
    const [ascending, setAscending] = useState('1')
    console.log(user.email)

    useEffect(() => {
        fetch(`https://toy-market-server-site.vercel.app/alldata?email=${user.email}&sort=${ascending}`)
            .then(res => res.json())
            .then(data => setUsertoy(data))
    }, [ascending])
    const handleAscending = () => {
        setAscending("-1")
    }
    const handleDscending = () => {
        setAscending("1")
    }

    const handleDelete = (id) => {
        console.log(id)
        const proceed = confirm("Are you sure?")
        if (proceed) {
            fetch(`https://toy-market-server-site.vercel.app/alldata/${id}`, {
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
            <div className='flex justify-end gap-10 absolute top-20 right-10'>
                <button onClick={handleAscending} className='btn btn-primary'>Sort by Descending</button>
                <button onClick={handleDscending} className='btn btn-primary'>Sort by Ascending</button>
            </div>
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

                            <th>Edit</th>
                            <th>delete</th>

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