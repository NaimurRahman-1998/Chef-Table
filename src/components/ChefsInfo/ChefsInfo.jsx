/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import { BsSuitHeart, } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaMixer } from "react-icons/fa";
const ChefsInfo = () => {
    const data = useLoaderData()
    console.log(data)

    return (
        <div className='my-container'>
            <div id='banner' className='h-[25rem] flex gap-5 items-center p-10 border-4'>
                <img className='h-[20rem] rounded-3xl ' src={data.image} alt="" />
                <div>
                    <h2 className='font-bold text-4xl mb-3'>{data.name}</h2>
                    <p className='mb-4 text-gray-700 font-light text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                        repellendus quis vero ipsum! Vitae suscipit, ea iure velit molestiae
                        neque placeat sunt beatae, veniam voluptatibus dolorem cumque inventore?
                        Voluptate eum sit eos architecto voluptatum quibusdam nostrum. Deserunt
                        quam facilis commodi!</p>
                    <div className='flex items-center gap-2 mt-2'>
                        <BsSuitHeart className='text-2xl text-red-600' /> <span className=' font-semibold text-lg'>{data.likes} likes</span>
                    </div>
                    <div className='flex items-center gap-2 mt-2'>
                        <HiArrowNarrowRight className='text-2xl text-red-600'/>
                        <h2 className=' font-semibold text-lg'>Number of Recipes : {data.recipes.length}</h2>
                    </div>
                    <div className='flex items-center gap-2 mt-2'>
                        <FaMixer className='text-2xl text-red-600' />
                        <h2 className=' font-semibold text-lg'>Number of Experience : {data.experience}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefsInfo;