import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "./contact.css";
import contact from "../../../assets/contact-img.jpg";

// Import MDB
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

function ContactComponent() {
  const form = useRef();

  // FORM VALIDATION
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  // SWAL SUCCESS FUNCTION
  const successModal = () => {
    Swal.fire({
      position: "top drawer",
      icon: "success",
      padding: "3em",
      title:
        '<h3 style="color:#263d5b"> Tu mensaje ha sido enviado correctamente </h3>',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  // SWAL FAILED FUNCTION
  const failedModal = () => {
    Swal.fire({
      position: "top drawer",
      icon: "error",
      padding: "3em",
      title:
        '<h3 style="color:#263d5b"> Algo salió mal, inténtalo más tarde. </h3>',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  // SEND EMAIL FUNCTION
  const sendEmail = (e) => {
    e.preventDefault();

    // Need to add credentials in .env
    emailjs
      .sendForm(
        "service_890gfov",
        "template_anwm9qg",
        form.current,
        "DRXBqWrich7VIWwlw"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            // DISPLAY THE MODAL SUCCESS COMPONENT
            successModal();
          }
        },
        (error) => {
          // DISPLAY THE MODAL ERROR COMPONENT
          failedModal();
        }
      );
    // Reset the form
    e.target.reset();
  };

  return (
    <MDBContainer fluid className="container-background ">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol>
          <MDBCard className="my-5">
            <MDBRow className="g-0">
              <MDBCol md="6" className="d-none d-md-block">
                <MDBCardImage
                  src={contact}
                  alt="Office"
                  className="rounded-start img-size"
                  fluid
                />
              </MDBCol>

              {/* FORM SECTION */}
              <MDBCol md="6">
                <form ref={form} onSubmit={sendEmail}>
                <MDBCardBody className="text-black d-flex flex-column justify-content-center">
                  <h3 className="mb-5 title-styl fw-bold align-center">Contact Us</h3>

                
                  <MDBRow className="align-center">
                    <MDBCol md="6">
                    <div className="text-styl">
                      <label>Name:</label>
                      <MDBInput
                        wrapperClass="mb-4"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Type your name"
                        type="name"
                        required
                      />
                    </div>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className="align-center">
                    <MDBCol md="6">
                    <div className="text-styl">
                      <label>Email:</label>
                      <MDBInput
                        wrapperClass="mb-4"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Type your email"
                        type="email"
                        required
                      />
                    </div>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className="align-center">
                    <MDBCol md="6">
                    <div className="text-styl">
                      <label>Subject:</label>
                      <MDBInput
                        wrapperClass="mb-4"
                        id="title"
                        name="title"
                        placeholder="Type your subject"
                        type="text"
                        required
                      />
                    </div>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className="align-center">
                    <MDBCol md="6">
                    <div className="text-styl">
                      <label>Message:</label>
                      <MDBInput
                        wrapperClass="mb-4"
                        id="message"
                        name="message"
                        type="text"
                        className="message-size"
                        required
                      />
                    </div>
                    </MDBCol>
                  </MDBRow>

                  <div className="d-flex btn-position pt-1">
                    <MDBBtn className="ms-2 submit-btn" size="lg" onSubmit={sendEmail}>
                      Send
                    </MDBBtn>
                  </div>
                </MDBCardBody>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ContactComponent;
