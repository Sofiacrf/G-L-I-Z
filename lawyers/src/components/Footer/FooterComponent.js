import React from "react";
import bootstrapLogo from "../../assets/bootstrap-img.png";
import "./footer.css";

function FooterComponent() {
  return (
    <section className="footer bd-footer background-c text-style">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3 mb-3">
            <a
              className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none"
              href="/"
              aria-label="Lawyers"
            >
              <img
                src={bootstrapLogo}
                width="40"
                height="32"
                className="d-block me-2"
                href="/"
              />
            </a>
            <h5>Lawyers</h5>
            <ul className="list-unstyled small text-muted">
              <li className="mb-2">
                <a>
                  {" "}
                  Lorem ipsum sit amet, consectetur adipiscing elit. Proin
                  vestibulum non sapien nec cursus.
                </a>
              </li>
            </ul>
          </div>

          {/* Second column */}
          <div className="col-6 col-lg-2 offset-lg-1 mb-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/">Inicio</a>
              </li>
              <li className="mb-2">
                <a href="/quienes-somos">Nosotros</a>
              </li>
              <li className="mb-2">
                <a href="/nuestros-servicios">Servicios</a>
              </li>
              <li className="mb-2">
                <a href="/contact">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="col-6 col-lg-2 offset-lg-1 mb-3">
            <h5>Ubicación</h5>
            <ul className="list-unstyled text-muted">
              <li className="mb-2">
                <a>Av. México, Ciudad de México, 01582</a>
              </li>
              <li className="mb-2">
                <a>55.12.34.56.78.9</a>
              </li>
              <li className="mb-2">
                <a>email@me.com</a>
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
