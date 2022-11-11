import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaHandPointer, FaMotorcycle } from 'react-icons/fa'
import { RiRefund2Line } from 'react-icons/ri'
import { AiFillLike } from 'react-icons/ai'
import { TbArrowsLeftRight } from 'react-icons/tb'
import { MdLocationOn } from 'react-icons/md'
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1200, min: 766 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 766, min: 0 },
        items: 1
    }
};

const ServiceCarousel = () => {
    return (
        <div >
            <Carousel responsive={responsive}>
                <div className='d-flex justify-content-center my-4'>
                    <div style={{ maxWidth: '350px', height: '220px' }} className='shadow px-3 py-3 bg-white rounded'>
                        <div className='d-flex justify-content-center'>
                            <FaHandPointer style={{ fontSize: '30px', color: '#E63619' }} className="mb-2" />
                        </div>
                        <h3 className='m-0 text-center'>ONLINE BOOKING</h3>
                        <p className='card-text text-secondary'>
                            You can book your bike online with minimum amount of Rs 10,000/-
                            Get payment confirmation invoice on your E-mail.
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-center my-4'>
                    <div style={{ maxWidth: '350px', height: '220px' }} className='shadow px-3 py-3 bg-white rounded'>
                        <div className='d-flex justify-content-center'>
                            <RiRefund2Line style={{ fontSize: '30px', color: '#E63619' }} className="mb-2" />
                        </div>
                        <h3 className='m-0 text-center'>REFUNDABLE BOOKING AMOUNT</h3>
                        <p className='card-text text-secondary'>
                            Afraid of non refundable bookings.
                            Get your booking done at home or
                            showroom with the refundable amount.
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-center my-4'>
                    <div style={{ maxWidth: '350px', height: '220px' }} className='shadow px-3 py-3 bg-white rounded'>
                        <div className='d-flex justify-content-center'>
                            <AiFillLike style={{ fontSize: '30px', color: '#E63619' }} className="mb-2" />
                        </div>
                        <h3 className='m-0 text-center'>HOME BOOKING & DELIVER</h3>
                        <p className='card-text text-secondary'>
                            Can’t visit showroom or no time to pick your bike.
                            Get your booking and delivery done at home.
                            Just give us a call.
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-center my-4'>
                    <div style={{ maxWidth: '350px', height: '220px' }} className='shadow px-3 py-3 bg-white rounded'>
                        <div className='d-flex justify-content-center'>
                            <TbArrowsLeftRight style={{ fontSize: '30px', color: '#E63619' }} className="mb-2" />
                        </div>
                        <h3 className='m-0 text-center'>PICK UP & DROP FACILITY</h3>
                        <p className='card-text text-secondary'>
                            Your bike needs servicing,
                            don’t waste time! Call us for servicing and
                            Get the pick and drop facility at home.
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-center my-4'>
                    <div style={{ maxWidth: '350px', height: '220px' }} className='shadow px-3 py-3 bg-white rounded'>
                        <div className='d-flex justify-content-center'>
                            <FaMotorcycle style={{ fontSize: '30px', color: '#E63619' }} className="mb-2" />
                        </div>
                        <h3 className='m-0 text-center'>FREE TEST RIDE AT HOME</h3>
                        <p className='card-text text-secondary'>
                            Want a Test Ride but don’t have time to visit!
                            Book a Free Test ride and get your
                            Test Ride at home.
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-center my-4'>
                    <div style={{ maxWidth: '350px', height: '220px' }} className='shadow px-3 py-3 bg-white rounded'>
                        <div className='d-flex justify-content-center'>
                            <MdLocationOn style={{ fontSize: '30px', color: '#E63619' }} className="mb-2" />
                        </div>
                        <h3 className='m-0 text-center'>ANJULI AUTOMOBILES</h3>
                        <p className='card-text text-secondary'>
                            A-15, Block-1, Mathura Rd,
                            Mohan cooperative industrial estate,
                            New Delhi-110044
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default ServiceCarousel;