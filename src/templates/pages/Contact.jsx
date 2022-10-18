import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from 'sweetalert2'
const SweetAlert = () => {
  Swal.fire({
    title: 'Success',
    text: 'Thank You For Your Message, It has been sent',
    icon: 'success',
    confirmButtonText: 'OK'
  })
}
const SignupScheme = Yup.object().shape({
  Name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long")
    .required("Required"),
  email: Yup.string().email("Invalid Email").required("Required"),
});

// Iframe
const iframe = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.54315626637!2d84.87333261436815!3d27.01299766227013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399355c4bae0212d%3A0x6e0a2fdccfb2fa3a!2sBay20%20Software%20Services!5e0!3m2!1sen!2snp!4v1662972182230!5m2!1sen!2snp" width="auto" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

const Contact = () => {
  const [varified, setVarified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  function onChange() {
    setVarified(true);
  }

  return (
    <React.Fragment>
      <div className="hero-contact txt_white bg">
        <div className="container">
          <div className="content">
            <h1>Contact Us</h1>
          </div>
          <a href="#contact" className="scrollDown">
            Scroll Down
          </a>
        </div>
      </div>
      <div className="homepage-form contact-form">
        <div className="container">
          <h2 id="contact">Let's Connect</h2>
          <p>We're always ready to help you.</p>
          <div className="inner-content flex">
            <Formik
              initialValues={{
                Name: "",
                email: "",
                subject: "",
                message: "",
              }}
              validationSchema={SignupScheme}
              onSubmit={(value) => {
                setIsLoading(true);
                const data = new FormData();
                data.append("your-name", `${value.Name}`);
                data.append("your-email", `${value.email}`);
                data.append("your-subject", `${value.subject}`);
                data.append("your-message", `${value.message}`);

                const xhr = new XMLHttpRequest();
                xhr.withCredentials = true;

                xhr.addEventListener("readystatechange", function () {
                  if (this.readyState === this.DONE) {
                    SweetAlert()
                    setIsLoading(false);
                  }
                });

                xhr.open(
                  "POST",
                  "https://admin.crmbays.com/wp-json/contact-form-7/v1/contact-forms/97/feedback"
                );

                xhr.send(data);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <Field name="Name" placeholder="Name" />
                  {errors.Name && touched.Name ? (
                    <div className="error-msz">{errors.Name}</div>
                  ) : null}
                  <Field name="email" type="email" placeholder="Email" />
                  {errors.email && touched.email ? (
                    <div className="error-msz">{errors.email}</div>
                  ) : null}
                  <Field name="subject" placeholder="Subject" />
                  {errors.subject && touched.subject ? (
                    <div className="error-msz">{errors.subject}</div>
                  ) : null}
                  <Field
                    name="message"
                    type="textarea"
                    placeholder="Message"
                    component="textarea"
                    className="form-control"
                    rows="7"
                  />
                  {errors.message && touched.message ? (
                    <div className="error-msz">{errors.message}</div>
                  ) : null}
                  <ReCAPTCHA
                    sitekey="6LdbakMhAAAAAOKvd1Wtx3QziA3FrLTZnOqxsrLm"
                    onChange={onChange}
                  />
                  <button
                    type="submit"
                    className="btn"
                    disabled={!varified && isLoading}
                  >
                    <span> {isLoading ? "Sending..." : "Submit"}</span>
                  </button>
                </Form>
              )}
            </Formik>
            <div className="contact-info">
              <div className="skype">
                <img src="" alt="" />
                <Link to={"#"}>crmbays</Link>
              </div>
              <div className="email flex-center">
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:info@crmbays.com">info@crmbays.com</a>
              </div>
              <div
                className="location"
                dangerouslySetInnerHTML={{ __html: iframe }}
              />
              <div className="social-icons social-link">
                <Link to={"facebook.com"}>
                  <i className="fa-brands fa-facebook-f flex"></i>
                </Link>
                <Link to={"instagram.com"}>
                  <i className="fa-brands fa-instagram flex"></i>
                </Link>
                <Link to={"twitter.com"}>
                  <i className="fa-brands fa-twitter twitter flex"></i>
                </Link>
                <Link to={"github.com"}>
                  <i className="fa-brands fa-github git flex"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
