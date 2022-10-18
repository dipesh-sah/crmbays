import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import FormImage from "../../../assests/img/FormImg.svg";
import "react-toastify/dist/ReactToastify.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
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

function HomepageForm() {
  const [varified, setVarified] = useState(false);
  function onChange() {
    setVarified(true);
  }
  return (
    <div className="homepage-form txt_white">
      <div className="container">
        <h3>
          Need Asssistance?
          <br></br>
          You're just an email away.
        </h3>
        <div className="form flex">
          <Formik
            initialValues={{
              Name: "",
              email: "",
              subject: "",
              message: "",
            }}
            validationSchema={SignupScheme}
            onSubmit={(value) => {
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
                <button type="submit" className="btn" disabled={!varified}>
                  {" "}
                  <span>Submit</span>
                </button>
              </Form>
            )}
          </Formik>
          <div className="form-img">
            <img
              loading="lazy"
              height={"90%"}
              width={"90%"}
              src={FormImage}
              alt="Form img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomepageForm;
