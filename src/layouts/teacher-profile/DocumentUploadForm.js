import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Grid,
  Typography,
  InputLabel,
  FormControl,
  Select,
  Input,
  IconButton,
  Tooltip,
  Avatar,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import helperApis from "apis/helper.apis";
import localStorage from "libs/localStorage";
import { toast } from "react-toastify";

import api_urls from "constants/api_urls";

function DocumentUploadForm() {
  const localUserData = localStorage.getUser();

  const [aadharCardFile, setAadharCardFile] = useState(null);
  const [markSheetFile, setMarkSheetFile] = useState(null);
  const [certFile, setcertFile] = useState(null);

  const [isLoading, setisLoading] = useState(false);
  const [userData, setuserData] = useState(localUserData);

  const handleFileUpload = (event, setFileState) => {
    const file = event.target.files[0];
    setFileState(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setisLoading(true);

      const aadharCardUrl = aadharCardFile && (await helperApis.upload_file(aadharCardFile));
      const markSheetUrl = markSheetFile && (await helperApis.upload_file(markSheetFile));
      const certUrl = markSheetFile && (await helperApis.upload_file(certFile));

      const updatedUserData = {
        user_id: userData.user_id,
        aadhar_card_url: aadharCardUrl || userData.aadhar_card_url,
        mark_sheet_url: markSheetUrl || userData.mark_sheet_url,
        cert_url: certUrl || userData.cert_url,
      };

      const { data } = await axios.put(api_urls.LMS_USERS_BASE_URL + "edit", updatedUserData);
      const newUserData = { user_id: data._id, user_name: data.username, ...data };
      localStorage.setUser(newUserData);
      setuserData(newUserData);
      toast.success("Documents uploaded successfully!, you will be verified soon! ");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setisLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography>Documents Supporting Your Education</Typography>

      <Grid item xs={12} mt={3}>
        <InputLabel id="aadhar-card-file-label">Aadhar Card</InputLabel>
        <input
          id="aadhar-card-file"
          type="file"
          accept="image/*"
          onChange={(event) => handleFileUpload(event, setAadharCardFile)}
        />
        {aadharCardFile && (
          <Tooltip title="Remove uploaded file">
            <IconButton aria-label="remove uploaded file" onClick={() => setAadharCardFile(null)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )}
      </Grid>

      <Grid item xs={12} mt={3}>
        <InputLabel id="mark-sheet-file-label">Graduation Mark Sheet</InputLabel>
        <input
          id="mark-sheet-file"
          type="file"
          accept="image/*"
          onChange={(event) => handleFileUpload(event, setMarkSheetFile)}
        />
        {markSheetFile && (
          <Tooltip title="Remove uploaded file">
            <IconButton aria-label="remove uploaded file" onClick={() => setMarkSheetFile(null)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )}
      </Grid>

      <Grid item xs={12} my={3}>
        <InputLabel id="certification-file-label">Any Certification</InputLabel>
        <input
          id="certification-file"
          type="file"
          accept="image/*"
          onChange={(event) => handleFileUpload(event, setcertFile)}
        />
        {certFile && (
          <Tooltip title="Remove uploaded file">
            <IconButton aria-label="remove uploaded file" onClick={() => setcertFile(null)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )}
      </Grid>

      <Grid item xs={12}>
        <Button
          sx={{ color: "#fff" }}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Upload"}
        </Button>
      </Grid>

      {userData.aadhar_card_url ? (
        <Grid mt={2} container>
          <Grid md={6} item>
            <Typography>Adhar Card</Typography>
          </Grid>
          <Grid md={6} item>
            <img src={userData.aadhar_card_url} height={100} width={100} />
          </Grid>
        </Grid>
      ) : null}
      {userData.mark_sheet_url ? (
        <Grid mt={2} container>
          <Grid md={6} item>
            <Typography>Mark Sheet</Typography>
          </Grid>
          <Grid md={6} item>
            <img src={userData.mark_sheet_url} height={100} width={100} />
          </Grid>
        </Grid>
      ) : null}
      {userData.cert_url ? (
        <Grid mt={2} container>
          <Grid md={6} item>
            <Typography>Certification</Typography>
          </Grid>
          <Grid md={6} item>
            <img src={userData.cert_url} height={100} width={100} />
          </Grid>
        </Grid>
      ) : null}
    </form>
  );
}

export default DocumentUploadForm;
