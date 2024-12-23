import React, { useEffect, useState } from 'react'
import joserv from "@/assets/jobservcie.png"
import { Col, Container, Row } from 'react-bootstrap'
import comlogo from "@/assets/comlogo.png"
import CarouselWithPagination from './CustomPagingSlider'
import { useGetCompanyByIdQuery, useGetJobByIdQuery, useApplyJobMutation, useGetJobByCompanyIdQuery } from '@/redux/apiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { EmployerLogo } from '@/services/config'
import swal from 'sweetalert'
const Jobdetails = () => {
    const { token, role } = useSelector(store => store.auth);
    const navigate = useNavigate()
    console.log({ token })
    const { jobid } = useSelector((state) => state.filters)
    const { id } = useParams()
    const { data } = useGetJobByIdQuery({ id: jobid }, { skip: !jobid })
    const { data: companydata, } = useGetCompanyByIdQuery({ companyId: id }, { skip: !id })
    const [applyJob] = useApplyJobMutation();
    const [currentPage, setCurrentPage] = useState(1);
    const { data: JobsByCompanyData, isFetching } = useGetJobByCompanyIdQuery({ id: id, page: currentPage, limt: 8 }, { skip: !id })
    const handleJobClick = async (id) => {
        try {
            if (!token) {
                swal("Error", "Please Login First", "error").then(() => {
                    return navigate("/login");
                })
            }
            else if (!role) {
                swal("Error", "Please Add Job Seeker details", "error").then(() => {
                    return navigate("/profile", { state: { isApplyjob: true } });
                })
            }
            else if (role == "recruiter") {
                swal("Error", "You Dont have Permission To AppLy Job", "error").then(() => {
                    return ""
                })
            }
            else if (!data?.job?.isApplied) {
                const res = await applyJob({ jobId: id }).unwrap();
                if (res.success) {
                    swal("Success", res.message, "success");
                }
            }
        } catch (error) {
            swal("Warning", error?.data?.message || error.message, "warning");
            console.log("error", error)
        }
    }
    return (
        <div>
            <img src={joserv} className='w-100' />
            <Container className='mt-5 mb-5'>
                <Row className='row-img'>
                    <Col lg={2}>
                        <img src={`${EmployerLogo}${companydata?.company?.logo?.filename}`} className='w-100' />
                    </Col>
                    <Col lg={10}>
                        <h3> {companydata?.company?.name}</h3>
                        <p>{
                            companydata?.company?.aboutus
                        }</p>
                        <h4>{companydata?.company?.vacancies?.total} Vacancies</h4>
                    </Col>
                </Row>
                <CarouselWithPagination  {...{ currentPage, setCurrentPage, JobsByCompanyData: JobsByCompanyData, isFetching }} />
                <Row>
                    <Col lg={9}>
                        <div className='jonb-desce'>
                            <h3>Job Description</h3>
                            <div className='job-des-detai'>
                                <div dangerouslySetInnerHTML={{ __html: data?.job?.description }}></div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className='jonb-descee'>
                            <h3>Job Details</h3>
                            <div className='details-jobss'>
                                <h4>Package : {`${data?.job?.salary_range?.min} lacs To ${data?.job?.salary_range?.max} lacs Yearly`}</h4>
                                <hr />
                                <h4>Phone No. : {data?.job?.company?.phone}</h4>
                                <hr />
                                <h4>Email ID : {data?.job?.company?.email}</h4>
                                <hr />
                                <h4>Work Mode : {data?.job?.jobType}</h4>
                                <hr />
                                <h4>Experience : {`${data?.job?.experience?.min_years}  To ${data?.job?.experience?.max_years} Years`}</h4>
                                <hr />
                                <h4>Website :{data?.job?.company?.website}</h4>
                                <hr />
                                <h4>Vacancies : {data?.job?.position}</h4>
                            </div>
                            <button
                                onClick={() => handleJobClick(data?.job?._id)}
                                type='button'
                                disabled={data?.job?.isApplied}
                            >
                                {!token ? 'Please Login First' : data?.job?.isApplied ? 'Applied' : 'Apply Now'}
                            </button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div className='jonb-desce'>
                            <h3>Job Skill</h3>
                            <div className='job-des-detai'>
                                <ul>
                                    {data?.job?.skills?.map((item) => (<li>{item}</li>))}
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div className='jonb-desce'>
                            <h3>Job Requirement</h3>
                            <div className='job-des-detai'>
                                <ul>
                                    {data?.job?.requirements?.map((item) => (<li>{item}</li>))}
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <h2 className='similar-jobsads'>Similar Jobs</h2>
                </Row>
                <Row className='mt-3'>
                    <Col lg={3} className='mb-5'>
                        <div className='late-ompanies'>
                            <img src={comlogo} />
                            <h3>Company 1</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                            <h4>47 Vacancies</h4>
                            <button>View More</button>
                        </div>
                    </Col>
                    <Col lg={3} className='mb-5'>
                        <div className='late-ompanies'>
                            <img src={comlogo} />
                            <h3>Company 1</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                            <h4>47 Vacancies</h4>
                            <button>View More</button>
                        </div>
                    </Col>
                    <Col lg={3} className='mb-5'>
                        <div className='late-ompanies'>
                            <img src={comlogo} />
                            <h3>Company 1</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                            <h4>47 Vacancies</h4>
                            <button>View More</button>
                        </div>
                    </Col>
                    <Col lg={3} className='mb-5'>
                        <div className='late-ompanies'>
                            <img src={comlogo} />
                            <h3>Company 1</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                            <h4>47 Vacancies</h4>
                            <button>View More</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Jobdetails
