import React from "react";

const successMessage = ({ setLoggedIn, setIsFaded, setIsAnimating }) => {
  const handleReturnToLogin = () => {
    setLoggedIn(true);
    setIsFaded(false);
    setIsAnimating(false);
  };
  return (
    <div className={`fade-in`}>
      <div className="after-login text-center">
        <h3>You’re in!</h3>
        <p>
          Thank you for entering your <strong>domain entered</strong> email
          address. Please check your email for next steps.
        </p>
      </div>
      <div className="login-btn">
        <button
          type="submit"
          className="btn btn-custom"
          onClick={handleReturnToLogin}
        >
          Return to login
        </button>
      </div>
    </div>
  );
};

export default successMessage;
