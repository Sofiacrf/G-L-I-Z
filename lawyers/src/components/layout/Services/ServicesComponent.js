import React from "react";
import services from "../../../assets/services.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import "./services.css";

function ServicesComponent() {

  const element = <FontAwesomeIcon icon={faScaleBalanced} />

  return (
    <section>
      <div className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-lightdisplay-4 fw-bold">Nuestros Servicios</h1>
            <p className="lead text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              vestibulum non sapien nec cursus. Aliquam eros augue, placerat
              vitae rutrum quis, fringilla et arcu. Vivamus vulputate metus id
              lacinia feugiat. Fusce elementum nunc rutrum sagittis dapibus
            </p>
            <p>
              <a href="/contacto" className="btn btn-secondary">
                Contáctanos
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* SERVICES SECTION */}
      {/* SERVICE ONE */}
      <div className="services-section">
        <div className="row-cols-md-3 g-4 m-3">
          <div className="col responsive card">
            <div className="services-card">
              <img className="img-fluid resp-img" src={services} waves />
              <div className="card-body">
                <div className="card-title services-card-header">
                  Servicio 1
                </div>
                <div className="card-text services-card-content">
                  Lorem impusm hihaodb oidviods povionv oiciobnzdc povopdsn
                  pnoixn bvodbv oibvoip oidbvib odvnoibv odviodb oibvoidsb
                  podndsbv oibvids obviodbs odibvoids.
                </div>
                <div className="card-footer services-card-footer card-bottom">
                  <div className="row">
                    <div className="col md-2">
                      {element}
                    </div>
                    <div className="col md-10">
                      <a
                        href="/contacto"
                        type="button"
                        className="services-card-button"
                      >
                        Más información
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICE TWO */}
      <div className="services-section">
        <div className="row-cols-md-3 g-4 m-3">
          <div className="col responsive card">
            <div className="services-card">
              <img className="img-fluid resp-img" src={services} waves />
              <div className="card-body">
                <div className="card-title services-card-header">
                  Servicio 1
                </div>
                <div className="card-text services-card-content">
                  Lorem impusm hihaodb oidviods povionv oiciobnzdc povopdsn
                  pnoixn bvodbv oibvoip oidbvib odvnoibv odviodb oibvoidsb
                  podndsbv oibvids obviodbs odibvoids.
                </div>
                <div className="card-footer services-card-footer card-bottom">
                  <div className="row">
                    <div className="col md-2">
                      {element}
                    </div>
                    <div className="col md-10">
                      <a
                        href="/contacto"
                        type="button"
                        className="services-card-button"
                      >
                        Más información
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES THREE */}
      <div className="services-section">
        <div className="row-cols-md-3 g-4 m-3">
          <div className="col responsive card">
            <div className="services-card">
              <img className="img-fluid resp-img" src={services} waves />
              <div className="card-body">
                <div className="card-title services-card-header">
                  Servicio 1
                </div>
                <div className="card-text services-card-content">
                  Lorem impusm hihaodb oidviods povionv oiciobnzdc povopdsn
                  pnoixn bvodbv oibvoip oidbvib odvnoibv odviodb oibvoidsb
                  podndsbv oibvids obviodbs odibvoids.
                </div>
                <div className="card-footer services-card-footer card-bottom">
                  <div className="row">
                    <div className="col md-2">
                      {element}
                    </div>
                    <div className="col md-10">
                      <a
                        href="/contacto"
                        type="button"
                        className="services-card-button"
                      >
                        Más información
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesComponent;
