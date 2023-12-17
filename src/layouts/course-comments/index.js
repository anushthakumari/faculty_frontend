import { useTranslation } from "react-i18next";
import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { Stack } from "@mui/material";

import Comment from "./Comment";

import localStorage from "libs/localStorage";

function CourseComments() {
  const { t } = useTranslation();

  const [comments, setcomments] = useState(localStorage.getComments());

  const handleSuccess = () => {
    setcomments(localStorage.getComments());
  };

  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox>
        <MDTypography variant="h4" textTransform="capitalize" mb={3}>
          {t("course_comments.page_title")}
        </MDTypography>
        <MDBox mb={3}>
          <MDBox
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              gap={3}
              style={{
                maxWidth: "600px",
              }}
              flex={1}
            >
              {comments.map((v) => (
                <Comment key={v.id} comment={v} />
              ))}
            </Stack>
          </MDBox>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default CourseComments;
