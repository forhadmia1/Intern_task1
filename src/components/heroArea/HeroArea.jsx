import React from 'react';
import './HeroArea.css'
import image1 from '../../assets/images/chris-kursikowski-rQ3yO2GnO_M-unsplash.jpg'
import image2 from '../../assets/images/harley-davidson-eeTJKC_wz34-unsplash.jpg'
import image3 from '../../assets/images/harley-davidson-MVx3Y17umaE-unsplash (1).jpg'

const HeroArea = () => {
    return (
        <div>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item hero-carosel active" data-bs-interval="4000">
                        <img src={image1} class="" alt="..." />
                        <div className='carousel-item-inner'>
                            <div className='relative'>
                                <div className='item-inner-info'>
                                    <h1 className='text-center'>Welcome to Anjuli Automobiles Pvt. Ltd.</h1>
                                    <p className='text-center fs-4'>
                                        Quality is Remembered long,<br />
                                        After the price is Forgotten !!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item hero-carosel" data-bs-interval="2000">
                        <img src={image2} class="" alt="..." />
                        <div className='carousel-item-inner'>
                            <div className='relative'>
                                <div className='item-inner-info'>
                                    <h1 className='text-center'>Welcome to Anjuli Automobiles Pvt. Ltd.</h1>
                                    <p className='text-center fs-4'>
                                        Quality is Remembered long,<br />
                                        After the price is Forgotten !!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item hero-carosel" >
                        <img src={image3} class="" alt="..." />
                        <div className='carousel-item-inner'>
                            <div className='relative'>
                                <div className='item-inner-info'>
                                    <h1 className='text-center'>Welcome to Anjuli Automobiles Pvt. Ltd.</h1>
                                    <p className='text-center fs-4'>
                                        Quality is Remembered long,<br />
                                        After the price is Forgotten !!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default HeroArea;