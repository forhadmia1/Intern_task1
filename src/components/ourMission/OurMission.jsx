import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ourmission.css'
import { FaQuoteRight } from 'react-icons/fa'
import { HiLightBulb } from 'react-icons/hi'
import { SiGooglechat } from 'react-icons/si'
import { TbSteeringWheel } from 'react-icons/tb'

const OurMission = () => {
    return (
        <div id='mission'>
            <div className='mission-container py-5'>
                <Container className='py-5'>
                    <Row md={1} lg={2} className='pb-5'>
                        <Col>
                            <div className='text-white left-side'>
                                <p className=''>TAKING RIDES TO A NEWER LEVEL</p>
                                <h1>A STEP ABOVE WITH
                                    RIDER-FRIENDLY NATURE</h1>
                                <p>
                                    Semper aibers vestibulum fringil voluptate Lorem ipsum dolor sit consecter adipisicing eiusmod tempor incididunt labore amag amet aliqua. Uta enim ad minim veniam quis nostrud.
                                </p>
                            </div>
                        </Col>
                        <Col className='right-side'>
                            <div className='d-flex '>
                                <div className='px-3 qoute'>
                                    <FaQuoteRight className='fs-1 text-secondary' />
                                </div>
                                <div className='px-3'>
                                    <h4 className='fw-bold'>Our Mission Statement</h4>
                                    <p className='fw-semibold text-color '>Faucibus gravida pulvinar mattis risus uisque sagit ipsum tempor incididunt laboret dolor sed magna aliqua orem adipisicing elit do eiusmod tempor incididunt laboris.</p>
                                </div>
                            </div>
                            <div className='d-flex flex-column gap-3 mt-3'>
                                <div className='d-flex gap-2 mission-card align-items-md-center'>
                                    <TbSteeringWheel />
                                    <h5 className='fw-bold m-0'>Buy & Sell Online <br />
                                        Safely Securely</h5>
                                    <p className='text-color m-0'>Ipsum vestibulum fringil holupta elit voltars semper incididunt dolor ipsum.</p>
                                </div>
                                <div className='d-flex gap-2 mission-card align-items-md-center'>
                                    <HiLightBulb />
                                    <h5 className='fw-bold m-0'>Buy & Sell Online <br />
                                        Safely Securely</h5>
                                    <p className='text-color m-0'>Ipsum vestibulum fringil holupta elit voltars semper incididunt dolor ipsum.</p>
                                </div>
                                <div className='d-flex gap-2 mission-card align-items-md-center'>
                                    <SiGooglechat />
                                    <h5 className='fw-bold m-0'>Buy & Sell Online <br />
                                        Safely Securely</h5>
                                    <p className='text-color m-0'>Ipsum vestibulum fringil holupta elit voltars semper incididunt dolor ipsum.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default OurMission;