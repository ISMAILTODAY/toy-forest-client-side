import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='my-2'> <NavLink>items1</NavLink> </li>

                            <li><NavLink>items2</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='mr-2'> <Link to="/">Home</Link> </li>
                        <li className='mr-2'><Link to='/alltoys'>All Toys</Link></li>
                        <li className='mr-2'><Link to='/mytoys'>My Toys</Link></li>
                        <li className='mr-2'><Link to='addtoys'>Add A Toy</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <img className='rounded-full' src="#" alt="" />
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;