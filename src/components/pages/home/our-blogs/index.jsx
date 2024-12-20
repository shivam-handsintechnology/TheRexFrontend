import image1 from "@/assets/homepage/first.png"
import image2 from "@/assets/homepage/second.png"
import image3 from "@/assets/homepage/third.png"
import "./Blog.css"
import subtitleimg from "@/assets/homepage/subtitle-img2-1.svg"
const Blogs = () => {
    return (
        <div>
            <section className="space" id="blog-sec">
                <div className="container">
                    <div className="title-area text-center">
                        <span className="sub-title2">
                            <img src={subtitleimg} alt="img" />
                            Our Blogs
                        </span>
                        {/* <h2 className="sec-title">Our Latest News &amp; Blog</h2> */}
                    </div>
                    <div className="blog-grid-wrap">
                        <div className="blog-grid">
                            <div className="blog-img">
                                <img src={image1} alt="blog image" />
                                <div className="blog-date">
                                    <span>Coming Soon</span>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <a className="author" href="#">
                                        <i className="fa-solid fa-user" />
                                        Alex Michel
                                    </a>{" "}
                                    <a href="#">
                                        <i className="fa-solid fa-tags" />
                                        Construction
                                    </a>
                                </div>
                                <h3 className="blog-title">
                                    <a href="#">
                                        Interior design is the Art and science Of Design in Real Estate
                                    </a>
                                </h3>
                                <p className="blog-text">
                                    Real estate construction involves numerous legal aspects, such as
                                    obtaining permits, ensuring adherence to zoning regulations.
                                </p>
                                <a href="#" className="link-btn style2">
                                    Read More
                                    <i className="fas fa-arrow-right ms-2" />
                                </a>
                            </div>
                        </div>
                        <div className="blog-grid">
                            <div className="blog-img">
                                <img src={image2} alt="blog image" />
                                <div className="blog-date">
                                    <span>Coming Soon</span>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <a className="author" href="#">
                                        <i className="fa-solid fa-user" />
                                        David Smith
                                    </a>{" "}
                                    <a href="#">
                                        <i className="fa-solid fa-tags" />
                                        Architect
                                    </a>
                                </div>
                                <h3 className="blog-title">
                                    <a href="#">The beast team make around and work</a>
                                </h3>
                                <p className="blog-text">
                                    Real estate construction involves numerous legal aspects,
                                </p>
                                <a href="#" className="link-btn style2">
                                    Read More
                                    <i className="fas fa-arrow-right ms-2" />
                                </a>
                            </div>
                        </div>
                        <div className="blog-grid">
                            <div className="blog-img">
                                <img src={image3} alt="blog image" />
                                <div className="blog-date">
                                    <span>Coming Soon</span>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <a className="author" href="#">
                                        <i className="fa-solid fa-user" />
                                        Kevin Perry
                                    </a>{" "}
                                    <a href="#">
                                        <i className="fa-solid fa-tags" />
                                        Industrial
                                    </a>
                                </div>
                                <h3 className="blog-title">
                                    <a href="#">On an island in the sun, coal power is king</a>
                                </h3>
                                <p className="blog-text">
                                    Real estate construction involves numerous legal aspects,
                                </p>
                                <a href="#" className="link-btn style2">
                                    Read More
                                    <i className="fas fa-arrow-right ms-2" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Blogs
