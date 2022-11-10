import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logoo.jpeg'
import '../mainHeader/MainHeader.css'
import { TbAlignRight } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";

const MainHeader = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="container-fluid d-flex align-items-center justify-content-between bg-white">
            <Link class="navbar-brand" href="#">
                <img className='logo' src={logo} alt="" />
            </Link>
            <ul class="d-md-flex gap-4 list-unstyled m-0 fw-semibold d-none">
                <li class="nav-item">
                    <Link class="nav-link link" aria-current="page" >Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link link" >Products</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link link" >Gallery</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link link">Service</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link link">Contact</Link>
                </li>
            </ul>
            <div className='d-block d-md-none position-relative'>
                {
                    !isOpen ? <TbAlignRight onClick={() => setIsOpen(true)} className='fs-1 fw-bold' /> :
                        <IoMdClose onClick={() => setIsOpen(false)} className='fs-1 fw-bold' />
                }

                <div className={`position-absolute top-100 bg-white dropdown-menubar ${isOpen ? 'open' : 'close'}`}>
                    <ul className='list-unstyled m-0 fw-semibold fs-3 text-dark'>
                        <li>
                            <Link className='nav-link d-link' to={''}>Home</Link>
                        </li>
                        <li>
                            <Link className='nav-link d-link' to={''}>Home</Link>
                        </li>
                        <li>
                            <Link className='nav-link d-link' to={''}>Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MainHeader;