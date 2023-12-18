import React from "react";
import { useTranslation } from "react-i18next";

import Grid from "@mui/material/Grid";

import MDTypography from "components/MDTypography";

import TeacherBadge from "components/TeacherBadge";

import badges from "constants/badges";

const CreditBox = () => {
  const { t } = useTranslation();

  return (
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
        <MDTypography variant="h2">2500</MDTypography>
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
        <TeacherBadge teacherLevel={badges.acharya} />
      </Grid>
    </Grid>
  );
};

export default CreditBox;
