export const serviceItems = [
  {
    id: "sub-headingOne",
    title: "Breezeway",
    content: {
      description:
        "Please select the brand you represent so we can better guide you.",
      dropdownOptions: [
        { value: "Brand", label: "Brand" },
        { value: "Anchorage Inn", label: "Anchorage Inn" },
        { value: "Carolina Beach Realty", label: "Carolina Beach Realty" },
        {
          value: "Great Ocean Condos and Homes",
          label: "Great Ocean Condos and Homes",
        },
        { value: "Greater Orlando", label: "Greater Orlando" },
      ],
    },
  },
  {
    id: "sub-headingTwo",
    title: "Email and Calendar (Office365)",
    content: {
      description: "Looks like you need to get in touch with CSP!",
      additionalInfo:
        "CSP is a third-party company we work with who helps with etc.",
      buttons: [
        { label: "Email CSP Support", link: "#" },
        { label: "Call CSP Support", link: "#" },
      ],
    },
  },
  {
    title: "Historical V12 Data Request",
    content: {
      description:
        "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
  },
];
