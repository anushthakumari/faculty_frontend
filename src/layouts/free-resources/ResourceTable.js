import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DataTable from "examples/Tables/DataTable";

function ResourceTable(props) {
  const { columns, rows } = props;
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Card>
      <MDBox
        mx={2}
        mt={-3}
        py={3}
        px={2}
        variant="gradient"
        bgColor="info"
        borderRadius="lg"
        coloredShadow="info"
      >
        <TextField
          placeholder="Search Resources Here..."
          variant="outlined"
          fullWidth
          sx={{ backgroundColor: "#fff", borderRadius: "10px" }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </MDBox>
      <MDBox pt={3}>
        <DataTable
          table={{ columns, rows }}
          isSorted={false}
          entriesPerPage={false}
          showTotalEntries={false}
          noEndBorder
        />
      </MDBox>
    </Card>
  );
}

export default ResourceTable;
