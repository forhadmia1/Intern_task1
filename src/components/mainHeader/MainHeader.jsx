import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logoo.jpeg'
import '../mainHeader/MainHeader.css'
import { TbAlignRight } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";

const MainHeader = () => {
    const [isOpen, setIsOpen] = useState(false)

    const goTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }

    const handleScroll = e => {
        e.preventDefault()
        const hash = e.target.hash
        const el = document.querySelector(hash)
        const offsetTop = el.offsetTop
        if (typeof window !== `undefined`) {
            window.scrollTo({
                top: offsetTop,
                left: 0,
                behavior: "smooth",
            })
        }
    }
    return (
        <nav className="container-fluid d-flex align-items-center justify-content-between bg-white">
            <Link class="navbar-brand" onClick={goTop}>
                <img className='logo' src={logo} alt="" />
            </Link>
            <ul class="d-md-flex gap-4 list-unstyled m-0 fw-semibold d-none">
                <li class="nav-item">
                    <Link class="nav-link link" onClick={goTop}>Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link link" onClick={handleScroll} to="#gallery">Gallery</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link link" onClick={handleScroll} to="#service">Service</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link link" onClick={handleScroll}
                        to="#mission">About</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link link" onClick={handleScroll} to="#products">Products</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link link" onClick={handleScroll} to="#contact">Contact</Link>
                </li>
            </ul>
            <div className='d-block d-md-none position-relative'>
                {
                    !isOpen ? <TbAlignRight onClick={() => setIsOpen(true)} className='fs-1 fw-bold' /> :
                        <IoMdClose onClick={() => setIsOpen(false)} className='fs-1 fw-bold' />
                }

                <div className={`position-absolute top-100 bg-white dropdown-menubar ${isOpen ? 'open' : 'close'}`}>
                    <ul className='list-unstyled m-0 fw-semibold fs-3 text-dark' onClick={() => setIsOpen(false)}>
                        <li class="nav-item">
                            <Link class="nav-link d-link" onClick={goTop}>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link d-link" onClick={handleScroll} to="#gallery">Gallery</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link d-link" onClick={handleScroll} to="#service">Service</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link d-link" onClick={handleScroll}
                                to="#mission">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link d-link" onClick={handleScroll} to="#products">Products</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link d-link" onClick={handleScroll} to="#contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MainHeader;