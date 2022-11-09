import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logoo.jpeg'
import '../mainHeader/MainHeader.css'

const MainHeader = () => {
    return (
        <nav id='navbar' className='d-flex px-4 py-2 align-items-center'>
            <div className='d-flex justify-content-center align-items-center left-side w-full h-100'>
                <Link to={'/'}>
                    <img className='logo' src={logo} alt="" />
                </Link>
            </div>
            <div className='right-side'>
                <ul className='d-flex flex-column flex-md-row list-unstyled fs-5 m-0'>
                    <li><Link to={''} className='text-decoration-none link'>
                        8750270991, 9873580735
                    </Link></li>
                    <li><Link to={''} className='text-decoration-none link'>
                        A-15, Block-1, Mathura Rd, Mohan cooperative industrial estate, New Delhi-110044
                    </Link></li>
                    <li><Link to={''} className='text-decoration-none link'>
                        10:00am to 8:00pm
                    </Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default MainHeader;