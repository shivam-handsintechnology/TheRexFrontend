import React from 'react'
import subtitleimg from "@/assets/homepage/subtitle-img2-1.svg"
import { Col, Container, Row } from 'react-bootstrap'
import { useGetAllTopCompaniesQuery } from '@/redux/apiSlice'
import { Loading } from '@/hooks/SkeltonsData'
import { EmployerLogo } from '@/services/config'
import { useNavigate } from 'react-router-dom'
import { paths } from '@/services/path'
import CompanyCard from './Cards/CompanyCard'

const Latestcompanies = () => {

    const { data, isFetching, isError } = useGetAllTopCompaniesQuery({ page: 1, limit: 12, islatest: "1" })
    const navigate = useNavigate()
    if (isFetching) return <Loading />

    return (
        <div>
            <section className='latest-jobsgs'>
                <div className="title-area text-center mb-0">
                    <span className="sub-title2" style={{ color: '#430303' }}>
                        <img src={subtitleimg} alt="img" />
                        Latest Companies
                    </span>
                </div>
                <Container>
                    <Row className='mt-5'>
                        {data && data?.data?.map((item) => (
                            <Col lg={3} key={item._id} className='mb-5'>
                                <CompanyCard item={item} />
                            </Col>
                        ))}
                    </Row>
                    <button className="view-all-companies" onClick={() => navigate(`${paths.Jobservices}`)}>View All Companies</button>


                </Container>
            </section>
        </div>
    )
}

export default Latestcompanies
