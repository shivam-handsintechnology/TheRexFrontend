import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo from "@/assets/homepage/banner.png"
import "./HomeBanner.css"

const HomeBanner = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <Slider className="home-banner-slider" {...settings}>
                <div>
                    <div className="banner-texts">
                    <h1>The REX, a mediator who is providing business opportunities for builders, vendors, and other industry partners</h1>
                    <h2>“Experience the change which awaits you”</h2>
                        <img src={logo} />
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default HomeBanner
