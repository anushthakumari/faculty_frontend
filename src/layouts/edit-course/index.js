import { useTranslation } from "react-i18next";
import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ControlPanel from "layouts/edit-course/control-panel";
import ModuleBuilder from "layouts/edit-course/module-builder";
import ModuleBuilderStateProvier from "./ModuleBuilderState.provider";
import MDButton from "components/MDButton";

//page components
const CARD_PADDDING = "10px";
const HEIGHT = "70vh";

function CreateCourse() {
  const { t } = useTranslation();

  const [courseData, setcourseData] = useState({ title: "" });

  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox>
        <MDBox display="flex" justifyContent="space-between" alignItems="center">
          <MDTypography variant="h4" textTransform="capitalize" mb={3}>
            {courseData.title ? courseData.title : t("add_course.create_a_course")}
          </MDTypography>
          <MDButton color="secondary">{t("add_course.watch_preview")}</MDButton>
        </MDBox>
        <MDBox mb={3}>
          <Grid position={"relative"} container spacing={3}>
            <Grid item xs={12} md={9}>
              <MDBox flex={1} display="flex" justifyContent="center" alignItems="center">
                {/* module builder */}
                <MDBox flex={1}>
                  <ModuleBuilderStateProvier>
                    <ModuleBuilder />
                  </ModuleBuilderStateProvier>
                </MDBox>
              </MDBox>
            </Grid>
            {/* Help & control panel */}
            <Grid item xs={12} md={2.5} position={"fixed"} width={"400px"} right={10}>
              <MDBox>
                <Card
                  sx={{
                    padding: CARD_PADDDING,
                  }}
                  style={{ minHeight: HEIGHT }}
                >
                  <ControlPanel />
                </Card>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default CreateCourse;
