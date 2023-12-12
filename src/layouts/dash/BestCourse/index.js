import { useTranslation } from "react-i18next";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// page components
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

import homeDecor3 from "assets/images/home-decor-3.jpg";

function BillingInformation() {
  const { t } = useTranslation();

  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h4" fontWeight="medium">
          {t("dashboard.best_course_heading")}
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <DefaultProjectCard
          image={homeDecor3}
          // label="project #1"
          title={t("dashboard.best_course_title")}
          description={t("dashboard.best_course_desc")}
          action={{
            type: "internal",
            route: "/pages/profile/profile-overview",
            color: "info",
            label: "view project",
          }}
          authors={
            [
              // { image: team3, name: "Nick Daniel" },
              // { image: team4, name: "Peterson" },
              // { image: team1, name: "Elena Morison" },
              // { image: team2, name: "Ryan Milly" },
            ]
          }
        />

        <MDBox mt={4}>
          <Row name={t("dashboard.views")} value={200} />
          <Row name={t("dashboard.student_enrolled")} value={200} />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;

function Row({ name, value }) {
  return (
    <MDBox py={1} pr={2} mb={1}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center">
        <MDBox display="flex" alignItems="center">
          <MDBox display="flex" flexDirection="column">
            <MDTypography variant="h5" fontWeight="medium" gutterBottom>
              {name}
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDTypography variant="h5" fontWeight="medium" textGradient>
          {value}
        </MDTypography>
      </MDBox>
    </MDBox>
  );
}
