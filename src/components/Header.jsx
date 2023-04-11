import React, { useState } from 'react';
import ActiveLink from './ActiveLink';
import { useLocation } from 'react-router-dom';
import BannerHome from '../routes/banner/BannerHome';
import BannerStatistics from '../routes/banner/BannerStatistics';
import BannerApplied from '../routes/banner/BannerApplied';
import BannerBlog from '../routes/banner/BannerBlog';
import ErrorPage from './ErrorPage';
import BannerJobDescription from '../routes/banner/BannerJobDescription';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {

    const location = useLocation();
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

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
            const dynamic = location.pathname
            if (dynamic.includes('/job/')) {
                return <BannerJobDescription />;
            } else {
                return <ErrorPage />;
            }
        }


    };

    return (
        <header className='bg-[#DBCFC7] px-20 py-5'>
            <div className='flex sm:justify-between md:justify-between items-center justify-around'>
                <div className='flex items-center gap-2'>

                    <h2 className='text-3xl cursor-pointer' onClick={() => window.location = '/'}>GetHired</h2>

                    <div className="hamburger md:hidden sm:hidden cursor-pointer" onClick={toggleMenu}>
                        {
                            showMenu ? <XMarkIcon className="h-7 w-7 text-[#534943]" /> :
                                <Bars4Icon className="h-7 w-7 text-[#534943]" /> 
                        }

                    </div>
                </div>
                <nav className='text-sm'>
                    <ul className={showMenu ? ' absolute top-16 left-[24%] bg-yellow-500 p-5 flex flex-col gap-5' : 'sm:gap-3 md:gap-10 hidden sm:flex '}>
                        <li><ActiveLink to="/">Home</ActiveLink></li>
                        <li><ActiveLink to="/statistics">Statistics</ActiveLink></li>
                        <li><ActiveLink to="/applied-jobs">Applied Jobs</ActiveLink></li>
                        <li><ActiveLink to="/blog">Blog</ActiveLink></li>
                    </ul>
                </nav>

                <button className='bg-gradient-to-r from-sky-500 to-indigo-500 text-white
            p-3 sm:p-2 rounded-lg font-semibold text-sm'>Start Applying</button>
            </div>
            {
                getBanner()
            }
        </header>
    );
};

export default Header;