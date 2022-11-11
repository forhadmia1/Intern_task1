import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs'
import { IoIosPin } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { ImPhone } from "react-icons/im";
import { FaFax } from "react-icons/fa";
import { AiFillYoutube, AiOutlineGoogle } from 'react-icons/ai'
import './footer.css'

const Footer = () => {
    return (
        <footer class="text-center text-lg-start bg-dark text-white">
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div class="me-5 d-none d-lg-block">
                    <span>Get connected with Anjuli Automobiles:</span>
                </div>
                <div className='d-flex gap-3 fs-5 '>
                    <Link className='text-white ' to={''}><BsFacebook className='s-link' /></Link>
                    <Link className='text-white ' to={''}><AiFillYoutube className='s-link' /></Link>
                    <Link className='text-white ' to={''}><AiOutlineGoogle className='s-link' /></Link>
                </div>
            </section>
            <section class="">
                <div class="container text-center text-md-start mt-5">
                    <div class="row mt-3">
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Anjuli Automobile
                            </h6>
                            <p>
                                All premium products and services are available here.
                            </p>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <Link to='' class="text-reset">Home</Link>
                            </p>
                            <p>
                                <Link to='' class="text-reset">Products</Link>
                            </p>
                            <p>
                                <Link to='' class="text-reset">Service</Link>
                            </p>
                            <p>
                                <Link to='' class="text-reset">contact</Link>
                            </p>
                        </div>
                        <div class="col-md-6 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><IoIosPin className='me-3 fs-5' /> New York, NY 10012, US</p>
                            <p>
                                <MdEmail className='me-3 fs-5' />
                                info@example.com
                            </p>
                            <p><ImPhone className='me-3 fs-5' />+ 01 234 567 88</p>
                            <p><FaFax className='me-3 fs-5' /> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>
            <div class="text-center p-4" >
                &copy; 2021 Copyright:
                <Link class="fw-bold text-decoration-none footer-link" to="https://mdbootstrap.com/"> Anjuli Automobile</Link>
            </div>
        </footer>
    );
};

export default Footer;