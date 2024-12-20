import React from 'react'
import subtitleimg from "@/assets/homepage/subtitle-img2-1.svg"
import comlogo from "@/assets/one.png"
import comlogo1 from "@/assets/two.png"
import comlogo2 from "@/assets/three.png"
import comlogo3 from "@/assets/four.png"
import comlogo4 from "@/assets/five.png"
import { Col, Container, Row } from 'react-bootstrap'

const Jobsteps = () => {
    return (
        <div>
            <section className='latest-counter'>
                <div className="title-area text-center mb-0">
                    <span className="sub-title2" style={{ color: '#430303' }}>
                        <img src={subtitleimg} alt="img" />
                        Simple Steps
                    </span>
                </div>
                <Container>
                    <Row className='mt-5'>
                        <Col lg={2}>
                            <div className='step-counter1'>
                                <img src={comlogo} />
                                <h3>Step 1 Text</h3>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className='step-counter2'>
                                <img src={comlogo1} />
                                <h3>Step 2 Text</h3>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className='step-counter3'>
                                <img src={comlogo2} />
                                <h3>Step 3 Text</h3>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className='step-counter4'>
                                <img src={comlogo3} />
                                <h3>Step 4 Text</h3>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className='step-counter5'>
                                <img src={comlogo4} />
                                <h3>Step 5 Text</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Jobsteps
