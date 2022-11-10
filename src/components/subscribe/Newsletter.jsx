import React from 'react';
import './newsletter.css'

const Newsletter = () => {
    return (
        <div>
            <div className='path-container'>
                <div className='form-container container row row-md'>
                    <div className='info col-md-6'>
                        <p>LATEST NEWS AND DEALS DIRECTLY TO YOUR INBOX</p>
                        <h1>SUBSCRIBE FOR UPDATED</h1>
                    </div>
                    <div className='col-md-6'>
                        <div className='d-flex gap-2 form-input'>
                            <input type="email" name="" id="" placeholder='Enter your email.' className='w-100 py-2 px-1' />
                            <button className='px-3 py-2 border-0'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;