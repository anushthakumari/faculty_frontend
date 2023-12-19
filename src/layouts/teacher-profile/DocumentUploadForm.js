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

  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [userData, setuserData] = useState(localUserData);
  const [previouslyUploadedDocumentUrl, setPreviouslyUploadedDocumentUrl] = useState(null);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setisLoading(true);
      const file_url = await helperApis.upload_file(selectedFile);

      const d = { user_id: userData.user_id, doc_url: file_url };

      const { data } = await axios.put(api_urls.LMS_USERS_BASE_URL + "edit", d);
      const newD = { user_id: data._id, user_name: data.username, ...data };
      localStorage.setUser(newD);
      setUser(newD);
      toast.success("saved successfully!");
    } catch (error) {
      console.log(error);
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
            Upload Document
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <InputLabel id="document-file-label">Document</InputLabel>
          <input id="document-file" type="file" accept="image/*" onChange={handleFileUpload} />
          {selectedFile && (
            <Tooltip title="Remove uploaded file">
              <IconButton aria-label="remove uploaded file" onClick={() => setSelectedFile(null)}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          )}
        </Grid>
        <Grid item xs={12}>
          {userData.doc_url ? <img src={userData.doc_url} width={100} height={100} /> : null}
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
      </Grid>
    </form>
  );
}

export default DocumentUploadForm;
