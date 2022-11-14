import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './FeaturedItems.css'
import bike1 from '../../assets/images/bikes/bull1.png'
import bike2 from '../../assets/images/bikes/bull2.png'
import bike3 from '../../assets/images/bikes/bull4.png'
import bike4 from '../../assets/images/bikes/bull5.png'
import bike5 from '../../assets/images/bikes/bull6.jpg'
import bike6 from '../../assets/images/bikes/bull7.jpg'

const FeaturedItems = () => {
    return (
        <section id='gallery'>
            <div className='pt-5 featured-title '>
                <p className='text-center fw-bold'>TAKING RIDES TO A NEWER LEVEL</p>
                <h1 className='text-center fw-bold'>GREAT PERFORMANCE THAT
                    <br /> MATTERS IN FUTURE</h1>
            </div>
            <Container className='mt-5 px-3'>
                <Row xs={1} md={3} className='gap-4 gap-md-0 py-5'>
                    <Col>
                        <div className='px-3'>
                            <h6 className='text-center fw-bold'>CUTTING EDGE TECH</h6>
                            <p className='text-center text-secondary'>Exercitation ullamco laboris nis exa duis aute irure dolor.</p>
                        </div>
                        <Card className='card-item'>
                            <Card.Img variant="top" src={bike1} />
                            <div className='card-item-inner'>
                                <img src={bike2} alt="" />
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <div className='px-3'>
                            <h6 className='text-center fw-bold'>PERFECT STYLING</h6>
                            <p className='text-center text-secondary'>Exercitation ullamco laboris nis exa duis aute irure dolor.</p>
                        </div>
                        <Card className='card-item'>
                            <Card.Img variant="top" src={bike3} />
                            <div className='card-item-inner'>
                                <img src={bike4} alt="" />
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <div className='px-3'>
                            <h6 className='text-center fw-bold'>DISTINCTIVE BEAUTY</h6>
                            <p className='text-center text-secondary'>Exercitation ullamco laboris nis exa duis aute irure dolor.</p>
                        </div>
                        <Card className='card-item'>
                            <Card.Img variant="top" src={bike5} />
                            <div className='card-item-inner'>
                                <img src={bike6} alt="" />
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FeaturedItems;