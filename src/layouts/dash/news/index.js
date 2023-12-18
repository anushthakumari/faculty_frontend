import React from "react";
import { useTranslation } from "react-i18next";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import Button from "@mui/material/Button";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReactPlayer from "react-player";

const CARD_PADDDING = "15px";
const HEIGHT = "50vh";

const News = () => {
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
          <MDTypography variant="h4">{t("dashboard.news_title")}</MDTypography>
        </MDBox>
        <MDBox>
          <MDBox sx={{ minWidth: 275 }}>
            <Card sx={{ boxShadow: "none", border: "1px solid #d3d3d3" }} variant="outlined">
              <CardMedia
                component="img"
                height="194"
                image="https://upeducators.com/wp-content/uploads/2022/12/blog-banners-28.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <MDTypography variant="h5">How To Make Your Course Engaging</MDTypography>
              </CardContent>
              <CardActions>
                <Button size="small">Read More</Button>
              </CardActions>
            </Card>
          </MDBox>
        </MDBox>
      </Card>
    </MDBox>
  );
};

export default News;
