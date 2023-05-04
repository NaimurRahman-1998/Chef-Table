/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { getAuth, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app);

const Register = () => {
    const { user, createUser, profile, setUser,logout } = useContext(AuthContext)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    // console.log(user)


    

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value
        const photoURL = form.photo.value

        // console.log(name,email,password,photoURL)
        if(password<6 ){
            setError('Password must be equal or above 6 Char')
            return
        }

        createUser(email, password)
            .then(result => {
                const registeredUser = result.user
                setUser(registeredUser)
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photoURL
                }).then(() => {
                    console.log('cons')
                }).catch((error) => {

                });
                console.log(registeredUser)
                form.reset()
                setSuccess('Successfully Registered')
                logout()
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
            error || navigate('/login')


    }
    return (
        <div className="hero  bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card flex-shrink-0  w-[20rem] lg:w-[35rem]  shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input required type="text" placeholder="Name" name='name' id='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required type="email" placeholder="email" name='email' id='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo-Url</span>
                            </label>
                            <input type="text" placeholder="PhotoUrl" name='photo' id='photo' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required type="password" name='password' id='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover text-blue-600">ALready User? Please Login</Link>
                            </label>
                            {success && <p className='text-green-500'>{success}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-red-500">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;