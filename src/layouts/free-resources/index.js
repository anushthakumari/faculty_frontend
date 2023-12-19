import { useTranslation } from "react-i18next";
import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import ResourceTable from "./ResourceTable";
import CreateForm from "./CreateForm";

import useResourcesData from "./useResourcesData";
import ViewFileData from "./ViewFileData";
import { Stack } from "@mui/material";
import Tutorials from "./Tutorials";
import LoadingSpinner from "components/LoadingSpinner";

//page components
const CARD_PADDDING = "10px";
const HEIGHT = "70vh";

function FreeResources() {
  const { t } = useTranslation();

  const [viewSate, setviewSate] = useState({
    isOpen: false,
    resource_id: null,
  });

  const openDetails = (d) => {
    setviewSate({
      isOpen: true,
      resource_id: d._id,
    });
  };

  const { columns, rows, fetchResources, resourcesData, isLoading } = useResourcesData(openDetails);

  const closeDetails = () => {
    setviewSate({
      isOpen: false,
      resource_id: null,
    });
  };

  const viewData = resourcesData.find((v) => v._id === viewSate.resource_id);

  return (
    <DashboardLayout>
      <LoadingSpinner isLoading={isLoading} />
      <DashboardNavbar absolute isMini />
      <MDBox>
        <MDTypography variant="h4" textTransform="capitalize" mb={3}>
          {t("free_resources.page_title")}
        </MDTypography>
        <MDBox mb={3}>
          <Grid position={"relative"} container spacing={3}>
            <Grid item xs={12} md={9}>
              <MDBox flex={1} display="flex" justifyContent="center" alignItems="center">
                <MDBox flex={1}>
                  <Stack gap={4}>
                    <ResourceTable rows={rows} columns={columns} />
                    <Tutorials />
                  </Stack>
                </MDBox>
              </MDBox>
            </Grid>
            {/* Form */}
            <Grid item xs={12} md={2.5} position={"fixed"} width={"400px"} right={10}>
              <MDBox>
                <Card
                  sx={{
                    padding: CARD_PADDDING,
                  }}
                  style={{ minHeight: HEIGHT }}
                >
                  <Stack gap={2}>
                    <CreateForm onSuccess={fetchResources} />
                  </Stack>
                </Card>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <ViewFileData open={viewSate.isOpen} {...viewData} onClose={closeDetails} />
    </DashboardLayout>
  );
}

export default FreeResources;
