/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaPlus } from "react-icons/fa";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
const MenuBar = () => {
    const { user, Logout, profile } = useContext(AuthContext)
    const handleLogout = () => {
        Logout()
            .then(() => { })
            .catch(error => console.log(error))
    }
    console.log(user)
    return (
        <div>
            <div className='my-container'>
                <div className="navbar bg-base-100">
                    <div className="navbar-start font-semibold flex gap-7">
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? "text-red-500" : "default")}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/login"
                            className={({ isActive }) => (isActive ? "text-red-500" : "default")}
                        >
                            Login
                        </NavLink>
                        <NavLink
                            to="/register"
                            className={({ isActive }) => (isActive ? "text-red-500" : "default")}
                        >
                            Register
                        </NavLink>
                        <NavLink
                            to="/blogs"
                            className={({ isActive }) => (isActive ? "text-red-500" : "default")}
                        >
                            Blogs
                        </NavLink>
                    </div>
                    <div className="navbar-end">
                        {
                            user && <img className='mr-2 w-[3rem] h-[3rem] rounded-full' src={user?.photoURL} alt=""
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content={user.displayName}
                            />
                            
                        }
                        <Tooltip id="my-tooltip" />
                        {
                            user ? <button onClick={handleLogout} className='font-semibold text-lg hover:text-red-500'>Logout</button> : <Link to='/login' ><button className='font-semibold text-lg hover:text-red-500'>Login</button></Link>
                        }
                        <button className='btn ml-3 bg-red-600 border-red-600 px-6 rounded-full'> <FaPlus className=' mr-2' /> Submit Recipe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;