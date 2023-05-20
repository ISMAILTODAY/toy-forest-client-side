import React from 'react';
import { Link } from 'react-router-dom';



const MyToyRow = ({ toy, handleDelete }) => {
    const { seller, toyName, category, quantity, price, _id, description } = toy;
    console.log(_id)
    return (

        <tr>
            <td></td>
            <td>{seller}</td>
            <td>{toyName}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>

            <td><Link to={`/update/${_id}`}><button className='btn btn-primary'>Update</button></Link></td>
            <td><button onClick={() => handleDelete(_id)} className='btn btn-primary'>Delete</button></td>
        </tr>
    );
};

export default MyToyRow;