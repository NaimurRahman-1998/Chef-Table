/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaPlus } from "react-icons/fa";
const MenuBar = () => {
    const {user,Logout} = useContext(AuthContext)
    const handleLogout = ()=>{
        Logout()
        .then(()=>{})
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <div className='my-container'>
                <div className="navbar bg-base-100">
                    <div className="navbar-start font-semibold flex gap-3">
                        <Link className='hover:text-red-500 mr-5' to='/'>Home</Link>
                        <Link className='hover:text-red-500 mr-5' to='/login'>Login</Link>
                        <Link className='hover:text-red-500 mr-5' to='/register'>Register</Link>
                        <Link className='hover:text-red-500 mr-5' >Blogs</Link>
                    </div>
                    <div className="navbar-end">
                        {
                            user && <p className='mr-3'>Signed in As : <span>{user?.email}</span></p>
                        }
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