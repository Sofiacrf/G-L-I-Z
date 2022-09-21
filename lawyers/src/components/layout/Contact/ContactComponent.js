import React from "react";
import "./contact.css";

function ContactComponent() {
  return (
    <section className="contact-section">
      {/* First Section */}
      <div className="px-3 my-4">
        <h1 className="display-4 fw-bold text-center title-styl">
          Contáctanos
        </h1>
        <div className="col-lg-6 mx-auto text-styl">
          <p className="lead mb-4 text-center">
            Ponte en contacto con nosotros. Oinvsdnvoidbnio viondaoincoia
            vhodnvods onviodsbv oicdnvubdsv obscioac ivnoidsbvoisd boisdbvobv
            oisiobf podnofibf oibfoidbfji obfoebefoi.
          </p>
        </div>
      </div>
      {/* Second Section */}
      <div className="my-5 py-5 form-box">
        <form className="form-size">
          <div>
            <div className="py-3 contact-form-division">
              <label className="form-label text-styl">Nombre:</label>
              <input 
              type="name"
              className="form-control"
              id="name"
              placeholder="Escribe tu nombre"
              style={{ borderColor: '#485063', backgroundColor: '#f4f4f4' }}
              required
              />
            </div>
            <div className="py-3 contact-form-division">
              <label className="form-label text-styl"> Correo electrónico:</label>
              <input 
              type="name"
              className="form-control"
              id="name"
              placeholder="Escribe tu correo electrónico"
              style={{ borderColor: '#485063', backgroundColor: '#f4f4f4' }}
              required
              />
            </div>
            <div className="py-3 contact-form-division">
              <label className="form-label text-styl"> Asunto:</label>
              <input 
              type="name"
              className="form-control"
              id="name"
              placeholder="Escribe el título de tu asunto"
              style={{ borderColor: '#485063', backgroundColor: '#f4f4f4' }}
              required
              />
            </div>
            <div className="col-12 mb-3 message-section contact-form-division">
            <label htmlFor="message" className="form-label text-styl">
              Mensaje:
            </label>
            <input
              type="message"
              className="form-control"
              name="message"
              id="userMessage"
              style={{ borderColor: '#485063', backgroundColor: '#f4f4f4' }}
              required
            />
          </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactComponent;
