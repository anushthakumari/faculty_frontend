import React from "react";
import Card from "@mui/material/Card";
import MDTypography from "components/MDTypography";

const Document = ({ file_url }) => {
  if (!file_url) {
    return null;
  }

  const file_url_parts = file_url.split("/");

  const ext = file_url_parts[file_url_parts.length - 1].split(".")[1];

  return (
    <Card
      variant="outlined"
      elevation={0}
      sx={{ borderRadius: "15px", padding: "6px", width: "50%" }}
    >
      <MDTypography textTransform="capitalize" margin={3}>
        .{ext} File
      </MDTypography>
    </Card>
  );
};

export default Document;
