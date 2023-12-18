// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Billing page components
import PaymentMethod from "layouts/earn/components/PaymentMethod";
import CreditBox from "./components/creditBox";

import { useTranslation } from "react-i18next";
import { Card } from "@mui/material";
import CreditTransactions from "./components/CreditTransactions";
import Info from "./components/Info";

function Earn() {
  const { t } = useTranslation();

  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <Grid container spacing={3}>
                <Grid item xs={12} xl={12}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      padding: "10px",
                      minHeight: "200px",
                    }}
                  >
                    <CreditBox />
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <PaymentMethod />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4}>
              <CreditTransactions />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Info />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Earn;
