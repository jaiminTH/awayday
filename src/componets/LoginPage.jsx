import React, { useState } from 'react';
import { useFormik } from "formik";
import { loginSchema } from "../schemas/index";
import LoginForm from './LoginForm';
import helpIcon from "../assets/img/icon-help.svg";

const initialValues = {
  email: ""
};

function LoginPage() {
  const [isAnimating, setIsAnimating] = useState(false);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: () => {
        setIsAnimating(true);
        resetForm();
      }
    });

  return (
    <div className="w-100">
      <div className="row">
        <div className="col-lg-4 pe-lg-0 d-lg-flex">
          <div className="login-bg"></div>
        </div>
        <div className="col-lg-8 ps-lg-0 bg-white d-flex align-items-center">
          <div className="login-form-content">
            {/* Use the LoginForm component here */}
            <LoginForm
              isAnimating={isAnimating}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              errors={errors}
              touched={touched}
            />
            {/* <!-- Help text --> */}
            <div className="help-sec d-flex align-items-center justify-content-center">
              <a
                href="#"
                className="information-icon"
                data-bs-toggle="modal"
                data-bs-target="#helpModal"
              >
                <img src={helpIcon} alt="help Icon" />
              </a>
              <span className="ps-2 help-text">Help</span>
              {/* <!-- Help Modal --> */}
              <div
                className="modal help-modal fade"
                id="helpModal"
                tabIndex="-1"
                aria-labelledby="helpModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="helpModalLabel">
                        <span>
                          <img src={helpIcon} alt="help Icon" />
                        </span>
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <p>Please enter your work email address. A non-AwayDay address can not access the Tech Team website.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
