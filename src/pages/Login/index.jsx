import React, { useState } from "react";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas/index";
import { allowedDomains } from "../../constants/allowedDomains";
import LoginForm from "../../componets/Forms";

const initialValues = {
  email: "",
};

const LoginPage = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isFaded, setIsFaded] = useState(false);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
    setErrors,
  } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async () => {
      const enteredEmail = values.email.toLowerCase();
      const emailParts = enteredEmail.split("@");

      if (emailParts.length === 2) {
        const domain = emailParts[1];
        if (allowedDomains.includes(domain)) {
          setIsFaded(true);
          setIsAnimating(true);
          setTimeout(() => {
            setIsLoggedIn(false);
            resetForm();
          }, 1000);
        } else {
          setErrors({ email: "Please enter a valid email address" });
        }
      } else {
        setErrors({ email: "Please enter a valid email address" });
      }
    },
  });

  return (
    <div className="w-100">
      <div className="row">
        <div className="col-lg-4 pe-lg-0 d-lg-flex">
          <div className="login-bg"></div>
        </div>
        <div className="col-lg-8 ps-lg-0 bg-white d-flex align-items-center">
          <div className="login-form-content">
            {/* LoginForm component here */}
            <LoginForm
              isLoggedIn={isLoggedIn}
              isFaded={isFaded}
              setLoggedIn={setIsLoggedIn}
              setIsFaded={setIsFaded}
              isAnimating={isAnimating}
              setIsAnimating={setIsAnimating}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              errors={errors}
              touched={touched}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
