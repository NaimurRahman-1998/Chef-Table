/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { BsClock, BsEyeFill, BsHeart } from "react-icons/bs";
const ExtraSection = ({ data }) => {
    console.log(data[0].recipes[0].description.slice(0, 70))
    return (
        <div className='mt-10'>
            <div className='flex'>
                <div className='w-[70%]'>
                    <h1 className=' font-medium text-3xl border-b-4 p-4 mr-4'>Popular Recipes</h1>
                    <div className='mt-8 flex gap-8'>
                        <img className='w-[20rem] h-[15rem] rounded-lg' src={data[0].recipes[0].image} alt="" />
                        <div className=' w-full'>
                            <p className='text-lg font-bold text-red-400 mb-3'>Lunch</p>
                            <p className='font-semibold text-2xl'>{data[0].recipes[0].name}</p>
                            <Rating
                                className='mt-3'
                                style={{ maxWidth: 80 }}
                                value={3}
                                readOnly
                            />
                            <p className='mt-3 text-xl text-gray-500'>{data[0].recipes[0].description.slice(0, 70)}...</p>
                            <div className="flex gap-4 mt-8 font-semibold">
                                <p className='text-red-500 flex items-center gap-2'><BsClock /> 55mins</p>
                                <p className='text-red-500 flex items-center gap-2'><BsEyeFill /> 1729</p>
                                <p className='text-red-500 flex items-center gap-2'><BsHeart /> 5 Like</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8 flex gap-8'>
                        <img className='w-[20rem] h-[15rem] rounded-lg' src={data[0].recipes[1].image} alt="" />
                        <div className=' w-full'>
                            <p className='text-lg font-bold text-red-400 mb-3'>Meal</p>
                            <p className='font-semibold text-2xl'>{data[0].recipes[1].name}</p>
                            <Rating
                                className='mt-3'
                                style={{ maxWidth: 80 }}
                                value={3}
                                readOnly
                            />
                            <p className='mt-3 text-xl text-gray-500'>{data[0].recipes[1].description.slice(0, 70)}...</p>
                            <div className="flex gap-4 mt-8 font-semibold">
                                <p className='text-red-500 flex items-center gap-2'><BsClock /> 55mins</p>
                                <p className='text-red-500 flex items-center gap-2'><BsEyeFill /> 1729</p>
                                <p className='text-red-500 flex items-center gap-2'><BsHeart /> 5 Like</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8 flex gap-8'>
                        <img className='w-[20rem] h-[15rem] rounded-lg' src={data[0].recipes[2].image} alt="" />
                        <div className=' w-full'>
                            <p className='text-lg font-bold text-red-400 mb-3'>Dinner</p>
                            <p className='font-semibold text-2xl'>{data[0].recipes[2].name}</p>
                            <Rating
                                className='mt-3'
                                style={{ maxWidth: 80 }}
                                value={3}
                                readOnly
                            />
                            <p className='mt-3 text-xl text-gray-500'>{data[0].recipes[2].description.slice(0, 70)}...</p>
                            <div className="flex gap-4 mt-8 font-semibold">
                                <p className='text-red-500 flex items-center gap-2'><BsClock /> 55mins</p>
                                <p className='text-red-500 flex items-center gap-2'><BsEyeFill /> 1729</p>
                                <p className='text-red-500 flex items-center gap-2'><BsHeart /> 5 Like</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[30%]'>
                    <h1 className=' font-medium text-3xl border-b-4 p-4 mx-4'>Featured Article</h1>
                    <div className='mt-8 relative '>
                        <img className='relative' src="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2020/06/ranna-wordpress-theme-radiustheme.com-6-530x338.jpg" alt="" />
                        <div className='p-8 w-[20rem] flex flex-col gap-5 items-center absolute  top-48 left-12 bg-white '>
                            <p className='text-lg font-bold text-red-400'>pasta</p>
                            <h1 className='font-semibold text-2xl'>Spiced Shells</h1>
                            <p className='text-center text-gray-500 text-lg'>The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is</p>
                            <div className="flex gap-4 font-semibold">
                                <p className='text-red-500 flex items-center gap-2'><BsClock /> 55mins</p>
                                <p className='text-red-500 flex items-center gap-2'><BsHeart /> 5 Like</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;