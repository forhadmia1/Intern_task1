import React from 'react';
import { Card } from 'react-bootstrap';

const GalleryCard = ({ product }) => {
    return (
        <Card className='position-relative'>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <p className='m-0 text-secondary'>{product.subtitle}</p>
            </Card.Body>
            <div className='position-absolute left-0 d-flex justify-content-center align-items-center w-100 h-100 card-info'>
                <button className='px-3 py-2 card-btn'>View Details</button>
            </div>
        </Card>
    );
};

export default GalleryCard;