import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css"
import { Container } from "react-bootstrap";

import test1 from "@/assets/testimonials/testi-quote2.svg"
import test2 from "@/assets/testimonials/testi_2_1.jpg"
import subtitleimg from "@/assets/homepage/subtitle-img2-1.svg"

const Testimonails = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    return (
        <div className="testimonail-section-slider">
            <Container>
                <div className="title-area text-center"><span className="sub-title2"><img src={subtitleimg} alt="img" />Testimonials</span>
                    <h2 className="sec-title text-white">What Our Clients Say?</h2>
                </div>
                <Slider {...settings}>
                    <div>
                        <div className="testimonail-section">
                            <div className="testi-card style2">
                                <div className="testi-card-icon">
                                    <img src={test1} alt="img" />
                                </div>
                                <p className="testi-card_text">
                                    <span className="text-theme">“</span>Real estate construction companies may
                                    also engage in sales &amp; marketing activities to promote their developed
                                    properties. This includes creating marketing strategies.
                                    <span className="text-theme">”</span>
                                </p>
                                <div className="testi-card_content">
                                    <div className="testi-card_img">
                                        <img src={test2} alt="Avater" />
                                    </div>
                                    <div className="testi-card_bottom">
                                        <h3 className="testi-card_name">Michel Carlos</h3>
                                        <span className="testi-card_desig">Architect</span>
                                        <div className="testi-card_review">
                                            <i className="fa fa-star" />{" "}
                                            <i className="fa fa-star" />{" "}
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />{" "}
                                            <i className="fa fa-star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="testimonail-section">
                            <div className="testi-card style2">
                                <div className="testi-card-icon">
                                    <img src={test1} alt="img" />
                                </div>
                                <p className="testi-card_text">
                                    <span className="text-theme">“</span>Real estate construction companies may
                                    also engage in sales &amp; marketing activities to promote their developed
                                    properties. This includes creating marketing strategies.
                                    <span className="text-theme">”</span>
                                </p>
                                <div className="testi-card_content">
                                    <div className="testi-card_img">
                                        <img src={test2} alt="Avater" />
                                    </div>
                                    <div className="testi-card_bottom">
                                        <h3 className="testi-card_name">Michel Carlos</h3>
                                        <span className="testi-card_desig">Architect</span>
                                        <div className="testi-card_review">
                                            <i className="fa fa-star" />{" "}
                                            <i className="fa fa-star" />{" "}
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />{" "}
                                            <i className="fa fa-star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="testimonail-section">
                            <div className="testi-card style2">
                                <div className="testi-card-icon">
                                    <img src={test1} alt="img" />
                                </div>
                                <p className="testi-card_text">
                                    <span className="text-theme">“</span>Real estate construction companies may
                                    also engage in sales &amp; marketing activities to promote their developed
                                    properties. This includes creating marketing strategies.
                                    <span className="text-theme">”</span>
                                </p>
                                <div className="testi-card_content">
                                    <div className="testi-card_img">
                                        <img src={test2} alt="Avater" />
                                    </div>
                                    <div className="testi-card_bottom">
                                        <h3 className="testi-card_name">Michel Carlos</h3>
                                        <span className="testi-card_desig">Architect</span>
                                        <div className="testi-card_review">
                                            <i className="fa fa-star" />{" "}
                                            <i className="fa fa-star" />{" "}
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />{" "}
                                            <i className="fa fa-star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="testimonail-section">
                            <div className="testi-card style2">
                                <div className="testi-card-icon">
                                    <img src={test1} alt="img" />
                                </div>
                                <p className="testi-card_text">
                                    <span className="text-theme">“</span>Real estate construction companies may
                                    also engage in sales &amp; marketing activities to promote their developed
                                    properties. This includes creating marketing strategies.
                                    <span className="text-theme">”</span>
                                </p>
                                <div className="testi-card_content">
                                    <div className="testi-card_img">
                                        <img src={test2} alt="Avater" />
                                    </div>
                                    <div className="testi-card_bottom">
                                        <h3 className="testi-card_name">Michel Carlos</h3>
                                        <span className="testi-card_desig">Architect</span>
                                        <div className="testi-card_review">
                                            <i className="fa fa-star" />{" "}
                                            <i className="fa fa-star" />{" "}
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />{" "}
                                            <i className="fa fa-star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="testimonail-section">
                            <div className="testi-card style2">
                                <div className="testi-card-icon">
                                    <img src={test1} alt="img" />
                                </div>
                                <p className="testi-card_text">
                                    <span className="text-theme">“</span>Real estate construction companies may
                                    also engage in sales &amp; marketing activities to promote their developed
                                    properties. This includes creating marketing strategies.
                                    <span className="text-theme">”</span>
                                </p>
                                <div className="testi-card_content">
                                    <div className="testi-card_img">
                                        <img src={test2} alt="Avater" />
                                    </div>
                                    <div className="testi-card_bottom">
                                        <h3 className="testi-card_name">Michel Carlos</h3>
                                        <span className="testi-card_desig">Architect</span>
                                        <div className="testi-card_review">
                                            <i className="fa fa-star" />{" "}
                                            <i className="fa fa-star" />{" "}
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />{" "}
                                            <i className="fa fa-star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="testimonail-section">
                            <div className="testi-card style2">
                                <div className="testi-card-icon">
                                    <img src={test1} alt="img" />
                                </div>
                                <p className="testi-card_text">
                                    <span className="text-theme">“</span>Real estate construction companies may
                                    also engage in sales &amp; marketing activities to promote their developed
                                    properties. This includes creating marketing strategies.
                                    <span className="text-theme">”</span>
                                </p>
                                <div className="testi-card_content">
                                    <div className="testi-card_img">
                                        <img src={test2} alt="Avater" />
                                    </div>
                                    <div className="testi-card_bottom">
                                        <h3 className="testi-card_name">Michel Carlos</h3>
                                        <span className="testi-card_desig">Architect</span>
                                        <div className="testi-card_review">
                                            <i className="fa fa-star" />{" "}
                                            <i className="fa fa-star" />{" "}
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />{" "}
                                            <i className="fa fa-star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </Container>
        </div>
    )
}

export default Testimonails
