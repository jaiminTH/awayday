import React, { useState } from "react";
import email from "../../assets/img/email.svg";
import phone from "../../assets/img/phone.svg";
import AccordionItem from "../Accodion.jsx";
import DropDown from "../DropDown";
import { services } from "../../constants/services";
import { serviceItems } from "../../constants/serviceItems";

const ServiceSection = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionToggle = (index) => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="service-section">
      <div className="service-container">
        {services.map((service, serviceIndex) => (
          <div className="service-item" key={serviceIndex}>
            <div
              className="service-top"
              onClick={() => handleAccordionToggle(serviceIndex)}
            >
              <div className="service-img">
                <img src={service.img} alt="" />
              </div>
              <div className="service-title">
                <h3>{service.title}</h3>
              </div>
            </div>
            {/* Accordion */}
            <AccordionItem
              id={`headingOne${serviceIndex}`}
              title="Show More"
              isOpen={openAccordion === serviceIndex}
              content={
                <div
                  className={`accordion sub-accordion ${
                    openAccordion === serviceIndex ? "show" : ""
                  }`}
                >
                  {serviceItems.map((serviceItem, index) => (
                    <AccordionItem
                      key={index}
                      id={`${
                        serviceItem.id + "_" + serviceIndex + "_" + index
                      }`}
                      title={serviceItem.title}
                      content={
                        <div>
                          <p>{serviceItem.content?.description}</p>
                          {serviceItem.content?.dropdownOptions && (
                            <DropDown
                              options={serviceItem.content.dropdownOptions}
                            />
                          )}
                          {serviceItem.content?.additionalInfo && (
                            <div className="accordion-body">
                              <div className="content-type-two text-md-center">
                                <h4>{serviceItem.content?.description}</h4>
                                <p>{serviceItem.content?.additionalInfo}</p>
                                <div className="btn-group-icon">
                                  <a href="#" className="btn btn-custom">
                                    <span className="btn-icon">
                                      <i>
                                        <img src={email} alt="Email" />
                                      </i>
                                    </span>
                                    Email CSP Support
                                  </a>
                                  <a href="#" className="btn btn-custom">
                                    <span className="btn-icon">
                                      <img src={phone} alt="Phone" />
                                    </span>
                                    Call CSP Support
                                  </a>
                                </div>
                              </div>
                              <div className="content-item">
                                <div className="inner-content">
                                  <p>
                                    Before you reach out, you’ll need to have
                                    this information ready.
                                  </p>
                                  <ul>
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                    <li>Item 3</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      }
                    />
                  ))}
                </div>
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
