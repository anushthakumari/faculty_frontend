import { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

import VerifiedIcon from "@mui/icons-material/Verified";

import localStorage from "libs/localStorage";

function Header({ children }) {
  const userData = localStorage.getUser();

  return (
    <MDBox position="relative" mb={5}>
      <MDBox
        // display="flex"
        // alignItems="center"
        // position="relative"
        // minHeight="18.75rem"
        borderRadius="xl"
      />
      <Card
        sx={{
          position: "relative",
          //   mt: -8,
          mx: 3,
          py: 2,
          px: 2,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <MDAvatar src={userData.profile_picture} alt="profile-image" size="xl" shadow="sm" />
          </Grid>
          <Grid item>
            <MDBox height="100%" mt={0.5} lineHeight={1}>
              <MDTypography variant="h5" fontWeight="medium">
                {userData.user_name}
              </MDTypography>
              <MDTypography variant="button" color="text" fontWeight="regular">
                Teacher {userData.is_verified ? <VerifiedIcon sx={{ color: "green" }} /> : null}
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
        {children}
      </Card>
    </MDBox>
  );
}

export default Header;
