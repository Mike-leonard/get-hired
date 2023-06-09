import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage';

const Root = () => {
    return (
        <div className=''>
            <Header />
            <Outlet />
        </div>
    );
};

export default Root;