import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import localStorage from "libs/localStorage";
import axios from "axios";
import api_urls from "constants/api_urls";
import { toast } from "react-toastify";
import Switch from "@mui/material/Switch";

function EditUserForm() {
  const userData = localStorage.getUser();

  const [name, setName] = useState(userData.user_name);
  const [email, setEmail] = useState(userData.email);
  const [education, setEducation] = useState(userData.education || "");
  const [major, setMajor] = useState(userData.major || "");
  const [graduationYear, setGraduationYear] = useState(userData.graduation_year || "");
  const [workExperience, setWorkExperience] = useState(userData.work_experience || "");
  const [hasPublishedPaper, setHasPublishedPaper] = useState(userData.has_published_paper || false);
  const [numberOfPapers, setNumberOfPapers] = useState(userData.number_of_papers || 0);
  const [briefAboutPapers, setBriefAboutPapers] = useState(userData.brief_about_papers || "");
  const [highestDesignation, setHighestDesignation] = useState(userData.highest_designation || "");
  const [isLoading, setisLoading] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      if (parseInt(graduationYear) > new Date().getFullYear()) {
        toast.error("Invalid graduation year!");
        return;
      }

      const formData = {
        username: name,
        email,
        education,
        major,
        graduation_year: graduationYear,
        work_experience: workExperience,
        has_published_paper: hasPublishedPaper,
        number_of_papers: numberOfPapers,
        brief_about_papers: briefAboutPapers,
        highest_designation: highestDesignation,
        user_id: userData.user_id,
      };

      const { data } = await axios.put(api_urls.LMS_USERS_BASE_URL + "edit", formData);

      const updatedUserData = { user_id: data._id, user_name: data.username, ...data };
      localStorage.setUser(updatedUserData);

      toast.success("Saved successfully!");
    } catch (error) {
      console.log(error);

      if (error.response?.data?.message) {
        toast.error(error?.response?.data?.message);
        return;
      }

      toast.error("Something went wrong!");
    } finally {
      setisLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {/* ... (previous form elements) */}

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
        <Grid item xs={12} sm={6}>
          <TextField
            label="Work Experience"
            value={workExperience}
            onChange={(e) => setWorkExperience(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Highest Designation"
            value={highestDesignation}
            onChange={(e) => setHighestDesignation(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">Has Published Paper</Typography>
          <Switch
            checked={hasPublishedPaper}
            onChange={(e) => setHasPublishedPaper(e.target.checked)}
            color="primary"
          />
        </Grid>
        {hasPublishedPaper && (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Number of Papers"
                type="number"
                value={numberOfPapers}
                onChange={(e) => setNumberOfPapers(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Brief About Papers"
                value={briefAboutPapers}
                onChange={(e) => setBriefAboutPapers(e.target.value)}
                fullWidth
              />
            </Grid>
          </>
        )}

        {/* ... (previous form elements) */}
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
