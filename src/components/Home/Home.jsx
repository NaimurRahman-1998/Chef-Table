/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './Home.css'

import { BsSuitHeart } from "react-icons/bs";

import { Pagination, Navigation } from "swiper";
const Home = () => {
    const data = useLoaderData()
    // console.log(data)
    return (
        <div className='my-container'>
            <div id='banner' className='border-2 h-[35rem]'>
                <Swiper
                    pagination={{
                        type: "progressbar",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide> <img src="https://www.foodandwine.com/thmb/jJupeS5vHMkh9TBsJkwdaG1uPY8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tamarind-Chicken-FT-RECIPE0522-80072d93f7bc4bc7abf1dcf5b5317b0c.jpg" alt="" /> </SwiperSlide>
                    <SwiperSlide> <img src="https://static.onecms.io/wp-content/uploads/sites/43/2022/04/06/233613-Best-Damn-Chili-mfs-242.jpg" alt="" /> </SwiperSlide>
                    <SwiperSlide> <img src="https://www.forksoverknives.com/wp-content/uploads/spaghetti-meatballs-wordpress-1.jpg" alt="" /> </SwiperSlide>
                    
                </Swiper>
            </div>

            <div id='cards' className='mt-5  grid grid-cols-3 gap-12'>
                {
                    data.map((chef) => 
                        <div key={chef.id} className='border-2 rounded p-5'>
                            <img className='h-[15rem] w-[20] rounded-full mx-auto' src={chef.image} alt="" />
                            <h1 className='text-center text-xl font-semibold mt-2'>{chef.name}</h1>
                            <p className='mt-3 mb-3'>Experience : {chef.experience}</p>
                            <p className='mb-4'> Number OF Recipes : {chef.recipes.length}</p>
                            <div className='flex justify-end items-center gap-2'>
                                <BsSuitHeart />
                                {chef.likes}
                                <Link to={`/chefsInfo/${chef.id}`}><button className='btn rounded-full'>View Recipes</button></Link>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default Home;