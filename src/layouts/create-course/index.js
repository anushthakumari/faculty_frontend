import { useTranslation } from "react-i18next";
import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import RenderWhen from "components/RenderWhen";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

//page components

const CARD_PADDDING = "15px";

function CreateCourse() {
  const { t } = useTranslation();

  const [stepIndex, setStepIndex] = useState(0);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    const course_name = e.target.course_name.value.trim();
    setStepIndex(1);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <MDTypography variant="h4" mb={3}>
          {t("add_course.create_a_course")}
        </MDTypography>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={9}>
              <MDBox flex={1} display="flex" justifyContent="center" alignItems="center">
                <Card style={{ minHeight: "70vh", width: "100%", padding: CARD_PADDDING }}>
                  {/* initial Step 0 */}
                  <RenderWhen isTrue={stepIndex === 0}>
                    <MDBox
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap={2}
                      component="form"
                      onSubmit={handleNameSubmit}
                      sx={{
                        height: "70vh",
                        width: "100%",
                      }}
                    >
                      <MDTypography variant="h4">
                        {t("add_course.give_your_course_a_name")}
                      </MDTypography>
                      <MDInput
                        name="course_name"
                        sx={{
                          width: "70%",
                        }}
                        inputProps={{
                          style: { padding: "15px", fontSize: "20px", fontWeight: "bold" },
                        }}
                        required
                      />
                      <MDButton type="submit" color="primary" size="large">
                        {t("add_course.start")}
                      </MDButton>
                    </MDBox>
                  </RenderWhen>
                </Card>
              </MDBox>
            </Grid>
            {/* Help */}
            <Grid item xs={12} md={3}>
              <MDBox>
                <Card
                  sx={{
                    padding: CARD_PADDDING,
                  }}
                  style={{ minHeight: "70vh" }}
                >
                  <RenderWhen isTrue={stepIndex === 0}>
                    <MDTypography>How to create your personalised course?</MDTypography>
                  </RenderWhen>
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
