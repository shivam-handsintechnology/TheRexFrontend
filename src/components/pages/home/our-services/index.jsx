import "./Services.css"
import subtitleimg from "@/assets/homepage/subtitle-img2-1.svg"
import agencies from "@/assets/homepage/agencies.svg"
import emsearch from "@/assets/homepage/employee-search.svg"
import book from "@/assets/homepage/book.svg"


const Service = () => {
  return (
    <div>
      <section className="our-servicess" id="service-sec">
        <div className="title-area text-center mb-0">
          <span className="sub-title2" style={{color:'#430303'}}>
            <img src={subtitleimg} alt="img" />
            Our Services
          </span>
        </div>
        <div className="container-fluid">
          <div className="row gy-4 mt-5">
            <div className="col-lg-4 sndkdsn">
              <div className="level-height" />
              <div className="service-card style2">
                <div
                  className="service-card-bg-img background-image"
                />
                <div className="service-content">
                  <div className="service-card-icon">
                    <img src={agencies} alt="icon" />
                  </div>
                  <h3 className="box-title">
                    <a href="#">Agencies</a>
                  </h3>
                </div>
                <p className="service-card-text">
                  Contractors, Suppliers, Manufacturers, traders and all other service or product companies are welcome to expand their business
                </p>
              </div>
            </div>
            <div className="col-lg-4 sndkdsn">
              <div className="level-height" />
              <div className="service-card style2">
                <div
                  className="service-card-bg-img background-image"
                />
                <div className="service-content">
                  <div className="service-card-icon">
                    <img src={emsearch} alt="icon" />
                  </div>
                  <h3 className="box-title">
                    <a href="#">Recruiter</a>
                  </h3>
                </div>
                <p className="service-card-text">
                  Employers looking for real estate experts only and people educated with experience in the real estate looking forward to make their career in this industry are most welcome to register themselves for better team building
                </p>
              </div>
            </div>
            <div className="col-lg-4 sndkdsn">
              <div className="level-height" />
              <div className="service-card style2">
                <div
                  className="service-card-bg-img background-image"
                />
                <div className="service-content">
                  <div className="service-card-icon">
                    <img src={book} alt="icon" />
                  </div>
                  <h3 className="box-title">
                    <a href="#">Knowledge Box</a>
                  </h3>
                </div>
                <p className="service-card-text">
                  Stay updated with the latest trends, set of rules, upcoming  realty events and more
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Service
