/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

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
                        <Link >Home</Link>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                        <Link >Blogs</Link>
                    </div>
                    <div className="navbar-end">
                        {
                            user && <p className='mr-3'>Signed in As : <span>{user?.email}</span></p>
                        }
                        {
                            user ? <Link onClick={handleLogout}><button className='btn'>Logout</button></Link> : <Link to='/login' ><button className='btn'>Login</button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;