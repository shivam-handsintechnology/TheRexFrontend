import { Container } from "react-bootstrap"
import "./Edtech.css"
import subtitleimg from "@/assets/homepage/subtitle-img2-1.svg"
import Podcast from "@/components/common/tabs/edtech/Podcast";

const Edtech = () => {
    return (
        <div className="edtech-section">
            <div className="title-area mb-2" style={{ textAlign: 'center' }}>
                <span className="sub-title2">
                    <img src={subtitleimg} alt="img" />
                    EdTech
                </span>
            </div>
            <Container fluid>
                <Podcast />
            </Container>
        </div>
    )
}

export default Edtech
