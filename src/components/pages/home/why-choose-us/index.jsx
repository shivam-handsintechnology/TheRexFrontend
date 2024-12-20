import "./Whychoose.css"
import subtitleimg from "@/assets/homepage/subtitle-img2-1.svg"
import whychoose from "@/assets/homepage/whychoose.png"
import shape1 from "@/assets/homepage/shape1.png"
import tick from "@/assets/homepage/tick.svg"

const WhyChooseUs = () => {
    return (
        <div>
            <div className="why-sec-v2 overflow-hidden space why-us shape-mockup-wrap">
                <div
                    className="shape-mockup jump d-md-block d-none"
                    style={{ right: 0, bottom: "10%" }}
                >
                    <img src={shape1} alt="shapes" />
                </div>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-4">
                            <div
                                className="tilt-active mb-50 mb-xl-0"
                                style={{
                                    willChange: "transform",
                                    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)"
                                }}
                            >
                                <img
                                    src={whychoose}
                                    alt="img"
                                    className="w-100"
                                />
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="wcu-wrap2 ms-xxl-5">
                                <div>
                                    <span className="sub-title2">
                                        <img src={subtitleimg} alt="img" />
                                        Why Choose Us
                                    </span>
                                    {/* <h2 className="sec-title">
                                        Leading Way In Real Estate Building &amp; Civil Constructions!
                                    </h2>
                                    <p className="sec-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                                        elementum nec nulla vel cursus. Suspendisse efficitur.
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                                        elementum nec nulla vel cursus. Suspendisse efficitur
                                    </p> */}
                                </div>
                                <div className="row g-4">
                                    <div className="col-sm-4">
                                        <div className="wcu-box style2">
                                            <div className="wcu-box_icon">
                                                <img src={tick} alt="img" />
                                            </div>
                                            <div className="wcu-box_details">
                                                <h3 className="h5 wcu-box_title">
                                                    <a href="#">Education Purpose</a>
                                                </h3>
                                                <p className="wcu-box_text">
                                                    Stay updated with the real estate industry and the new changes
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="wcu-box style2">
                                            <div className="wcu-box_icon">
                                                <img src={tick} alt="img" />
                                            </div>
                                            <div className="wcu-box_details">
                                                <h3 className="h5 wcu-box_title">
                                                    <a href="#">Online Job Offerings</a>
                                                </h3>
                                                <p className="wcu-box_text">
                                                    Search your dream job in the real estate industry and get a chance to accomplish your dream
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="wcu-box style2">
                                            <div className="wcu-box_icon">
                                                <img src={tick} alt="img" />
                                            </div>
                                            <div className="wcu-box_details">
                                                <h3 className="h5 wcu-box_title">
                                                    <a href="#">End to End Traceability</a>
                                                </h3>
                                                <p className="wcu-box_text">
                                                    Keep your work and process transparent by tracking your work progress
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="wcu-box style2">
                                            <div className="wcu-box_icon">
                                                <img src={tick} alt="img" />
                                            </div>
                                            <div className="wcu-box_details">
                                                <h3 className="h5 wcu-box_title">
                                                    <a href="#">Verified Listings</a>
                                                </h3>
                                                <p className="wcu-box_text">
                                                    All of our vendors and projects are verified to ensure legitimacy and transparency
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="wcu-box style2">
                                            <div className="wcu-box_icon">
                                                <img src={tick} alt="img" />
                                            </div>
                                            <div className="wcu-box_details">
                                                <h3 className="h5 wcu-box_title">
                                                    <a href="#">Exceptional Service</a>
                                                </h3>
                                                <p className="wcu-box_text">
                                                    Our team is dedicated to providing exceptional service to all of our clients
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="wcu-box style2">
                                            <div className="wcu-box_icon">
                                                <img src={tick} alt="img" />
                                            </div>
                                            <div className="wcu-box_details">
                                                <h3 className="h5 wcu-box_title">
                                                    <a href="#">Industry Experts</a>
                                                </h3>
                                                <p className="wcu-box_text">
                                                    Our team consists of real estate industry experts who can guide you through every step of your project
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhyChooseUs
