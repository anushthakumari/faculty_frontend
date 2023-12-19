import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// @mui material components
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDTypography from "components/MDTypography";

import DataTable from "examples/Tables/DataTable";

import LoadingSpinner from "components/LoadingSpinner";

import useCoursesData from "./useCoursesData";

function Courses() {
  const { columns, rows, fetchData, coursesData, isLoading } = useCoursesData();
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useTranslation();

  return (
    <DashboardLayout>
      <LoadingSpinner isLoading={isLoading} />
      <DashboardNavbar absolute isMini />
      <MDBox>
        <MDTypography variant="h3">{t("courses.page_title")}</MDTypography>
        <Card
          sx={{
            marginTop: "40px",
          }}
        >
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
      </MDBox>
    </DashboardLayout>
  );
}

export default Courses;
