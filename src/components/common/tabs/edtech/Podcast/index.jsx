import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from "@/assets/edtech/one.png"
import two from "@/assets/edtech/two.png"
import three from "@/assets/edtech/three.png"
import four from "@/assets/edtech/four.png"


const Podcast = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
    <div>
      <Slider className="home-banner-slider" {...settings}>
        <div>
          <div className="play-buttons">
            <h6>Coming Soon</h6>
            <img className="maine-img" src={one} />
            <h2>Podcast</h2>
          </div>
        </div>
        <div>
          <div className="play-buttons">
            <h6>Coming Soon</h6>
            <img className="maine-img" src={two} />
            <h2>News Feed</h2>
          </div>
        </div>
        <div>
          <div className="play-buttons">
            <h6>Coming Soon</h6>
            <img className="maine-img" src={three} />
            <h2>Online Lectures</h2>
          </div>
        </div>
        <div>
          <div className="play-buttons">
            <h6>Coming Soon</h6>
            <img className="maine-img" src={four} />
            <h2>University Lectures</h2>
          </div>
        </div>
        <div>
          <div className="play-buttons">
            <h6>Coming Soon</h6>
            <img className="maine-img" src={one} />
            <h2>Podcast</h2>
          </div>
        </div>
        <div>
          <div className="play-buttons">
            <h6>Coming Soon</h6>
            <img className="maine-img" src={two} />
            <h2>News Feed</h2>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Podcast
