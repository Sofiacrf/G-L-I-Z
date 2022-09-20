import React from "react";
import aboutUs from "../../../assets/equipo-img.jpg";
import "./about-us.css";
import associateOne from "../../../assets/associate-one.jpg";
import associateTwo from "../../../assets/associate-two.jpg";

function AboutUsComponent() {
  return (
    <section className="px-4 pt-5 my-5 text-center border-bottom">
      {/* Main Text */}
      <h1 className="display-4 fw-bold">Quienes Somos</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Somos un equipo de profesionales cpodjoivnoifb ofdivopsdjviosnviods
          oinvsdnvoidbnio viondaoincoia vhodnvods onviodsbv oicdnvubdsv obscioac
          ivnoidsbvoisd boisdbvobv oisiobf podnofibf oibfoidbfji obfoebefoi.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <a href="/nuestros-servicios" className="btn btn-secondary px-4">
            Conoce Nuestros Servicios
          </a>
        </div>
      </div>
      {/* Image */}
      <div className="overflow-hidden">
        <div className="container px-5">
          <img
            src={aboutUs}
            width="700"
            height="500"
            className="img-fluid border rounded-1 shadow-lg mb-4"
            alt="equipo"
          />
        </div>
      </div>
      {/* BIOS */}
      <div className="bio-container">
        {/* First BIO */}
        <div className="row row-cols-1 row-cols-md-3 g-4 m-3 my-5">
          <div className="col md-6 mb-4 responsive-img">
            <img
              src={associateOne}
              alt="Socio"
              className="img-associate"
              draggable="false"
            />
          </div>

          <div className="md-6 mb-4 associate-name">
            <h3 className="bio">Socio 1</h3>
            <p className="bio-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              vestibulum non sapien nec cursus. Aliquam eros augue, placerat vitae
              rutrum quis, fringilla et arcu. Vivamus vulputate metus id lacinia
              feugiat. Fusce elementum nunc rutrum sagittis dapibus. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Proin vestibulum non
              sapien nec cursus. Aliquam eros augue, placerat vitae rutrum quis,
              fringilla et arcu. Vivamus vulputate metus id lacinia feugiat. Fusce
              elementum nunc rutrum sagittis dapibus.
            </p>
          </div>
        </div>

        {/* Second BIO */}
        <div className="row flex-lg-row-reverse row-cols-1 row-cols-md-3 g-4 m-3 mt-0">
          <div className="col md-6 mb-4 responsive-img">
            <img
              src={associateTwo}
              alt="Socia"
              className="img-associate"
              draggable="false"
            />
          </div>
          <div className="col md-6 mb-4 associate-name">
            <h3 className="bio">Socio 2</h3>
            <p className="bio-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              vestibulum non sapien nec cursus. Aliquam eros augue, placerat vitae
              rutrum quis, fringilla et arcu. Vivamus vulputate metus id lacinia
              feugiat. Fusce elementum nunc rutrum sagittis dapibus. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Proin vestibulum non
              sapien nec cursus. Aliquam eros augue, placerat vitae rutrum quis,
              fringilla et arcu. Vivamus vulputate metus id lacinia feugiat. Fusce
              elementum nunc rutrum sagittis dapibus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsComponent;
