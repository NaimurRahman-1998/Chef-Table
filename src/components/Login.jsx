/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
const Login = () => {
    const {Login} = useContext(AuthContext)
    const [success,setSuccess] = useState('')
    const [error,setError] = useState()
    const handleLogin=(event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email,password)

        Login(email,password)
        .then(result=>{
            const LoggedUser = result.user
            console.log(LoggedUser)
            form.reset()
            setSuccess('Successfully Logged in')
            setError('')
        })
        .catch(error=>{
            console.log(error)
            setError(error.message)
            setSuccess('')
        })
    }
    const handleLoginGoogle =()=>{
        console.log('asd')
    }

    return (
        <div>
            <div className="hero ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-[35rem] shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' id='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' id='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                {success && <p className='text-green-500'>{success}</p> }
                                {error && <p className='text-red-500'>{error}</p> }
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <Link to='/register' className=" mx-6 mb-4 label-text-alt link link-hover text-blue-600">New User? Please Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;