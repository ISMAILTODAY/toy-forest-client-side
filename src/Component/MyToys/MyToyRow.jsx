import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const MyToyRow = ({ toy, handleDelete }) => {
    const { seller, toyName, category, quantity, price, _id, description } = toy;
    return (

        <tr>
            <td></td>
            <td>{seller}</td>
            <td>{toyName}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>

            <td><Link to={`/update/${_id}`}><button className=''><FaEdit></FaEdit></button></Link></td>
            <td><button onClick={() => handleDelete(_id)} className=''><FaTrashAlt></FaTrashAlt></button></td>
        </tr>
    );
};

export default MyToyRow;