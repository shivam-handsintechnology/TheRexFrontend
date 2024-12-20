import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import subtitleimg from "@/assets/homepage/subtitle-img2-1.svg"
import one from "@/assets/latest/one.png"
import two from "@/assets/latest/two.png"
import three from "@/assets/latest/three.png"
import four from "@/assets/latest/four.png"
import { Container } from "react-bootstrap"

import "./Latestupdates.css"

const LatestUpdates = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="latest-abcd-updates">
            <div className="section-latestupdates">
                <div className="title-area text-center mb-1">
                    <span className="sub-title2">
                        <img src={subtitleimg} alt="img" />
                        Our Latest Updates
                    </span>
                </div>
            </div>
            <Container fluid>
                <Slider className="latests" {...settings}>
                    <div>
                        <a href="https://www.constructionworld.in/building-construction-products">
                            <div className="play-buttons1">
                                <img className="maine-img" src={one} />
                                <h2>Building-Construction-Products</h2>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://economictimes.indiatimes.com/industry/indl-goods/svs/construction/construction-equi[…]o-135650-units-in-fy24-icema/articleshow/109893166.cms">
                            <div className="play-buttons1">
                                <img className="maine-img" src={two} />
                                <h2>Construction equipment sales rise 26% to 1,35,650 units in FY24: ICEMA</h2>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.constructionweekonline.in/business/innovation-in-construction-how-advanced-technologies-are-enhancing-quality-standards">
                            <div className="play-buttons1">
                                <img className="maine-img" src={three} />
                                <h2>Innovation in construction: How advanced technologies are enhancing quality standards</h2>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://economictimes.indiatimes.com/industry/indl-goods/svs/construction/indias-construction-sector-is-booming-but-construction-and-demolition-waste-management-is-weak/articleshow/111990327.cms">
                            <div className="play-buttons1">
                                <img className="maine-img" src={four} />
                                <h2>India construction sector is booming, but construction and demolition waste management is weak</h2>
                            </div>
                        </a>
                    </div>
                    <div>
                        <div className="play-buttons1">
                            <img className="maine-img" src={one} />
                            <h2>Building-Construction-Products</h2>
                        </div>
                    </div>
                    <div>
                        <div className="play-buttons1">
                            <img className="maine-img" src={two} />
                            <h2>Construction equipment sales rise 26% to 1,35,650 units in FY24: ICEMA</h2>
                        </div>
                    </div>
                    <div>
                        <div className="play-buttons1">
                            <img className="maine-img" src={three} />
                            <h2>Innovation in construction: How advanced technologies are enhancing quality standards</h2>
                        </div>
                    </div>
                    <div>
                        <div className="play-buttons1">
                            <img className="maine-img" src={four} />
                            <h2>India construction sector is booming, but construction and demolition waste management is weak</h2>
                        </div>
                    </div>
                </Slider>
            </Container>
        </div>
    )
}

export default LatestUpdates
