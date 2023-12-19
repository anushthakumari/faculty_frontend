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
  const [isLoading, setisLoading] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const d = { username: name, email, user_id: userData.user_id };

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
        <Grid item xs={12}>
          <Button
            type="submit"
            sx={{ color: "#fff" }}
            variant="contained"
            color="primary"
            fullWidth
          >
            {isLoading ? "Loading..." : "Save Changes"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default EditUserForm;
