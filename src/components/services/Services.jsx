import React from 'react';
import { Container } from 'react-bootstrap';
import './Services.css'
import svg from '../../assets/images/bikes/logobike.svg'
import ServiceCarousel from './ServiceCarousel';

const Services = () => {
    return (
        <section id='service'>
            <Container className='py-5'>
                <div className='pb-5'>
                    <div className='d-flex justify-content-center mb-2'>
                        <img src={svg} alt="" />
                    </div>
                    <p className='text-center text-color fw-bold'>TAKING RIDES TO A NEWER LEVEL</p>
                    <h1 className='text-center fw-bold'>OUR SERVICES</h1>
                    <p className='text-center'>Get our premium services at your door point.</p>
                </div>
                <ServiceCarousel />
            </Container>
        </section>
    );
};

export default Services;