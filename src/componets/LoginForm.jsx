import React from 'react';
import logoLogin from "../assets/img/logo-login.svg";

function LoginForm({ isAnimating, handleSubmit, handleChange, handleBlur, values, errors, touched }) {
  return (
    <div className="login-form">
      {/* Logo */}
      <a href="#" className="text-center login-logo">
        <img
          src={logoLogin}
          alt="AWAYDAY"
          className={`login-logo ${isAnimating ? 'animation-rotate' : ''}`}
        />
      </a>
      {/* Login Form */}
      <form className="login-form-wrap" onSubmit={handleSubmit}>
        {/* Form Input */}
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
    </div>
  );
}

export default LoginForm;
