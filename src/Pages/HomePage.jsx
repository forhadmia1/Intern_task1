import React from 'react';
import FeaturedItems from '../components/featured/FeaturedItems';
import Footer from '../components/footer/Footer';
import HeroArea from '../components/heroArea/HeroArea';
import MainHeader from '../components/mainHeader/MainHeader';
import OurMission from '../components/ourMission/OurMission';
import Services from '../components/services/Services';
import Newsletter from '../components/subscribe/Newsletter';
import TopHeader from '../components/topHeader/TopHeader';

const HomePage = () => {
    return (
        <div className='layout'>
            <div className='sticky-top'>
                <TopHeader />
                <MainHeader />
            </div>
            <HeroArea />
            <FeaturedItems />
            <Services />
            <OurMission />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default HomePage;