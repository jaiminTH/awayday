import React from "react";
import logoLogin from "../../assets/img/logo-login.svg";
import Login from "./Login";
import SuccessMessage from "../SuccessMessage";

const LoginForm = ({
  isLoggedIn,
  setLoggedIn,
  isFaded,
  setIsFaded,
  isAnimating,
  setIsAnimating,
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
}) => {
  return (
    <div className="login-form">
      <a href="#" className="text-center login-logo">
        <img
          src={logoLogin}
          alt="AWAYDAY"
          className={`login-logo ${isAnimating ? "animation-rotate" : ""}`}
        />
      </a>
      {isLoggedIn ? (
        <Login
          isFaded={isFaded}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          errors={errors}
          touched={touched}
        />
      ) : (
        <SuccessMessage
          setLoggedIn={setLoggedIn}
          setIsFaded={setIsFaded}
          setIsAnimating={setIsAnimating}
        />
      )}
    </div>
  );
};

export default LoginForm;
