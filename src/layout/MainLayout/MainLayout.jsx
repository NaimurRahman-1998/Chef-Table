/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import MenuBar from '../../components/Header/MenuBar';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <MenuBar></MenuBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;