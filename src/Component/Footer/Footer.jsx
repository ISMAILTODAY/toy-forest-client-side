import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-black text-white p-5 mt-5'>
            <div className=' ps-5 grid md:grid-cols-4'>
                <div>
                    <h1>company name</h1>
                </div>
                <div >
                    <h1 className='font-bold text-2xl'>Social Link</h1>
                    <Link> <FaFacebook className='mt-3 '></FaFacebook></Link>
                    <Link><FaInstagramSquare className='my-3'></FaInstagramSquare></Link>
                    <Link> <FaTwitter></FaTwitter></Link>
                </div>
                <div>
                    <h1 className='font-bold text-2xl'>Link</h1>
                    <Link className='block'>Home</Link>
                    <Link className='block'>All Toys</Link>
                    <Link className='block'>My Toys</Link>
                    <Link className='block'>Add A Toys</Link>
                    <Link className='block'>Blog</Link>

                </div>
                <div>
                    <h1 className='font-bold text-2xl'>Location</h1>
                    <p>Mount Vernon, <br /> 1920 Bernardo Street,<br /> Indiana</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;