/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";
const Login = () => {
    const { Login, googleUser, setUser, user, githubUser } = useContext(AuthContext)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState()

    const location = useLocation()
    const from = location.state?.from?.pathname || "/";


    const navigate = useNavigate()
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password)

        Login(email, password)
            .then(result => {
                const LoggedUser = result.user
                console.log(LoggedUser)
                form.reset()
                setSuccess('Successfully Logged in')
                setError('')
                navigate(from)
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
                setSuccess('')
            })
    }
    const handleLoginGoogle = () => {
        googleUser()
            .then(result => {
                const loggedGoogle = result.user
                setUser(loggedGoogle)

                    .console.log(loggedGoogle)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleLoginGithub = () => {
        githubUser()
            .then((result) => {
                const user = result.user;
            })
            .catch((error) => {
                setError(error.message)

            })
    }

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }, [user])

    return (
        <div>
            <div className=" hero ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-[20rem] lg:w-[35rem] shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required type="email" placeholder="email" name='email' id='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required type="password" name='password' id='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>

                                {success && <p className='text-green-500'>{success}</p>}
                                {error && <p className='text-red-500'>{error}</p>}
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-error hover:btn-ghost">Login</button>
                            </div>
                        </form>

                        <div className='flex flex-col gap-3 ml-8'>
                            <button onClick={handleLoginGoogle} className=' w-[10rem] h-[2rem] rounded justify-center flex items-center text-sm bg-blue-600 text-white '> <FaGoogle className='mr-2'></FaGoogle> SignIn With Google</button>
                            <button onClick={handleLoginGithub} className=' w-[10rem] h-[2rem] rounded justify-center flex items-center text-sm bg-stone-800 text-white '> <FaGithub className='mr-2' /> SignIn With GitHub</button>

                        </div>

                        <Link to='/register' className=" mx-6 mb-4 text-right label-text-alt link link-hover text-blue-600">New User? Please Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;