import { Col, Container, Row } from "react-bootstrap"
import subtitleimg from "@/assets/homepage/subtitle-img2-1.svg"
import avatar from "@/assets/job/avatar.png"
import background from "@/assets/job/background.png"
import "./JobSection.css"
const JobSection = () => {
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
                    <Col lg={3}>
                        <div className="box-card">
                            <h6>Urgent Required</h6>
                            <img src={avatar} />
                            <h3>Company 1</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                            <h5>47 Vacancies</h5>
                            <button>Apply Now</button>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="box-card">
                            <img src={avatar} />
                            <h3>Company 2</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                            <h5>47 Vacancies</h5>
                            <button>Apply Now</button>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="box-card">
                            <img src={avatar} />
                            <h3>Company 3</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                            <h5>47 Vacancies</h5>
                            <button>Apply Now</button>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="box-card">
                            <h6>Urgent Required</h6>
                            <img src={avatar} />
                            <h3>Company 4</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                            <h5>47 Vacancies</h5>
                            <button>Apply Now</button>
                        </div>
                    </Col>
                </Row>
                <button className="view-all-companies">View All Companies</button>
            </Container>
            <img  className="bacl-job-sec" src={background} alt="" />
        </div>
    )
}

export default JobSection
