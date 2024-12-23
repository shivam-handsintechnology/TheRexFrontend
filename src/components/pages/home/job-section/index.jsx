import { Col, Container, Row } from "react-bootstrap"
import subtitleimg from "@/assets/homepage/subtitle-img2-1.svg"
import avatar from "@/assets/job/avatar.png"
import background from "@/assets/job/background.png"
import "./JobSection.css"
import { useNavigate } from "react-router-dom"
import { useGetAllTopCompaniesQuery } from "@/redux/apiSlice"
import { Loading } from "@/hooks/SkeltonsData"
import CompanyCard from "@/pages/Job/Cards/CompanyCard"
const JobSection = () => {
    const { data, isFetching, isError } = useGetAllTopCompaniesQuery({ page: 1, limit: 12, islatest: "1" })
    const navigate = useNavigate()
    if (isFetching) return <Loading />
    return (
        <div className="job-section">
            <div className="title-area mb-2 mt-5" style={{ textAlign: 'center' }}>
                <span className="sub-title2">
                    <img src={subtitleimg} alt="img" />
                    Job Section
                </span>
            </div>
            <Container fluid>
                <Row>
                    {data && data?.data?.map((item) => (
                        <Col lg={3} key={item._id} className='mb-5'>
                            <CompanyCard item={item} />
                        </Col>
                    ))}
                </Row>
                <button className="view-all-companies">View All Companies</button>
            </Container>
            <img className="bacl-job-sec" src={background} alt="" />
        </div>
    )
}

export default JobSection
