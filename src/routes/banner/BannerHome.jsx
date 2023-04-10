import React from 'react';

const BannerHome = () => {
    return (
        <div className='flex mt-5 gap-10 items-center'>
            <div className=''>
                <h1 className='text-5xl leading-tight font-extrabold'>One Step <br /> Closer To Your <br /><span className='text-blue-600'>Dream Job</span></h1>
                <p className='text-[#757575] my-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='bg-gradient-to-r from-sky-500 to-indigo-500 text-white
            p-3 rounded-lg font-semibold'>Get Started</button>
            </div>
            <div className='rounded-lg'>
                <img className='rounded-lg' src="https://images.unsplash.com/photo-1521702813222-1943f3fb9c07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            </div>
        </div>
    );
};

export default BannerHome;