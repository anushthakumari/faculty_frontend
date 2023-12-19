import { useTranslation } from "react-i18next";

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";

import Header from "./Header";

import EditUserForm from "./EditUserForm";
import DocumentUploadForm from "./DocumentUploadForm";

function TeacherProfile() {
  const { t, i18n } = useTranslation();

  return (
    <DashboardLayout>
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6} xl={6}>
              <EditUserForm />
            </Grid>
            <Grid item xs={12} md={5} xl={5} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <DocumentUploadForm />
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default TeacherProfile;
