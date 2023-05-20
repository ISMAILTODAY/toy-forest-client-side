import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-black text-white p-5 mt-5'>
            <div className=' ps-5 grid md:grid-cols-5'>
                <div className='relative '>
                    <img className='w-[15%]' src="https://i.ibb.co/PhS06gZ/download-removebg-preview.png" alt="" /> <br />
                    <h1 className=' absolute top-10 font-semibold text-2xl'>TOY FOREST</h1>
                </div>
                <div className='flex flex-col'>
                    <h1 className='font-bold text-2xl'>SOCIAL LINK</h1>
                    <Link to='/facebook'> <FaFacebook className='  inline'></FaFacebook> Facebook</Link>
                    <Link to='/instagram'><FaInstagramSquare className='inline'></FaInstagramSquare> Instagram</Link>
                    <Link to='/twitter'> <FaTwitter className='inline'></FaTwitter> Twitter</Link>
                </div>
                <div>
                    <h1 className='font-bold text-2xl'>USEFULL LINK</h1>
                    <Link to='/' className='block'>Home</Link>
                    <Link to='alltoys' className='block'>All Toys</Link>
                    <Link to='mytoys' className='block'>My Toys</Link>
                    <Link to='addtoys' className='block'>Add A Toys</Link>
                    <Link to='blog' className='block'>Blog</Link>

                </div>
                <div>
                    <h1 className='font-bold text-2xl'>CONTRCT US</h1>
                    <p>Email: toy@forest.com <br /> Phone: +1 111111<br />Open Form: 9am to 6pm</p>
                </div>
                <div>
                    <h1 className='font-bold text-2xl'>ADDRESS</h1>
                    <p>Chicago <br /> 55 Mount Street<br /> Michigan</p>
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <p>
                    &copy; Copyright, All Rights Are Reserve.
                </p>
            </div>
        </div>
    );
};

export default Footer;