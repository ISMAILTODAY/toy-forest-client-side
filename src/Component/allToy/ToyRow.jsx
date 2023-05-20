import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../ProviderContext/AuthProvider';

const ToyRow = ({ toy, }) => {
    const { user } = useContext(AuthContext);

    console.log(toy._id)
    const { seller, toyName, category, quantity, price, _id } = toy;
    return (

        <tr>

            <td></td>
            <td>{seller}</td>
            <td>{toyName}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                {
                    user ? <Link to={`/details/${_id}`}>
                        <button className='btn btn-primary'>Details</button>
                    </Link> : <Link to='/login'>
                        <button className='btn btn-primary'>Details</button>
                    </Link>
                }
            </td>
        </tr>

    );
};

export default ToyRow;