import React from 'react';
import ActiveLink from '../ActiveLink';
import HomeBanner from './banner/BannerHome';

const Header = () => {
    return (
        <header className='bg-[#DBCFC7] p-5'>
            <div className='flex justify-between items-center'>
                <h2 className='text-3xl cursor-pointer' onClick={() => window.location = '/'}>GetHired</h2>

                <nav>
                    <ul className='flex gap-10'>
                        <li><ActiveLink to="/">Home</ActiveLink></li>
                        <li><ActiveLink to="/statistics">Statistics</ActiveLink></li>
                        <li><ActiveLink to="/applied-jobs">Applied Jobs</ActiveLink></li>
                        <li><ActiveLink to="/blog">Blog</ActiveLink></li>
                    </ul>
                </nav>

                <button className='bg-gradient-to-r from-sky-500 to-indigo-500 text-white
            p-3 rounded-lg font-semibold'>Start Applying</button>
            </div>
            <HomeBanner />
        </header>
    );
};

export default Header;