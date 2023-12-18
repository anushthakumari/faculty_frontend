import React from "react";
import { useTranslation } from "react-i18next";

// @mui material components
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

const CARD_PADDDING = "15px";
const HEIGHT = "50vh";

const Info = () => {
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
          <MDTypography variant="h5">{t("earn.info_title")}</MDTypography>
        </MDBox>
        <MDBox>
          <MDBox>
            <MDTypography>{t("earn.how_badges_work")}</MDTypography>
          </MDBox>
          <MDBox mt={3}>
            <MDTypography fontWeight="bold">{t("badges.acharya")}</MDTypography>
            <MDBox component="ul" marginLeft={4}>
              <MDTypography variant="body2" component="li" fontWeight="light">
                {t("earn.badge_desc.acharya.description")}
              </MDTypography>
              <MDTypography variant="body2" component="li" fontWeight="light">
                {t("earn.badge_desc.acharya.requirements")}
              </MDTypography>
              <MDTypography variant="body2" component="li" fontWeight="light">
                {t("earn.badge_desc.acharya.benefits")}
              </MDTypography>
            </MDBox>
          </MDBox>
          <MDBox mt={3}>
            <MDTypography fontWeight="bold">{t("badges.upadhyaya")}</MDTypography>
            <MDBox component="ul" marginLeft={4}>
              <MDTypography variant="body2" component="li" fontWeight="light">
                {t("earn.badge_desc.upadhyaya.description")}
              </MDTypography>
              <MDTypography variant="body2" component="li" fontWeight="light">
                {t("earn.badge_desc.upadhyaya.requirements")}
              </MDTypography>
              <MDTypography variant="body2" component="li" fontWeight="light">
                {t("earn.badge_desc.upadhyaya.benefits")}
              </MDTypography>
            </MDBox>
          </MDBox>
          <MDBox mt={3}>
            <MDTypography fontWeight="bold">{t("badges.acharyottama")}</MDTypography>
            <MDBox component="ul" marginLeft={4}>
              <MDTypography variant="body2" component="li" fontWeight="light">
                {t("earn.badge_desc.acharyottama.description")}
              </MDTypography>
              <MDTypography variant="body2" component="li" fontWeight="light">
                {t("earn.badge_desc.acharyottama.requirements")}
              </MDTypography>
              <MDTypography variant="body2" component="li" fontWeight="light">
                {t("earn.badge_desc.acharyottama.benefits")}
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </MDBox>
  );
};

export default Info;
