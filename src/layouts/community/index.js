import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import CreateForm from "./CreateForm";

import { Stack } from "@mui/material";

import Post from "./Post";

import localStorage from "libs/localStorage";
import LoadingSpinner from "components/LoadingSpinner";

//page components
const CARD_PADDDING = "10px";
const HEIGHT = "70vh";

function Community() {
  const { t } = useTranslation();

  const [posts, setposts] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const handleSuccess = () => {
    setposts(localStorage.getPosts());
  };

  useEffect(() => {
    setisLoading(true);
    setTimeout(() => {
      setposts(localStorage.getPosts());
      setisLoading(false);
    }, 500);
  }, []);

  return (
    <DashboardLayout>
      <LoadingSpinner isLoading={isLoading} />
      <DashboardNavbar absolute isMini />
      <MDBox>
        <MDTypography variant="h4" textTransform="capitalize" mb={3}>
          {t("community.page_title")}
        </MDTypography>
        <MDBox mb={3}>
          <Grid position={"relative"} container spacing={3}>
            <Grid item xs={12} md={8.5}>
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
                  {posts.map((v) => (
                    <Post key={v.id} post={v} />
                  ))}
                </Stack>
              </MDBox>
            </Grid>
            {/* Form */}
            <Grid item xs={12} md={3} position={"fixed"} width={"400px"} right={10}>
              <MDBox>
                <Card
                  sx={{
                    padding: CARD_PADDDING,
                  }}
                  style={{ minHeight: HEIGHT }}
                >
                  <Stack gap={2}>
                    <CreateForm onSuccess={handleSuccess} />
                  </Stack>
                </Card>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Community;
