import React from "react";

const AccordionItem = ({ id, title, content }) => (
  <div className="accordion-item">
    <h2 className="accordion-header" id={id}>
      <button
        className="accordion-button toggle-btn collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#${id}-collapse`}
        aria-expanded="false"
        aria-controls={`${id}-collapse`}
      >
        {title}
      </button>
    </h2>
    <div
      id={`${id}-collapse`}
      className="accordion-collapse collapse"
      aria-labelledby={id}
    >
      <div className="accordion-body">{content}</div>
    </div>
  </div>
);

export default AccordionItem;
