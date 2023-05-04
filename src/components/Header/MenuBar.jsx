/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaPlus } from "react-icons/fa";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import {
    BoltIcon,
    Bars3BottomRightIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid'
const MenuBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { user, Logout, profile } = useContext(AuthContext)
    const handleLogout = () => {
        Logout()
            .then(() => { })
            .catch(error => console.log(error))
    }
    console.log(user)
    return (
        <div>
            <div className='my-container '>
                <div className="flex items-center justify-between px-5 mb-5 bg-base-100">
                    <div className=" font-semibold hidden lg:flex gap-7 ">
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
                    <div className='lg:hidden'>
                        {/* Dropdown Open Button */}
                        <button
                            aria-label='Open Menu'
                            title='Open Menu'
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Bars3BottomRightIcon className='w-5 text-gray-600' />
                        </button>
                        {isMenuOpen && (
                            <div className='absolute top-0 left-0 w-full z-10'>
                                <div className='p-5 bg-white border rounded shadow-sm'>
                                    {/* Logo & Button section */}
                                    <div className='flex items-center justify-between mb-4'>
                                        
                                        {/* Dropdown menu close button */}
                                        <div>
                                            <button
                                                aria-label='Close Menu'
                                                title='Close Menu'
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <XMarkIcon className='w-5 text-gray-600' />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Mobile Nav Items Section */}
                                    <nav>
                                        <ul className='space-y-4'>
                                            <li>
                                                <Link to='/' className='default'>
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/login'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                                >
                                                    login
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/register'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                                >
                                                    Register
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex  lg:flex items-center">
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