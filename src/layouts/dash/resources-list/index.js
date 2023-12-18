// @mui material components
import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDButton from "components/MDButton";

// Billing page components
import Resource from "layouts/dash/resources-list/Resource";
import { useTranslation } from "react-i18next";

function ResourcesList() {
  const { t } = useTranslation();

  return (
    <Card sx={{ height: "100%", minHeight: "50vh" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {t("dashboard.your_posted_free_resource")}
        </MDTypography>
      </MDBox>
      <MDBox pt={3} pb={2} px={2}>
        <MDBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Resource
            color="success"
            icon="expand_less"
            name="Human Heart Anatomy Image"
            description="20 Dec 2023"
            value="0 Usage"
          />
          <Resource
            color="success"
            icon="expand_less"
            name="A Realistic Human Heart"
            description="17 Dec 2023"
            value="2 Usage"
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default ResourcesList;
