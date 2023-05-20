import React, { useContext, useEffect, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../ProviderContext/AuthProvider';
import { onAuthStateChanged } from 'firebase/auth';
import { Helmet } from "react-helmet";

const Login = () => {
    const [error, setError] = useState('')
    // console.log(user)
    const navigate = useNavigate();
    const location = useLocation();
    const { signUp, signInWithGoogle } = useContext(AuthContext);


    const from = location.state?.from?.pathname || '/';


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        setError('')

        signUp(email, password)
            .then(result => {
                const loggedUeser = result.user;
                console.log(loggedUeser)
                form.reset();
                navigate(from);

            })
            .catch(error => {
                console.log(error)
                setError("please chek Email and Password")
            })
    }
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const logged = result.user;
                console.log(logged)
                navigate(from);
            })
            .catch(error => {
                console.log(error)
            })

    }


    return (
        <div className="hero min-h-screen bg-base-200 border-2">
            <Helmet>
                <title>TF -Login</title>
            </Helmet>
            <div className="hero-content flex-col l">
                <div className="text-center mb-5">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <form onSubmit={handleLogin} className="card-body pb-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <p>New on this site? <Link className='text-indigo-600 underline' to="/registration">Registration</Link></p>
                            <p className='text-red-600'>{error}</p>
                        </div>
                    </form>
                    <div className='flex justify-center items-center flex-col-reverse '>
                        <p className='bg-primary p-2 rounded text-white mb-3 '> <button onClick={handleGoogleLogin} ><FaGoogle className='inline  '></FaGoogle> Login with Google</button></p>
                        {/* <p className='bg-primary p-2 rounded text-white mb-3 '><button > <FaGithub className='inline '></FaGithub> Login with Github</button></p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;