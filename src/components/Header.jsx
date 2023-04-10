import React from 'react';
import ActiveLink from './ActiveLink';
import { useLocation } from 'react-router-dom';
import BannerHome from '../routes/banner/BannerHome';
import BannerStatistics from '../routes/banner/BannerStatistics';
import BannerApplied from '../routes/banner/BannerApplied';
import BannerBlog from '../routes/banner/BannerBlog';
import ErrorPage from './ErrorPage';


const Header = () => {

    const location = useLocation();

    const getBanner = () => {
        if (location.pathname === "/") {
            return <BannerHome />;
        } else if (location.pathname === "/statistics") {
            return <BannerStatistics />;
        } else if (location.pathname === "/applied-jobs") {
            return <BannerApplied />;
        } else if (location.pathname === "/blog") {
            return <BannerBlog />;
        } else {
            return <ErrorPage />;
        }
    };

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
            {
                getBanner()
            }
        </header>
    );
};

export default Header;