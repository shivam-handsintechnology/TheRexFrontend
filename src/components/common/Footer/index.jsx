import logo from "@/assets/logo.svg"
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <footer className="footer-wrapper footer-layout-default">
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xxl-3 col-xl-3">
                <img className="foot-logo" src={logo} alt="" />
              </div>
              <div className="col-md-6 col-xxl-5 col-xl-5">
                <div className="widget footer-widget">
                  <div className="th-widget-about">
                    <p className="about-text">
                      At The REX, we provide a transparent platform for all vendors
                      and projects in the real estate industry. Our listings
                      are&nbsp;verified&nbsp;to ensure that both vendors and projects
                      are&nbsp;legitimate. Our goal is to connect the right vendors to
                      the right projects and vice versa.
                    </p>
                    <div className="th-social">
                      <a href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="https://www.twitter.com/">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="https://www.linkedin.com/">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Quick Links</h3>
                  <hr />
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Blogs</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Useful Links</h3>
                  <hr />
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="#">FAQs</a>
                      </li>
                      <li>
                        <a href="disclaimer">Disclaimer</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policies</a>
                      </li>
                      <li>
                        <a href="#">Terms and Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-12">
                <p className="copyright-text">
                  © Copyright 2024<a href="index.html"> THE REX</a> All Rights
                  Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer
