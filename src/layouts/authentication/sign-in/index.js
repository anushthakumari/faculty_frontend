import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

import api_urls from "constants/api_urls";
import localStorage from "libs/localStorage";
import { toast } from "react-toastify";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const navigate = useNavigate();

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    axios
      .post(api_urls.LMS_USERS_BASE_URL + "login", {
        email,
        password,
      })
      .then(({ data }) => {
        localStorage.setUser({ user_id: data._id, user_name: data.username, ...data });
        navigate("/dashboard");
      })
      .catch((e) => {
        console.log(e);
        if (e.response?.data?.message) {
          toast.error(e.response?.data?.message);
        } else {
          toast.error("something went wrong!");
        }
      })
      .finally((e) => {
        setisLoading(false);
      });
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
          {/* <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid> */}
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" onSubmit={handleSubmit} role="form">
            <MDBox mb={2}>
              <MDInput type="email" label="Email" name="email" fullWidth required />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" name="password" fullWidth required />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton
                type="submit"
                variant="gradient"
                color="info"
                disabled={isLoading}
                fullWidth
              >
                {isLoading ? "Loading.." : "Sign In"}
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
