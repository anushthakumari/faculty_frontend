import React from "react";
import { useTranslation } from "react-i18next";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { CardMedia, Divider } from "@mui/material";
import localStorage from "libs/localStorage";

const defaultStats = localStorage.getStats();

const CARD_PADDDING = "15px";

function BestCourse() {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        padding: CARD_PADDDING,
      }}
    >
      <MDBox>
        <MDTypography variant="h5" mb={3} fontWeight="medium">
          {t("dashboard.best_course_heading")}
        </MDTypography>
      </MDBox>
      <MDBox>
        <OutlinedCard />

        <Divider sx={{ bgcolor: "#000", marginTop: "50px" }} />
        <MDBox mt={3}>
          <MDTypography variant="body1" mb={1}>
            {t("commons.summary")}
          </MDTypography>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid xs={6} md={6} item>
              <MDTypography variant="body2" fontWeight="bold">
                {t("dashboard.student_enrolled")}
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
                {t("dashboard.engagement")}
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
                {t("dashboard.rating")}
              </MDTypography>
            </Grid>
            <Grid xs={6} md={6} item>
              <MDTypography textAlign="right" variant="body2" fontWeight="bold">
                {defaultStats.avg_rating}
              </MDTypography>
            </Grid>
          </Grid>

          <MDButton
            sx={{ marginTop: 5, paddingLeft: 0, color: "blue" }}
            variant="unstyled"
            color="dark"
          >
            {t("commons.view_analytics_here")}
          </MDButton>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BestCourse;

function OutlinedCard() {
  const { t } = useTranslation();

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card sx={{ boxShadow: "none", border: "1px solid #d3d3d3" }} variant="outlined">
        <CardContent>
          <MDTypography variant="body1">A Human Heart Anatomy</MDTypography>
        </CardContent>
        <CardMedia
          component="img"
          height="194"
          image="https://cdn4.vectorstock.com/i/1000x1000/66/83/anatomy-of-the-human-heart-vector-19856683.jpg"
          alt="Paella dish"
        />
        <CardActions>
          <Button size="small">{t("commons.view_course")}</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
