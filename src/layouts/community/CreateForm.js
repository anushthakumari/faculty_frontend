import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";

import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import { Stack, Typography, TextField } from "@mui/material";

import { Box, Button } from "@mui/material";

import all_elements from "constants/element_types";
import localStorage from "libs/localStorage";

const element_types = {
  [all_elements.video]: "video/*",
  [all_elements.audio]: "audio/*",
  [all_elements.doc]: ".doc,.docx,.csv,.ppt,.pptx,.xls,.xlsx",
  [all_elements.model]: ".glb",
  [all_elements.image]: "image/*",
};

const allowedExtensions = (type) => element_types[type].split(",");

const CreateForm = ({ onSuccess }) => {
  const [description, setDescription] = useState("");
  const [elementType, setElementType] = useState("image");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const { t } = useTranslation();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setisLoading(true);

    const userData = localStorage.getUser();

    const body = {
      id: uuid(),
      caption: description.trim(),
      mediaUrl: selectedFile ? URL.createObjectURL(selectedFile) : null,
      likesCount: 0,
      commentsCount: 0,
      ...userData,
      createdAt: new Date().toISOString(),
    };

    localStorage.savePost(body);

    setTimeout(() => {
      onSuccess?.(body);
      toast.success("Posted Successfully!");

      setisLoading(false);
    }, 500);
  };

  return (
    <MDBox padding={1}>
      <Stack gap={2}>
        <MDTypography variant="h5">{t("community.post_something")}</MDTypography>
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
          component="form"
          onSubmit={handleSubmit}
        >
          <TextField
            label="Caption"
            variant="outlined"
            multiline
            rows={6}
            fullWidth
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
          <Box sx={{ mt: 2 }}>
            <MDBox>
              <label htmlFor="upload-file">
                <Button variant="outlined" sx={{ color: "#000" }} component="span">
                  {t("commons.upload_file")}
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
          <MDBox sx={{ position: "absolute", bottom: "25px", width: "100%", padding: "20px" }}>
            <MDButton color="primary" type="submit" disabled={isLoading} fullWidth>
              {isLoading ? t("commons.loading") : t("commons.post")}
            </MDButton>
          </MDBox>
        </Box>
      </Stack>
    </MDBox>
  );
};

export default CreateForm;
