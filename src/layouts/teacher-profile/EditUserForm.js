import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import localStorage from "libs/localStorage";
import axios from "axios";
import api_urls from "constants/api_urls";
import { toast } from "react-toastify";

function EditUserForm() {
  const userData = localStorage.getUser();

  const [name, setName] = useState(userData.user_name);
  const [email, setEmail] = useState(userData.email);
  const [education, setEducation] = useState(userData.education || "");
  const [major, setMajor] = useState(userData.major || "");
  const [graduationYear, setGraduationYear] = useState(userData.graduation_year || "");
  const [isLoading, setisLoading] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      if (parseInt(graduationYear) > new Date().getFullYear()) {
        toast.error("invalid graduation year!");
        return;
      }

      const d = {
        username: name,
        email,
        education,
        major,
        graduation_year: graduationYear,
        user_id: userData.user_id,
      };

      const { data } = await axios.put(api_urls.LMS_USERS_BASE_URL + "edit", d);

      const dt = { user_id: data._id, user_name: data.username, ...data };

      localStorage.setUser(dt);

      toast.success("Saved successfully!");
    } catch (error) {
      console.log(error);

      if (error.response?.data?.message) {
        toast.error(error?.response?.data?.message);
        return;
      }

      toast.error("something went wrong!");
    } finally {
      setisLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            Edit Information
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Major"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Graduation Year"
            type="number"
            value={graduationYear}
            onChange={(e) => setGraduationYear(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            sx={{ color: "#fff" }}
            variant="contained"
            color="primary"
            fullWidth
            required
          >
            {isLoading ? "Loading..." : "Save Changes"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default EditUserForm;
