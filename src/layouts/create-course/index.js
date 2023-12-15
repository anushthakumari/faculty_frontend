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
import ControlPanel from "layouts/create-course/control-panel";
import ModuleBuilder from "layouts/create-course/module-builder";
import ModuleBuilderStateProvier from "./ModuleBuilderState.provider";

//page components

const CARD_PADDDING = "15px";
const HEIGHT = "70vh";

function CreateCourse() {
  const { t } = useTranslation();

  const [stepIndex, setStepIndex] = useState(0);
  const [courseData, setcourseData] = useState({ title: "" });

  const handleNameSubmit = (e) => {
    e.preventDefault();
    const course_name = e.target.course_name.value.trim();
    setcourseData((prev) => ({ ...prev, title: course_name }));
    setStepIndex(1);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox>
        <MDTypography variant="h4" textTransform="capitalize">
          {courseData.title ? courseData.title : t("add_course.create_a_course")}
        </MDTypography>
        <MDBox mb={3}>
          <Grid position={"relative"} container spacing={3}>
            <Grid item xs={12} md={8.5}>
              <MDBox flex={1} display="flex" justifyContent="center" alignItems="center">
                {/* initial Step 0 */}
                <RenderWhen isTrue={stepIndex === 0}>
                  <Card
                    style={{
                      minHeight: HEIGHT,
                      width: "100%",
                      padding: CARD_PADDDING,
                    }}
                  >
                    <MDBox
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap={2}
                      component="form"
                      onSubmit={handleNameSubmit}
                      sx={{
                        height: HEIGHT,
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
                  </Card>
                </RenderWhen>

                {/* module builder */}
                <RenderWhen isTrue={stepIndex === 1}>
                  <MDBox flex={1}>
                    <ModuleBuilderStateProvier>
                      <ModuleBuilder />
                    </ModuleBuilderStateProvier>
                  </MDBox>
                </RenderWhen>
              </MDBox>
            </Grid>
            {/* Help & control panel */}
            <Grid item xs={12} md={3} position={"fixed"} right={"10px"} top={"55px"} width={"100%"}>
              <MDBox>
                <Card
                  sx={{
                    padding: CARD_PADDDING,
                  }}
                  style={{ minHeight: HEIGHT }}
                >
                  <RenderWhen isTrue={stepIndex === 0}>
                    <MDTypography>How to create your personalised course?</MDTypography>
                  </RenderWhen>

                  <RenderWhen isTrue={stepIndex === 1}>
                    <ControlPanel />
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
