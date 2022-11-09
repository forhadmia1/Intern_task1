import React from 'react';
import './HeroArea.css'
import image1 from '../../assets/images/chris-kursikowski-rQ3yO2GnO_M-unsplash.jpg'
import image2 from '../../assets/images/harley-davidson-eeTJKC_wz34-unsplash.jpg'
import image3 from '../../assets/images/harley-davidson-MVx3Y17umaE-unsplash (1).jpg'

const HeroArea = () => {
    return (
        <div>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner hero-carosel">
                    <div class="carousel-item active">
                        <img src={image1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={image2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={image3} class="d-block w-100" alt="..." />
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