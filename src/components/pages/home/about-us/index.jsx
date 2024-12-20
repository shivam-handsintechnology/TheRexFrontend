import aboutus from "@/assets/homepage/about.png"
import "./About.css"

const About = () => {
  return (
    <div>
      <div className="overflow-hidden space" id="about-sec">
        <div className="container">
          <div
            className="row align-items-center"
            style={{ justifyContent: "space-between" }}
          >
            <div className="col-xl-5 mb-50 mb-xl-0">
              <img src={aboutus} className="about-images" alt="About" />
            </div>
            <div className="col-xl-6">
              <div className="about2-title-wrap">
                <div className="title-area mb-30">
                  <h2 className="sec-title12">Perfect Matchmakers of</h2>
                  <h2 className="sec-title12" style={{ color: "#E6BD2B" }}>
                    The Vendors and Projects
                  </h2>
                </div>
                <p className="mt-n2 mb-25">
                  At The REX, we provide a transparent platform for all vendors and
                  projects in the real estate industry. Our listings
                  are&nbsp;verified&nbsp;to ensure that both vendors and projects
                  are&nbsp;legitimate. Our goal is to connect the right vendors to the
                  right projects and vice versa.
                </p>
                <a href="#" className="th-btn-read-more">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
