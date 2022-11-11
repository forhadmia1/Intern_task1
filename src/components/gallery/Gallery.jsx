import React, { useEffect, useState } from 'react';
import './gallery.css'
import svg from '../../assets/images/bikes/logobike.svg'
import { Container } from 'react-bootstrap';
import GalleryCard from './GalleryCard';

const Gallery = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <section id='gallery' className='py-5'>
            <div className='container py-5'>
                <div className='d-flex justify-content-center mb-2'>
                    <img src={svg} alt="" />
                </div>
                <p className='text-center text-color fw-bold'>TAKING RIDES TO A NEWER LEVEL</p>
                <h1 className='text-center fw-bold'>SHOP OUR PRODUCTS</h1>
                <p className='text-center'>Dolore magna aliqua quis nostrud exercitation ullamco laboris nisi ut aliquip exa comds <br /> consequat duis aute irure dolor repreh enderit in voluptate velit esse cilum.
                </p>
            </div>
            <Container>
                <div className='card-container'>
                    {
                        products.map(product => <GalleryCard
                            key={product.id}
                            product={product}
                        />)
                    }
                </div>
                <div className='d-flex justify-content-center align-content-center py-5'>
                    <button className='px-3 py-2 card-btn2'>View More</button>
                </div>
            </Container>
        </section>
    );
};

export default Gallery;