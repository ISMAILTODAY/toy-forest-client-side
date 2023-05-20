import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
// import ProviderContext, { providerContext } from '../ProviderContext/ProviderContext';
import { AuthContext } from '../ProviderContext/AuthProvider';
import { Helmet } from "react-helmet";

const Ragistration = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        // console.log(form.email)
        const email = form.email.value;
        const password = form.password.value;
        // const name = form.name.value;
        // const photo = form.photo.value;
        // console.log(email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                // profileUpdate(user, name, photo)
                // navigate('/login');
            })
            .catch(erorr => {
                console.log(erorr)
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
        <div>
            <Helmet>
                <title>TF -Registration</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 border-2">
                <div className="hero-content flex-col l">
                    <div className="text-center mb-5">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Registration</button>
                                <p>Already have an account? <Link className='text-indigo-600 underline' to="/login">Login</Link></p>
                            </div>
                        </form>
                        <div className='flex justify-center items-center flex-col-reverse '>
                            <p className='bg-primary p-2 rounded text-white mb-3 '> <button onClick={handleGoogleLogin} ><FaGoogle className='inline  '></FaGoogle> Login with Google</button></p>
                            {/* <p className='bg-primary p-2 rounded text-white mb-3 '><button > <FaGithub className='inline  '></FaGithub> Login with Github</button></p> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Ragistration;