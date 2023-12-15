import React from "react";

import SectionTitle from "./SectionTitle";
import Heading from "./Heading";

import element_types from "constants/element_types";
import Description from "./Description";

const ELEMENTS = {
  [element_types.section_title]: SectionTitle,
  [element_types.heading]: Heading,
  [element_types.desc]: Description,
};

const Index = ({ type, ...rest }) => {
  const Element = ELEMENTS[type];

  if (!Element) {
    return <p>{type}</p>;
  }

  return <Element {...rest} />;
};

export default Index;
