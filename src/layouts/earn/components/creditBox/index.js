import React from "react";
import { useTranslation } from "react-i18next";

import Grid from "@mui/material/Grid";

import MDTypography from "components/MDTypography";

import TeacherBadge from "components/TeacherBadge";

import badges from "constants/badges";
import localStorage from "libs/localStorage";

const defaultStats = localStorage.getStats();

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
  );
};

export default CreditBox;
