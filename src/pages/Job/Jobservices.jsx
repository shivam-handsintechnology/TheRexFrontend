import React, { useEffect, useState } from 'react';
import joserv from "@/assets/jobservcie.png"
import comlogo from "@/assets/comlogo.png"
import { Col, Container, Form, Row, Accordion } from 'react-bootstrap'

import FilterCard from './FilterCard/Index';
import { useGetAllTopCompaniesQuery } from '@/redux/apiSlice';
import { useSelector } from 'react-redux';
import CompanyCard from './Cards/CompanyCard';

const Jobservices = () => {
    const jobFilters = useSelector((state) => state.job);
    const { data, refetch } = useGetAllTopCompaniesQuery(jobFilters)
    console.log("datajobFilters", data)
    useEffect(() => {
        try {
            refetch()
        } catch (error) {
            return
        }
    }, [jobFilters])
    return (
        <div className='mb-5'>
            <div className="image-container relative mb-5">
                <img
                    src={joserv}
                    className="w-100"
                    alt=""
                />
                <div className="overlay12 absolute top-1/2 left-0 right-0 -translate-y-1/2">
                    <div className="overlaycontentnt w-full">
                        <Row className="flex justify-center">
                            <div className='col-lg-8'>
                                <div className='sass123 flex'>
                                    <Form.Control
                                        className='mskmd flex-grow mr-2'
                                        placeholder="Search here ....."
                                        aria-label="Email Address"
                                    />
                                    <button className='searh-buttonas'>Search</button>
                                </div>
                            </div>
                        </Row>
                    </div>
                </div>
            </div>
            <Container>
                <Row>
                    <Col lg={3}>
                        <FilterCard />
                    </Col>
                    <Col lg={9}>
                        <Row>
                            {Array.isArray(data?.data) && data?.data.map((item, index) => (
                                <Col key={index} lg={4} className='mb-5'>
                                    <CompanyCard item={item} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Jobservices