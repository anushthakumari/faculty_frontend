// GrievanceForm.js
import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box, Grid, InputAdornment } from "@mui/material";
import { HelpOutline as HelpOutlineIcon } from "@mui/icons-material";

const GrievanceForm = ({ user = {} }) => {
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
    setFormData({ ...formData, dateTime });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the form submission logic here
    console.log("Form submitted:", formData);
    // Add your logic to handle the form submission, such as sending the data to the server.
  };

  return (
    <Container>
      <Box mt={3}>
        <Typography variant="h4" align="center" gutterBottom>
          Grievance Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                variant="outlined"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Your Email"
                name="email"
                type="email"
                variant="outlined"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              {/* <DateTimePicker
                renderInput={(props) => (
                  <TextField {...props} fullWidth label="Date and Time" variant="outlined" />
                )}
                value={formData.dateTime}
                onChange={handleDateTimeChange}
              /> */}
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
              <TextField
                fullWidth
                label="Helpline Number (for teachers to call)"
                name="helplineNumber"
                variant="outlined"
                required
                value={formData.helplineNumber}
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
                value="123-456-7890" // Replace with your actual helpline number
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
              <Button type="submit" sx={{ color: "#fff" }} variant="contained" color="primary">
                Submit Grievance
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default GrievanceForm;
