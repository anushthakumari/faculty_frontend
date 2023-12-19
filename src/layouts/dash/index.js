import { useEffect } from "react";
import { driver } from "driver.js";

// @mui material components
import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

//page components
import BestCourse from "layouts/dash/BestCourse";
import CreditDetails from "layouts/dash/credit-details";
import Suggestions from "./Suggestions";
import CourseList from "./CourseList";
import ResourcesList from "./resources-list/";
import News from "./news";

import localStorage from "libs/localStorage";
import driver_config from "configs/driver.config";

function Billing() {
  useEffect(() => {
    const is_alredy_onboarded = localStorage.getOnboardState();
    const userData = localStorage.getUser();

    if (!is_alredy_onboarded && userData) {
      const driverObj = driver(driver_config);
      driverObj.drive();
      localStorage.setOnboardState(true);
    }
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <BestCourse />
              <MDBox mt={2}>
                <CourseList />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <CreditDetails />
              <MDBox mt={2}>
                <ResourcesList />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <Suggestions />
              <MDBox mt={2}>
                <News />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
