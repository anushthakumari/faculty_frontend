import React from "react";
import { Box } from "@mui/material";

const Image = ({ file_url }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        maxHeight: "300px",
        overflow: "hidden",
      }}
    >
      <img
        src={file_url}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </Box>
  );
};

export default Image;
