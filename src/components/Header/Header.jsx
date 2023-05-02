/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <div className='mt-3 '>
            <div className='flex justify-center items-center'>
                <img className='h-16 rounded' src={logo} alt="" />
                <div>
                    <h1 className='font-bold text-2xl'>Chefs-Table</h1>
                    <p className="font-light text-base">discover recipes</p>
                </div>
            </div>

        </div>
    );
};

export default Header;