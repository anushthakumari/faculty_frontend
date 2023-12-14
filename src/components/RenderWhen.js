import React from "react";

const RenderWhen = ({ isTrue, children }) => {
  if (!isTrue) {
    return null;
  }

  return <>{children}</>;
};

export default RenderWhen;
