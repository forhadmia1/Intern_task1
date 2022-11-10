import React from 'react';
import { Container } from 'react-bootstrap';
import { FaHandPointer } from 'react-icons/fa'
import './Services.css'

const Services = () => {
    return (
        <section id='service'>
            <div className='pt-3 pb-2 featured-title'>
                <h1 className='text-center text-white fw-bold'>Services</h1>
            </div>
            <Container className='py-5'>
                <div className='card-container'>
                    <div className='shadow px-3 p-3'>
                        <div className='d-flex align-items-center gap-2'>
                            <FaHandPointer style={{ fontSize: '30px' }} />
                            <h2 className='m-0'>ONLINE BOOKING</h2>
                        </div>
                        <p className='card-text'>
                            You can book your bike online with minimum amount of Rs 10,000/-
                            Get payment confirmation invoice on your E-mail.
                        </p>
                    </div>
                    <div className='shadow px-3 p-3'>
                        <div className='d-flex align-items-center gap-2'>
                            <FaHandPointer style={{ fontSize: '30px' }} />
                            <h2 className='m-0'>ONLINE BOOKING</h2>
                        </div>
                        <p className='card-text'>
                            You can book your bike online with minimum amount of Rs 10,000/-
                            Get payment confirmation invoice on your E-mail.
                        </p>
                    </div>
                    <div className='shadow px-3 p-3'>
                        <div className='d-flex align-items-center gap-2'>
                            <FaHandPointer style={{ fontSize: '30px' }} />
                            <h2 className='m-0'>ONLINE BOOKING</h2>
                        </div>
                        <p className='card-text'>
                            You can book your bike online with minimum amount of Rs 10,000/-
                            Get payment confirmation invoice on your E-mail.
                        </p>
                    </div>
                    <div className='shadow px-3 p-3'>
                        <div className='d-flex align-items-center gap-2'>
                            <FaHandPointer style={{ fontSize: '30px' }} />
                            <h2 className='m-0'>ONLINE BOOKING</h2>
                        </div>
                        <p className='card-text'>
                            You can book your bike online with minimum amount of Rs 10,000/-
                            Get payment confirmation invoice on your E-mail.
                        </p>
                    </div>
                    <div className='shadow px-3 p-3'>
                        <div className='d-flex align-items-center gap-2'>
                            <FaHandPointer style={{ fontSize: '30px' }} />
                            <h2 className='m-0'>ONLINE BOOKING</h2>
                        </div>
                        <p className='card-text'>
                            You can book your bike online with minimum amount of Rs 10,000/-
                            Get payment confirmation invoice on your E-mail.
                        </p>
                    </div>
                    <div className='shadow px-3 p-3'>
                        <div className='d-flex align-items-center gap-2'>
                            <FaHandPointer style={{ fontSize: '30px' }} />
                            <h2 className='m-0'>ONLINE BOOKING</h2>
                        </div>
                        <p className='card-text'>
                            You can book your bike online with minimum amount of Rs 10,000/-
                            Get payment confirmation invoice on your E-mail.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Services;