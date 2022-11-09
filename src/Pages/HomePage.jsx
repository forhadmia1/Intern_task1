import React from 'react';
import FeaturedItems from '../components/featured/FeaturedItems';
import HeroArea from '../components/heroArea/HeroArea';
import MainHeader from '../components/mainHeader/MainHeader';
import TopHeader from '../components/topHeader/TopHeader';

const HomePage = () => {
    return (
        <div className='layout'>
            <TopHeader />
            <MainHeader />
            <HeroArea />
            <FeaturedItems />
        </div>
    );
};

export default HomePage;