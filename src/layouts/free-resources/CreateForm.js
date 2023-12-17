import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import { Stack, Typography } from "@mui/material";

import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

import all_elements from "constants/element_types";
import resourcesAPIs from "apis/resources.apis";

const element_types = {
  [all_elements.video]: "video/*",
  [all_elements.audio]: "audio/*",
  [all_elements.doc]: ".doc,.docx,.csv,.ppt,.pptx,.xls,.xlsx",
  [all_elements.model]: ".glb",
  [all_elements.image]: "image/*",
};

const allowedExtensions = (type) => element_types[type].split(",");

const CreateForm = ({ onSuccess }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [elementType, setElementType] = useState("video");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const { t } = useTranslation();

  const handleElementTypeChange = (event) => {
    setElementType(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      title: title.trim(),
      description: description.trim(),
      files: [selectedFile],
      element_type: elementType,
      user_id: "randomstring123",
      user_name: "Jai Shankar",
      is_private: false,
    };

    resourcesAPIs
      .upload_res(
        body.files,
        body.element_type,
        body.title,
        body.description,
        body.user_id,
        body.user_name,
        body.is_private
      )
      .then((data) => {
        // Reset form after submission
        setTitle("");
        setDescription("");
        setElementType("video");
        setSelectedFile(null);
        toast.success("uploaded successfully!");
        onSuccess();
      })
      .catch((e) => {
        if (e.response?.data) {
          toast.error(e.response?.data.message);
          return;
        }

        toast.error("something went wrong!");
      })
      .finally((e) => {
        setisLoading(false);
      });
  };

  return (
    <MDBox padding={1}>
      <Stack gap={2}>
        <MDTypography variant="h5">{t("free_resources.upload_ur_own_resource")}</MDTypography>
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
          component="form"
          onSubmit={handleSubmit}
        >
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
          <TextField
            label="Description"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
          <FormControl fullWidth sx={{ mt: 2 }} required>
            <InputLabel>Type</InputLabel>
            <Select
              value={elementType}
              style={{ padding: "18px" }}
              onChange={handleElementTypeChange}
              label="Type"
            >
              {Object.keys(element_types).map((type) => (
                <MenuItem key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box sx={{ mt: 2 }}>
            <MDBox>
              <label htmlFor="upload-file">
                <Button variant="outlined" sx={{ color: "#000" }} component="span">
                  Upload File
                </Button>
                <input
                  type="file"
                  id="upload-file"
                  accept={allowedExtensions(elementType).join(",")}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </label>
            </MDBox>
            <MDBox>
              {selectedFile && (
                <Typography component={"p"} variant="caption" sx={{ mt: 1, width: "300px" }}>
                  {selectedFile.name}
                </Typography>
              )}
            </MDBox>
          </Box>
          <MDButton color="primary" type="submit" sx={{ mt: 3 }} disabled={isLoading} fullWidth>
            {isLoading ? t("commons.loading") : t("commons.save")}
          </MDButton>
        </Box>
      </Stack>
    </MDBox>
  );
};

export default CreateForm;
