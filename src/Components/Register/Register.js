import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom/dist';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hook/useTitle';

const Register = () => {
    useTitle('Register')
    const {registerUser, updateUser} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    
    const handelregister = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(name, email, password);

        registerUser(email, password)
        .then(res => {
            const user = res.user;
            // console.log(user)
            const currentUser = {
                email: user.email
            }

            const userInfo = {
                displayName: name
            }
            updateUser(userInfo)
                .then(() => {
                    
                })
                .catch(err => console.log(err));

            fetch('https://my-services-server.vercel.app/jwt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                localStorage.setItem('token', data.token)
            })

            navigate(from , {replace : true});

        })
        .catch(error => console.log(error))
        event.target.reset()
    }
    return (
        <div>
            <h3 className='mt-16 text-5xl text-center'>Register</h3>

            <div className='md:w-1/2 m-auto'>
                <form onSubmit={handelregister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>

                <p className="text-center py-3">Allredy have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;