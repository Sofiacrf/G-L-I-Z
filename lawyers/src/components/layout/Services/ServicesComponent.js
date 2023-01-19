import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./services.css";
// Importing Images
import pulsera from "../../../assets/pulsera.jpg";
import pulseraThree from "../../../assets/pulsera-three.jpg";
import pulseraTwo from "../../../assets/pulsera-two.jpg";

function ServicesComponent() {
  // const element = <FontAwesomeIcon icon={faScaleBalanced} />;

  return (
    <section>
      {/* FIRST SECTION */}
      <div className="py-4 text-center first-section-container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-bold display-4 fw-bold text-title">
              Shop with us!
            </h1>
            <p className="lead text-muted first-paragraph">
              These are our best seller articles. Oinvsdnvoidbnio viondaoincoia
              vhodnvods onviodsbv oicdnvubdsv obscioac ivnoidsbvoisd boisdbvobv
              oisiobf podnofibf oibfoidbfji obfoebefoi.
            </p>
            <p>
              <a href="/contacto" className="btn btn-custom-style btn-lg">
                Contact Us
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* SERVICES SECTION */}

      <div className="card-group services-section">
        <div className="card card-container">
          <img
            className="card-img-top img-size"
            src={pulseraTwo}
            alt="Card cap"
          />
          <div className="card-body">
            <h4 className="card-title text-center">Wristband 1</h4>
            <p className="card-text text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              vestibulum non sapien nec cursus. Aliquam eros augue, placerat
              vitae rutrum quis, fringilla et arcu. Vivamus vulputate metus id
              lacinia feugiat. Fusce elementum nunc rutrum sagittis dapibus.
            </p>
          </div>
          <div className="card-footer">
            <div>
              <FontAwesomeIcon icon={faShoppingCart } />
            </div>
            <a href="/contacto" className="hover-style text-reset">Shop Now</a>
          </div>
        </div>
        <div className="card card-container">
          <img
            className="card-img-top img-size"
            src={pulsera}
            alt="Card cap"
          />
          <div className="card-body">
            <h4 className="card-title text-center">Wristband 2</h4>
            <p className="card-text text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              vestibulum non sapien nec cursus. Aliquam eros augue, placerat
              vitae rutrum quis, fringilla et arcu. Vivamus vulputate metus id
              lacinia feugiat. Fusce elementum nunc rutrum sagittis dapibus.
            </p>
          </div>
          <div className="card-footer">
            <div>
              <FontAwesomeIcon icon={faShoppingCart } />
            </div>
            <a href="/contacto" className="hover-style text-reset">Shop Now</a>
          </div>
        </div>
        <div className="card card-container">
          <img
            className="card-img-top img-size"
            src={pulseraThree}
            alt="Card cap"
          />
          <div className="card-body">
            <h4 className="card-title text-center">Wristband 3</h4>
            <p className="card-text text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              vestibulum non sapien nec cursus. Aliquam eros augue, placerat
              vitae rutrum quis, fringilla et arcu. Vivamus vulputate metus id
              lacinia feugiat. Fusce elementum nunc rutrum sagittis dapibus.
            </p>
          </div>
          <div className="card-footer">
            <div className="align-icon">
              <FontAwesomeIcon icon={faShoppingCart } />
            </div>
            <a href="/contacto" className="hover-style text-reset">Shop Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesComponent;
