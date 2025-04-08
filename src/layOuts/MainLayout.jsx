import React from 'react';
import Navbar from '../pages/header/NavBar/Navbar/Navbar';
import Footer from '../pages/Footer/footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">

            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;