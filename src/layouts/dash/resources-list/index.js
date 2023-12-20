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

function ResourcesList({ list }) {
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
          {list?.map((v, i) => (
            <Resource key={i} color="success" icon="expand_less" name={v.title} value="0 Usage" />
          ))}
          {!list?.length ? "No resources Yet" : ""}
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default ResourcesList;
