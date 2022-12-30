import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import logo from '../../images/Sociala.png';

const Header = () => {
    const { logOut, user } = useContext(AuthContext)
    // console.log(user)
    const handelLogout = () => {
        logOut()
            .then(() => {
                console.log("Log Out successfuly..")
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="navbar bg-sky-400 md:px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content font-bold mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li> <Link to='/media'>Home<AiOutlineHome></AiOutlineHome></Link></li>
                        <li> <Link to='/'> <AiOutlineMessage></AiOutlineMessage>Message</Link></li>
                        <li> <Link to='/about'>About</Link></li>
                        {
                            user?.uid && <>
                                <li> <Link ><FaUserCircle></FaUserCircle> {user.displayName}</Link></li>

                            </>
                        }

                    </ul>
                </div>
                <Link to="/" className="w-24"> <img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-black font-bold	">
                    {/* Laptop devices menu */}
                    <li className='text-black'> <Link to='/media'><AiOutlineHome></AiOutlineHome>Home</Link></li>
                    <li> <Link to='/'> <AiOutlineMessage></AiOutlineMessage>Message</Link></li>
                    <li> <Link to='/about'>About</Link></li>
                    {
                        user?.uid && <>
                            <li> <Link ><FaUserCircle></FaUserCircle> {user.displayName}</Link></li>

                        </>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <>
                            <button onClick={handelLogout} className="btn btn btn-sm btn-secondary">logout</button>
                        </>
                        :
                        <>
                            <Link to="/login" className="btn btn btn-sm bg-pink-500">Login</Link>
                        </>
                }


            </div>
        </div>
    );
};

export default Header;