import React from "react";

import SectionTitle from "./SectionTitle";

import element_types from "constants/element_types";

const ELEMENTS = {
  [element_types.section_title]: SectionTitle,
};

const Index = ({ type, ...rest }) => {
  const Element = ELEMENTS[type];

  if (!Element) {
    return <p>{type}</p>;
  }

  return <Element {...rest} />;
};

export default Index;
