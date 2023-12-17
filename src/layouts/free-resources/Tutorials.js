import React from "react";
import { useTranslation } from "react-i18next";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import ReactPlayer from "react-player";

const CARD_PADDDING = "15px";
const HEIGHT = "70vh";

const Tutorials = () => {
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
          <MDTypography variant="h4" my={2}>
            {t("free_resources.help.title")}
          </MDTypography>
          <ReactPlayer width={"100%"} height={"200px"} controls url="/free_resource.mp4" />
        </MDBox>
        <MDBox>
          <MDTypography variant="h4">{t("free_resources.help.how_this_help")}</MDTypography>
          <MDBox component="ol" spacing={10} sx={{ paddingLeft: "20px", marginTop: "20px" }}>
            <Typography variant="subtitle1" component="li">
              {t("free_resources.help.li_1")}
            </Typography>
            <Typography variant="subtitle1" component="li">
              {t("free_resources.help.li_2")}
            </Typography>
            <Typography variant="subtitle1" component="li">
              {t("free_resources.help.li_3")}
            </Typography>
            <Typography variant="subtitle1" component="li">
              {t("free_resources.help.li_4")}
            </Typography>
          </MDBox>
        </MDBox>
      </Card>
    </MDBox>
  );
};

export default Tutorials;
