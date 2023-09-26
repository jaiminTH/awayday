import React from 'react';
import { useFormik } from "formik";
import { loginSchema } from "../schemas/index";
import logoLogin from "../assets/img/logo-login.svg";

const initialValues = {
  email: ""
};

function LoginPage() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (actions) => {
        actions.resetForm();
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
            <div className="login-form">
              {/* <!-- Logo --> */}
              <a href="#" className="text-center login-logo">
                <img src={logoLogin} alt="AWAYDAY" className='login-logo animation-rotate' />
              </a>
              {/* <!-- Login Form --> */}
              <form className="login-form-wrap" onSubmit={handleSubmit}>
                {/* <!-- Form Input --> */}
                <div className="mb-3 form-group">
                  <label htmlFor="InputEmail1" className="form-label">Work Email</label>
                  <input
                    type="email"
                    name='email'
                    placeholder="name@workemail.com"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    id="InputEmail1"
                    aria-describedby="emailHelp"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className="invalid-feedback error-msg">
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </div>
                </div>
                <div className="login-btn">
                  <button type="submit" className="btn btn-custom">Submit</button>
                </div>
              </form>
              {/* <!-- Help text --> */}
              <div
                className="help-sec d-flex align-items-center justify-content-center"
              >
                <a
                  href="#"
                  className="information-icon"
                  data-bs-toggle="modal"
                  data-bs-target="#helpModal"
                >
                  <svg
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.4998 18.2084V11.9584M12.4998 8.83335V8.82294M23.9582 13C23.9582 19.3283 18.8281 24.4584 12.4998 24.4584C6.17157 24.4584 1.0415 19.3283 1.0415 13C1.0415 6.67176 6.17157 1.54169 12.4998 1.54169C18.8281 1.54169 23.9582 6.67176 23.9582 13Z"
                      stroke="#F78F20"
                      strokeWidth="1.26562"
                      strokeLinecap="round"
                    />
                  </svg>
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
                              <svg
                                width="25"
                                height="26"
                                viewBox="0 0 25 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.4998 18.2084V11.9584M12.4998 8.83335V8.82294M23.9582 13C23.9582 19.3283 18.8281 24.4584 12.4998 24.4584C6.17157 24.4584 1.0415 19.3283 1.0415 13C1.0415 6.67176 6.17157 1.54169 12.4998 1.54169C18.8281 1.54169 23.9582 6.67176 23.9582 13Z"
                                  stroke="#F78F20"
                                  strokeWidth="1.26562"
                                  strokeLinecap="round"
                                />
                              </svg>
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
    </div>

  );
}

export default LoginPage;
