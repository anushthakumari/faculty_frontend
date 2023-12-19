import { useState, useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/analytics/data/reportsBarChartData";
import reportsLineChartData from "layouts/analytics/data/reportsLineChartData";
import { useTranslation } from "react-i18next";
import LoadingSpinner from "components/LoadingSpinner";

const defaultStats = {
  course_count: 2,
  student_count: 2,
  credit_points: 2500,
  resourse_count: 2,
};

function Dashboard() {
  const [isLoading, setisLoading] = useState(false);
  const [data, setdata] = useState({});

  const { t } = useTranslation();

  useEffect(() => {
    setisLoading(true);
    setTimeout(() => {
      setdata(defaultStats);
      setisLoading(false);
    }, 500);
  }, []);

  return (
    <DashboardLayout>
      <LoadingSpinner isLoading={isLoading} />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title={t("commons.courses")}
                count={data.course_count}
                percentage={{
                  label: t("commons.just_updated"),
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title={t("dashboard.student_enrolled")}
                count={data.student_count}
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: t("analytics.than_last_month"),
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title={t("commons.credit_points")}
                count={data.credit_points}
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: t("analytics.than_yesterday"),
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title={t("commons.resources")}
                count={data.resourse_count}
                percentage={{
                  color: "success",
                  amount: "",
                  label: t("commons.just_updated"),
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="A Human Heart"
                  description={t("commons.student_eng")}
                  date={7 + " " + t("analytics.days_analytics")}
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            {/* <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid> */}
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
