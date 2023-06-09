/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import { BsSuitHeart, } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaMixer } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ChefsInfo.css'

const notify = () => toast("added to Favourite!");
const ChefsInfo = () => {
    const data = useLoaderData()
    const [toggle,setToggle] = useState(true)
    // console.log(data)
    console.log(toggle)

    const handleBtn =()=>{
        setToggle(!toggle)
        notify()
    }

    return (
        <div className='my-container'>
            <div id='banner' className='h-[25rem] flex gap-5 items-center p-10  -4'>
                <img className='h-[20rem] rounded-3xl ' src={data.image} alt="" />
                <div>
                    <h2 className='font-bold text-4xl mb-3'>{data.name}</h2>
                    <p className='mb-4 text-gray-700 font-light text-lg'>{data.bio}{data.bio}</p>
                    <div className='flex items-center gap-2 mt-2'>
                        <BsSuitHeart className='text-2xl text-red-600' /> <span className=' font-semibold text-lg'>{data.likes} likes</span>
                    </div>
                    <div className='flex items-center gap-2 mt-2'>
                        <HiArrowNarrowRight className='text-2xl text-red-600' />
                        <h2 className=' font-semibold text-lg'>Number of Recipes : {data.recipes.length}</h2>
                    </div>
                    <div className='flex items-center gap-2 mt-2'>
                        <FaMixer className='text-2xl text-red-600' />
                        <h2 className=' font-semibold text-lg'>Number of Experience : {data.experience}</h2>
                    </div>
                </div>
            </div>

            <div id='cards' className='flex flex-col mt-20 gap-10 '>
            <h2 className='text-center text-4xl font-extrabold font-title'>RECIPES</h2>
                {
                    data.recipes.map((r) =>
                        <div className='flex items-center justify-center gap-5 px-3' key={r.name}>
                            <div className='w-[30%] flex flex-col  -2'>
                                <img className=' rounded-md h-[15rem] ' src={r.image} alt="" />
                                <p className='text-center text-red-500 text-lg font-medium mt-3'>{r.name}</p>
                            </div>
                            <div className='w-[70%] mt-5'>
                                <p className='text-xl font-medium mb-2 text-center font-i'>Ingredients:
                                    <span className='font-normal text-lg font-sub'> {r.ingredients[0]}</span>
                                    ,<span className='font-normal text-lg font-sub'>{r.ingredients[1]}</span>
                                    ,<span className='font-normal text-lg font-sub'>{r.ingredients[2]}</span>
                                    ,<span className='font-normal text-lg font-sub'>{r.ingredients[3]}</span>
                                    ,<span className='font-normal text-lg font-sub'>{r.ingredients[4]}</span>
                                </p>

                                <h1 className='text-xl font-medium mb-2'>Cooking Method:
                                    <span className='font-normal text-lg'>{r.description}</span>
                                </h1>
                                <div className='flex justify-between mt-6  -2'>
                                    <Rating
                                        style={{ maxWidth: 120 }}
                                        value={3}
                                        readOnly
                                    />
                                    { toggle ? <button onClick={handleBtn}  className='btn'>Favorite</button> :
                                    <button disabled  className='btn'>Favorite</button>
                                    }
                                </div>

                            </div>
                        </div>
                    )
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default ChefsInfo;