import React from 'react';
import Header from '../Header/Header';
import Shop from '../Shop/Shop';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;