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

function CreditTransactions() {
  const { t } = useTranslation();

  return (
    <Card sx={{ minHeight: "50vh" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {t("earn.your_redeemed_transactions")}
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
            name="UPI"
            description="20 Dec 2023"
            value="₹100"
          />
          <Resource
            color="success"
            icon="expand_less"
            name="UPI"
            description="17 Dec 2023"
            value="₹200"
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default CreditTransactions;
