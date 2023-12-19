import { useTranslation } from "react-i18next";
import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { Stack } from "@mui/material";
import LoadingSpinner from "components/LoadingSpinner";
import Chapters from "./Chapters";

//page components
const CARD_PADDDING = "10px";
const HEIGHT = "70vh";

function RateCourseDetails() {
  const { t } = useTranslation();

  const [isLoading, setisLoading] = useState(false);

  return (
    <DashboardLayout>
      <LoadingSpinner isLoading={isLoading} />
      <DashboardNavbar absolute isMini />
      <MDBox>
        <MDTypography variant="h4" textTransform="capitalize" mb={3}>
          {t("rate_courses_details.rate_the_course")}
        </MDTypography>
        <MDBox mb={3}>
          <Grid position={"relative"} container spacing={3}>
            <Grid item xs={12} md={9}>
              <MDBox flex={1} display="flex" justifyContent="center" alignItems="center">
                <MDBox flex={1}>
                  <Chapters />
                </MDBox>
              </MDBox>
            </Grid>
            {/* Form */}
            <Grid item xs={12} md={2.5} position={"fixed"} width={"400px"} right={10}>
              <MDBox>
                <Card
                  sx={{
                    padding: CARD_PADDDING,
                  }}
                  style={{ minHeight: HEIGHT }}
                >
                  <Stack gap={2}></Stack>
                </Card>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default RateCourseDetails;
