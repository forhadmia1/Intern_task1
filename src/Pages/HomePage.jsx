import React from 'react';
import HeroArea from '../components/heroArea/HeroArea';
import MainHeader from '../components/mainHeader/MainHeader';
import TopHeader from '../components/topHeader/TopHeader';

const HomePage = () => {
    return (
        <>
            <TopHeader />
            <MainHeader />
            <HeroArea />
        </>
    );
};

export default HomePage;