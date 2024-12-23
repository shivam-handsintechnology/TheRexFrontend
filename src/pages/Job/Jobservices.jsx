import React, { useEffect, useState } from 'react';
import joserv from "@/assets/jobservcie.png"
import comlogo from "@/assets/comlogo.png"
import { Col, Container, Form, Row, Accordion } from 'react-bootstrap'

import FilterCard from './FilterCard/Index';
import { useGetAllTopCompaniesQuery } from '@/redux/apiSlice';
import { useSelector } from 'react-redux';
import CompanyCard from './Cards/CompanyCard';
import SearchBox from './FilterCard/SearchBox';
import { Loading } from '@/hooks/SkeltonsData';

const Jobservices = () => {
    const jobFilters = useSelector((state) => state.filters);
    const { data, refetch, isFetching } = useGetAllTopCompaniesQuery(jobFilters)
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
                <SearchBox />
            </div>
            <Container>
                <Row>
                    <Col lg={3}>
                        <FilterCard />
                    </Col>
                    <Col lg={9}>
                        <Row>
                            {isFetching ? <Loading /> : Array.isArray(data?.data) && data?.data.map((item, index) => (
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