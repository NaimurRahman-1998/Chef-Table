/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import logo from '../../assets/logo.png'
import { FaFacebook,FaTwitter,FaInstagramSquare,FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-[#1A1919] py-16 mt-10  ">
            <div className="my-container flex gap-3 items-center justify-center  text-white">
                <img className=' h-[5rem] w-[5rem] rounded-full' src={logo} alt="" />
                <div>

                    <h2 className="text-2xl font-bold">ChefsTable </h2>
                    <p className=" text-sm">Discover Your Recipes</p>
                </div>
            </div>
            <div className="my-container text-gray-400 flex justify-center items-center gap-20 mt-6">
                
                <div className="flex   gap-3">
                    <a href="https://www.facebook.com/"><FaFacebook className=" text-gray-400 text-2xl"></FaFacebook></a>
                    44K likes
                </div>
                <div className="flex gap-3">
                    <FaTwitter className=" text-gray-400 text-2xl"></FaTwitter>
                    75K followers
                </div>
                <div className="flex gap-3">
                    <FaInstagramSquare className=" text-gray-400 text-2xl"></FaInstagramSquare>
                    105K followers
                </div>
                <div className="flex gap-3">
                    <FaYoutube className=" text-gray-400 text-2xl"></FaYoutube>
                    2.5M Subscribers
                </div>
            </div>
        </div>
    );
};

export default Footer;