import React from "react";
import { useTranslation } from "react-i18next";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReactPlayer from "react-player";

const CARD_PADDDING = "15px";
const HEIGHT = "50vh";

const Suggestions = () => {
  const { t } = useTranslation();

  return (
    <MDBox>
      <Card
        sx={{
          padding: CARD_PADDDING,
        }}
        style={{ minHeight: HEIGHT }}
      >
        <MDBox mb={5}>
          <MDTypography variant="h5">{t("dashboard.suggestion_title")}</MDTypography>
        </MDBox>
        <MDBox>
          <MDBox component="ol" spacing={10} sx={{ paddingLeft: "20px", marginTop: "2px" }}>
            <Typography variant="h6" component="li">
              <strong>{t("dashboard.quizes")}</strong> {t("dashboard.sugg_li_1")}
            </Typography>
            <Typography variant="h6" component="li">
              <strong>{t("dashboard.use_resources")}</strong> {t("dashboard.sugg_li_2")}
            </Typography>
            <Typography variant="h6" component="li">
              <strong>{t("add_course.clear_and_concise")}</strong> {t("add_course.know_ad")}
            </Typography>
            <Typography variant="h6" component="li">
              <strong>{t("add_course.benefit_focused")}</strong> {t("add_course.what_they_get")}
            </Typography>
            <Typography variant="h6" component="li">
              <strong>{t("add_course.engaging_and_sticky")}</strong>
              {t("add_course.catch_their_eye")}
            </Typography>
          </MDBox>
        </MDBox>
      </Card>
    </MDBox>
  );
};

export default Suggestions;
