// GrievanceForm.js
import React, { useState } from "react";
import moment from "moment";

import { TextField, Button, Container, Typography, Box, Grid, InputAdornment } from "@mui/material";
import { HelpOutline as HelpOutlineIcon } from "@mui/icons-material";
import DatePicker from "react-datepicker";
import MDTypography from "components/MDTypography";

import { toast } from "react-toastify";

import "react-datepicker/dist/react-datepicker.css";

const GrievanceForm = ({ user = {} }) => {
  const [dateTime, setdateTime] = useState();
  const [isLoading, setisLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    dateTime: new Date(),
    reason: "",
    description: "",
    helplineNumber: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateTimeChange = (dateTime) => {
    const isFutureDate = moment(dateTime).isAfter(moment());

    if (isFutureDate) {
      toast.error("Date Time cannot be more than current time!");
      return;
    }

    setdateTime(dateTime);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setisLoading(true);
    // You can handle the form submission logic here
    console.log("Form submitted:", formData);
    // Add your logic to handle the form submission, such as sending the data to the server.
    setTimeout(() => {
      setisLoading(false);
      toast.success("Thank You For Instant response!, Our people will be connecting to you.");
    }, 500);
  };

  console.log(dateTime);

  return (
    <Container>
      <Box mt={3}>
        <Typography variant="h4" align="center" gutterBottom>
          Grievance Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <MDTypography variant="body2">When did that happen?</MDTypography>
          <Grid container spacing={3}>
            <Grid position={"relative"} zIndex={999999} item xs={12}>
              <DatePicker onChange={handleDateTimeChange} selected={dateTime} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Reason"
                name="reason"
                variant="outlined"
                required
                value={formData.reason}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                multiline
                rows={4}
                variant="outlined"
                required
                value={formData.description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" align="center" color="textSecondary">
                In case of emergency, call the helpline:
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                disabled
                value="894-782-8956"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HelpOutlineIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                sx={{ color: "#fff" }}
                variant="contained"
                color="primary"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Submit Grievance"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default GrievanceForm;
