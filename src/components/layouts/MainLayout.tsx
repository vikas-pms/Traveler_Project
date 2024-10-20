"use client"
import React, { Fragment, useState } from 'react';
import HeaderPage from '../header/HeaderPage';
import FooterPage from '../footer/FooterPage';

const MainLayout = ({ children }: {

    children: React.ReactNode,
}) => {
   
    return <Fragment>
        <HeaderPage />
        {children}
        <FooterPage />
    </Fragment>

}
export default MainLayout