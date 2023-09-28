import React from "react";
import logo from "../../assets/img/logo.svg";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <h1>
          <a href="#" className="navbar-brand">
            <img src={logo} alt="AWAYDAY" />
          </a>
        </h1>
        <a
          href="#"
          className="btn btn-custom"
          data-bs-toggle="modal"
          data-bs-target="#betaModal"
        >
          <i className="btn-icon">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.49988 11.125V7.375M8.49988 5.5V5.49375M15.3749 8C15.3749 11.797 12.2968 14.875 8.49988 14.875C4.70292 14.875 1.62488 11.797 1.62488 8C1.62488 4.20304 4.70292 1.125 8.49988 1.125C12.2968 1.125 15.3749 4.20304 15.3749 8Z"
                stroke="white"
                strokeWidth="1.26562"
                strokeLinecap="round"
              />
            </svg>
          </i>
          BETA
        </a>
        {/* Beta Modal */}
        <div
          className="modal beta-modal fade"
          id="betaModal"
          tabIndex="-1"
          aria-labelledby="betaModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="betaModalLabel">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.99992 14.1666V9.16659M9.99992 6.66659V6.65825M19.1666 9.99992C19.1666 15.0625 15.0625 19.1666 9.99992 19.1666C4.93731 19.1666 0.833252 15.0625 0.833252 9.99992C0.833252 4.93731 4.93731 0.833252 9.99992 0.833252C15.0625 0.833252 19.1666 4.93731 19.1666 9.99992Z"
                        stroke="white"
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
