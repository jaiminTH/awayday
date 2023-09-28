import React, { useState, useEffect, useRef } from "react";
import arrowDropDown from "../../assets/img/icon-dropdown-arrow.svg";

const DropDown = ({ options }) => {
  const [visibility, setVisibility] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownRef = useRef(null);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  const selectOption = (optionValue) => {
    setSelectedOption(optionValue);
    setVisibility(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setVisibility(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderOptions = () => {
    if (!visibility) return null;

    return (
      <div className="options">
        <ul>
          <li data-value="default" onClick={() => selectOption("")}>
            Select Brand
          </li>
          {options.map((option, index) => (
            <li
              key={index}
              className={selectedOption === option.value ? "active-option" : ""}
              onClick={() => selectOption(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div
      ref={dropdownRef}
      className={`select ${visibility ? "open" : ""}`}
      onClick={toggleVisibility}
    >
      <div className="selected-option">
        <span title={selectedOption === "" ? "Select Brand" : selectedOption}>
          {selectedOption === ""
            ? "Select Brand"
            : selectedOption.length <= 20
            ? selectedOption
            : `${selectedOption.slice(0, 20)}...`}
        </span>
        <i>
          <img src={arrowDropDown} alt="arrowDropDown" />
        </i>
      </div>
      {renderOptions()}
    </div>
  );
};

export default DropDown;
