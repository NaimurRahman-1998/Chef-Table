/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazyload';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './Home.css'

import { BsFillHeartFill, BsClock, BsFillArrowRightCircleFill, BsHeart } from "react-icons/bs";

import { Pagination, Navigation } from "swiper";
import ExtraSection from '../ExtraSection/ExtraSection';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
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
                    <SwiperSlide >
                        <div className='relative'>

                            <img src="https://www.foodandwine.com/thmb/jJupeS5vHMkh9TBsJkwdaG1uPY8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tamarind-Chicken-FT-RECIPE0522-80072d93f7bc4bc7abf1dcf5b5317b0c.jpg" alt="" />
                            <div className='lg:flex hidden p-5 w-[40rem] flex-col gap-2 items-center absolute bottom-16 left-[22rem] hover:-translate-y-28 transition duration-700 bg-white '>
                                <h1>Chefs Table</h1>
                                <p className='text-lg font-bold text-red-400'>Lunch</p>
                                <h1 className='font-semibold text-2xl'>Special Barbeque Chicken with Dressing</h1>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={3}
                                    readOnly
                                />
                                <p className='text-center text-gray-500 text-lg'>The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is</p>
                                <div className="flex gap-4 font-semibold">
                                    <p className='text-red-500 flex items-center gap-2'><BsClock /> 55mins</p>
                                    <p className='text-red-500 flex items-center gap-2'><BsHeart /> 5 Like</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="https://static.onecms.io/wp-content/uploads/sites/43/2022/04/06/233613-Best-Damn-Chili-mfs-242.jpg" alt="" />
                            <div className='lg:flex hidden p-5 w-[40rem] flex-col gap-2 items-center absolute -bottom-28 left-[22rem] hover:-translate-y-28 transition duration-700 bg-white '>
                                <h1>Chefs Table</h1>
                                <p className='text-lg font-bold text-red-400'>Lunch</p>
                                <h1 className='font-semibold text-2xl'>Special Barbeque Chicken with Dressing</h1>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={3}
                                    readOnly
                                />
                                <p className='text-center text-gray-500 text-lg'>The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is</p>
                                <div className="flex gap-4 font-semibold">
                                    <p className='text-red-500 flex items-center gap-2'><BsClock /> 55mins</p>
                                    <p className='text-red-500 flex items-center gap-2'><BsHeart /> 5 Like</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="https://www.forksoverknives.com/wp-content/uploads/spaghetti-meatballs-wordpress-1.jpg" alt="" />
                            <div className='lg:flex hidden p-5 w-[40rem]  flex-col gap-2 items-center absolute -bottom-28 left-[22rem] hover:-translate-y-28 transition duration-700 bg-white '>
                                <h1>Chefs Table</h1>
                                <p className='text-lg font-bold text-red-400'>Lunch</p>
                                <h1 className='font-semibold text-2xl'>Special Barbeque Chicken with Dressing</h1>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={3}
                                    readOnly
                                />
                                <p className='text-center text-gray-500 text-lg'>The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is</p>
                                <div className="flex gap-4 font-semibold">
                                    <p className='text-red-500 flex items-center gap-2'><BsClock /> 55mins</p>
                                    <p className='text-red-500 flex items-center gap-2'><BsHeart /> 5 Like</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

            <h1 className=' text-5xl text-center font-bold mt-8 my-font ' >Our Chefs</h1>

            <div id='cards' className='mt-5  grid lg:grid-cols-3 gap-12'>
                {
                    data.map((chef) =>
                        <div key={chef.id} className='border-2 rounded p-5'>
                            <LazyLoad height={200}>
                                <img className='h-[15rem] w-[15rem] rounded-full  mx-auto' src={chef.image} alt="" />
                            </LazyLoad>
                            <h1 className='text-center text-3xl font-semibold mt-3 my-font '>{chef.name}</h1>
                            <p className='text-center font-bio text-gray-500 font-'>{chef.bio}</p>
                            <div className='flex mt-5 justify-between'>
                                <div>
                                    <p className='mt-3 mb-3 font-p'>Experience : {chef.experience}</p>
                                    <p className='mb-4 font-p'> Number OF Recipes : {chef.recipes.length}</p>
                                </div>
                                <div className='flex flex-col m-2 w-[11rem] items-center gap-2'>
                                    <div className='flex gap-3' >
                                        <div className='flex items-center'>
                                            <BsFillHeartFill className='text-red-500 text-xl mr-[4px]' />
                                            {chef.likes}
                                        </div>
                                        <div className='flex items-center'>
                                            <BsClock className='text-red-500 text-xl mr-[4px]' />
                                            55 min
                                        </div>
                                    </div>

                                    <div className='flex items-center mt-2 bg-red-600 rounded-full hover:bg-red-400 p-2'>
                                        <Link to={`/chefsInfo/${chef.id}`}><button className='mr-2  text-white'>View Recipes</button></Link>
                                        <BsFillArrowRightCircleFill className='text-xl text-white' />
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
            <ExtraSection data={data}></ExtraSection>
        </div>
    );
};

export default Home;