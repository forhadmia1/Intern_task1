import React from 'react';
import './gallery.css'
import svg from '../../assets/images/bikes/logobike.svg'

const Gallery = () => {
    return (
        <section id='gallery'>
            <div className='container py-5'>
                <div className='d-flex justify-content-center mb-2'>
                    <img src={svg} alt="" />
                </div>
                <p className='text-center text-color fw-bold'>TAKING RIDES TO A NEWER LEVEL</p>
                <h1 className='text-center fw-bold'>SHOP OUR PRODUCTS</h1>
                <p className='text-center'>Dolore magna aliqua quis nostrud exercitation ullamco laboris nisi ut aliquip exa comds <br /> consequat duis aute irure dolor repreh enderit in voluptate velit esse cilum.
                </p>
            </div>
            <div>
                <div>

                </div>
            </div>
        </section>
    );
};

export default Gallery;