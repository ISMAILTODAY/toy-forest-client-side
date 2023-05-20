import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Component/ProviderContext/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className=''>
            <div className="navbar  bg-green-500 fixed top-0 z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            <li className='mr-2'> <Link to="/">Home</Link> </li>
                            <li className='mr-2'><Link to='/alltoys'>All Toys</Link></li>
                            {/* <li className='mr-2'></li> */}
                            {/* <li className='mr-2'></li> */}
                            <li><Link to='/blog'>Blogs</Link></li>
                            <li>{
                                user ? <>
                                    <Link to='addtoys'>Add A Toy</Link>
                                    <Link to='/mytoys'>My Toys</Link>
                                    <Link onClick={handleLogOut} to='/login'>LogOut</Link>
                                </> : <Link to='/login'>Login</Link>
                            }</li>

                        </ul>
                    </div>
                    <div className='relative ml-5 '>
                        <img className='w-[15%]' src="https://i.ibb.co/WBnyftb/download-removebg-preview.png" alt="" /> <br />
                        <h1 className='absolute top-7 font-semibold text-2xl'>Toy Forest</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='mr-2'> <Link to="/">Home</Link> </li>
                        <li className='mr-2'><Link to='/alltoys'>All Toys</Link></li>
                        {/* <li className='mr-2'></li> */}
                        {/* <li className='mr-2'></li> */}
                        <li><Link to='/blog'>Blogs</Link></li>
                        <li><Link to='addtoys'>Add A Toy</Link></li>
                        <li>{
                            user ? <>

                                <Link to='/mytoys'>My Toys</Link>
                                <Link onClick={handleLogOut} to='/login'>LogOut</Link>
                            </> : <Link to='/login'>Login</Link>
                        }</li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <img className='rounded-full w-10 h-10' title={user?.displayName && user.displayName} src={user?.photoURL && user.photoURL} alt="" />
                </div>
            </div>

        </div>
    );
};

export default NavigationBar;