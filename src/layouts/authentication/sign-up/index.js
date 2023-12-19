import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// react-router-dom components
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import { FormControl, MenuItem, Select } from "@mui/material";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

import axios from "axios";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import Capture from "./Capture";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

import teacher_types from "constants/teacher_types";
import api_urls from "constants/api_urls";
import localStorage from "libs/localStorage";

function Cover() {
  const [open, setOpen] = useState(false);
  const [userData, setuserData] = useState({});
  const [isLoading, setisLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const teacher_type = e.target.teacher_type.value.trim();

    const d = {
      name,
      email,
      password,
      teacher_type,
    };

    setuserData(d);

    setOpen(true);
  };

  const handleImageCapture = (file) => {
    setOpen(false);
    setisLoading(true);

    const fd = new FormData();
    fd.append("username", userData.name);
    fd.append("password", userData.password);
    fd.append("email", userData.email);
    fd.append("teacher_type", userData.teacher_type);
    fd.append("profile_picture", file);

    axios
      .post(api_urls.LMS_USERS_BASE_URL + "register", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(({ data }) => {
        localStorage.setUser({ user_id: data._id, user_name: data.username });
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
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" onSubmit={handleSubmit} role="form">
            <MDBox mb={2}>
              <MDInput type="text" label="Name" name="name" variant="standard" fullWidth required />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                name="email"
                variant="standard"
                fullWidth
                required
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                name="password"
                variant="standard"
                fullWidth
                required
              />
            </MDBox>
            <FormControl
              sx={{
                height: "50px",
                color: "white",
              }}
              fullWidth
              required
            >
              <Select
                labelId="indian-language-label"
                style={{ height: "100%", backgroundColor: "white", color: "#000" }}
                defaultValue={teacher_types.govt}
                name="teacher_type"
                // value={selectedLanguage}
                // onChange={handleChange}
              >
                {Object.values(teacher_types).map((v) => (
                  <MenuItem sx={{ textTransform: "capitalize" }} key={v} value={v}>
                    {v + " Teacher"}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <MDBox mt={4} mb={1}>
              <MDButton type="submit" variant="gradient" color="info" fullWidth>
                {isLoading ? "Loading.." : "Sign Up"}
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
      <CameraModal open={open} onClose={() => setOpen(false)} onCapture={handleImageCapture} />
    </CoverLayout>
  );
}

export default Cover;

function CameraModal({ open, onClose, onCapture }) {
  const handleClose = () => {
    onClose?.();
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Let's click your picture"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This is just for authenticity of yours, please be relax while facing the camera
          </DialogContentText>
          <Capture isOpen={open} onCapture={onCapture} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
