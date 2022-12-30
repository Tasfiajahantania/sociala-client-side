import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hook/useTitle';
import { FaGoogle } from "react-icons/fa";


const provider = new GoogleAuthProvider();


const Login = () => {
    useTitle("Login")
    const [error, setError] = useState('')
    const { login, googleSignup } = useContext(AuthContext);

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const handellogin = (event) => {

        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;

                const currentUser = {
                    email: user.email
                }

                fetch('https://my-services-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('token', data.token)
                    })

                navigate(from, { replace: true });
                // console.log(user);
            })
            .catch(error => setError(error.message))
        event.target.reset()
    }
    const handelGoogleSignUp = () => {

        googleSignup(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => setError(error.message))
    }
    return (
        <div>
            <h3 className='mt-16 text-5xl text-center'>Login</h3>
            <div className='md:w-1/2 m-auto'>
                <form onSubmit={handellogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className='text-danger'>
                    <p>{error}</p>
                </div>
                <div className="sm:w-full md:w-1/2 m-auto flex justify-center">
                    <button onClick={handelGoogleSignUp} className='btn bg-pink-400 px-24 sm:w-1/2 md:w-full'><span className='px-2'> <FaGoogle></FaGoogle> </span> Google</button>
                </div>
                <p className="text-center py-3">Don't have an account? <Link to="/register">Sign Up</Link></p>
            </div>
        </div >
    );
};

export default Login;