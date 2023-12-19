import React from "react";
import { useTranslation } from "react-i18next";

import Card from "@mui/material/Card";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Divider, Grid } from "@mui/material";
import MDButton from "components/MDButton";

import TeacherBadge from "components/TeacherBadge";
import badges from "constants/badges";
import localStorage from "libs/localStorage";

const CARD_PADDDING = "15px";

const defaultStats = localStorage.getStats();

const CreditDetails = () => {
  const { t } = useTranslation();
  return (
    <Card
      sx={{
        padding: CARD_PADDDING,
      }}
    >
      <MDBox>
        <MDBox mb={3}>
          <MDTypography variant="h5">{t("dashboard.analytics")}</MDTypography>
        </MDBox>
        <Grid container>
          <Grid
            xs={12}
            md={6}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            item
          >
            <MDTypography variant="h6">{t("commons.credit_points")}</MDTypography>
            <MDTypography variant="h2">{defaultStats.credit_points}</MDTypography>
          </Grid>
          <Grid
            xs={12}
            md={6}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            item
          >
            <MDTypography variant="h6">{t("commons.badge")}</MDTypography>
            <TeacherBadge teacherLevel={badges[defaultStats.badge]} />
          </Grid>
        </Grid>
        <Divider sx={{ bgcolor: "#000" }} />
        <MDBox>
          <MDTypography variant="body1" mb={1}>
            {t("commons.summary")}
          </MDTypography>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid xs={6} md={6} item>
              <MDTypography variant="body2" fontWeight="bold">
                {t("dashboard.total_stu_enrolled")}
              </MDTypography>
            </Grid>
            <Grid xs={6} md={6} item>
              <MDTypography textAlign="right" variant="body2" fontWeight="bold">
                {defaultStats.student_count}
              </MDTypography>
            </Grid>
          </Grid>
          <Grid mt={1} container spacing={2} justifyContent="space-between">
            <Grid xs={6} md={6} item>
              <MDTypography variant="body2" fontWeight="bold">
                {t("dashboard.avg_engagement")}
              </MDTypography>
            </Grid>
            <Grid xs={6} md={6} item>
              <MDTypography textAlign="right" variant="body2" fontWeight="bold">
                {defaultStats.avg_eng}
              </MDTypography>
            </Grid>
          </Grid>
          <Grid mt={1} container spacing={2} justifyContent="space-between">
            <Grid xs={6} md={6} item>
              <MDTypography variant="body2" fontWeight="bold">
                {t("dashboard.avg_rating")}
              </MDTypography>
            </Grid>
            <Grid xs={6} md={6} item>
              <MDTypography textAlign="right" variant="body2" fontWeight="bold">
                {defaultStats.avg_rating}
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>

        <MDButton
          sx={{ marginTop: 10, paddingLeft: 0, color: "blue" }}
          variant="unstyled"
          color="dark"
        >
          {t("commons.view_analytics_here")}
        </MDButton>
      </MDBox>
    </Card>
  );
};

export default CreditDetails;
