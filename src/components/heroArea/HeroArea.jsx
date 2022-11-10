import React from 'react';
import './HeroArea.css'
import image1 from '../../assets/images/chris-kursikowski-rQ3yO2GnO_M-unsplash.jpg'
import image2 from '../../assets/images/harley-davidson-eeTJKC_wz34-unsplash.jpg'
import image3 from '../../assets/images/harley-davidson-MVx3Y17umaE-unsplash (1).jpg'
import { Carousel } from 'react-bootstrap';

const HeroArea = () => {
    return (
        <Carousel slide={false}>
            <Carousel.Item className='hero-carosel'>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />
                <div className='carousel-item-inner'>
                    <div className='relative'>
                        <div className='item-inner-info'>
                            <Carousel.Caption>
                                <h3>Welcome to Anjuli Automobiles Pvt. Ltd.</h3>
                                <p>Quality is Remembered long,<br />
                                    After the price is Forgotten !!</p>
                            </Carousel.Caption>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className='hero-carosel'>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="First slide"
                />
                <div className='carousel-item-inner'>
                    <div className='relative'>
                        <div className='item-inner-info'>
                            <Carousel.Caption>
                                <h3>Welcome to Anjuli Automobiles Pvt. Ltd.</h3>
                                <p>Quality is Remembered long,<br />
                                    After the price is Forgotten !!</p>
                            </Carousel.Caption>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className='hero-carosel'>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="First slide"
                />
                <div className='carousel-item-inner'>
                    <div className='relative'>
                        <div className='item-inner-info'>
                            <Carousel.Caption>
                                <h3>Welcome to Anjuli Automobiles Pvt. Ltd.</h3>
                                <p>Quality is Remembered long,<br />
                                    After the price is Forgotten !!</p>
                            </Carousel.Caption>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default HeroArea;