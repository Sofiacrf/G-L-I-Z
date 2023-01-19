import React from "react";
import bootstrapLogo from "../../assets/bootstrap-img.png";
import "./footer.css";

function FooterComponent() {
  return (
    <section className="footer bd-footer background-c text-style">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3 mb-3">
            {/* <a
              className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none"
              href="/"
              aria-label="Lawyers"
            >
              <img
                src={bootstrapLogo}
                alt="company logo"
                width="40"
                height="32"
                className="d-block me-2"
                href="/"
              />
            </a> */}
            <h5>GLIZ</h5>
            <ul className="list-unstyled small text-muted color-grey">
              <li className="mb-2">
                <p>
                  {" "}
                  Lorem ipsum sit amet, consectetur adipiscing elit. Proin
                  vestibulum non sapien nec cursus.
                </p>
              </li>
            </ul>
          </div>

          {/* Second column */}
          <div className="col-6 col-lg-2 offset-lg-1 mb-3">
            <h5>Links</h5>
            <ul className="list-unstyled color-grey">
              <li className="mb-2">
                <a href="/">Home</a>
              </li>
              <li className="mb-2">
                <a href="/quienes-somos">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/nuestros-servicios">Shop!</a>
              </li>
              <li className="mb-2">
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="col-6 col-lg-2 offset-lg-1 mb-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled text-muted color-grey">
              <li className="mb-2">
                <p>USA</p>
              </li>
              <li className="mb-2">
                <p>123.45.67.89</p>
              </li>
              <li className="mb-2">
                <p>email@me.com</p>
              </li>
            </ul>
          </div>

          {/* Fourth Column */}
          <div className="col-lg-3 mb-3">
            <a
              className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none"
              href="/"
              aria-label="Lawyers"
            ></a>
            <ul className="list-unstyled small text-muted">
              <li className="mb-2">
                Designed and built by "
                <a href="https://rojastechnologies.com/">Rojas Technologies</a>
                ".
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterComponent;
