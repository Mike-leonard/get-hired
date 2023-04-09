import React from 'react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='mx-5 my-2'>
            <Header />
            <Outlet />
        </div>
    );
};

export default Root;