import React from "react";
import helpIcon from "../../../assets/img/icon-help.svg";

const Login = ({
  isFaded,
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
}) => {
  return (
    <div className={`${isFaded ? "fade-out" : ""}`}>
      <form className="login-form-wrap" onSubmit={handleSubmit}>
        <div className="mb-3 form-group">
          <label htmlFor="InputEmail1" className="form-label">
            Work Email
          </label>
          <input
            type="email"
            name="email"
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
          <button type="submit" className="btn btn-custom">
            Submit
          </button>
        </div>
      </form>
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
                <p>
                  Please enter your work email address. A non-AwayDay address
                  cannot access the Tech Team website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
