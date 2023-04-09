import React from 'react';
import ActiveLink from './ActiveLink';

const Header = () => {
    return (
        <header className='flex justify-between items-center'>
            <div><h2 className='text-3xl cursor-pointer'>GetHired</h2></div>
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
        </header>
    );
};

export default Header;