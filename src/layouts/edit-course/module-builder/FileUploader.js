import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MDBox from "components/MDBox";

import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import RenderWhen from "components/RenderWhen";
import FilePreview from "./FilePreview";

import element_types from "constants/element_types";
import resourcesAPIs from "apis/resources.apis";

const file_types = {
  [element_types.video]: "video/*",
  [element_types.audio]: "audio/*",
  [element_types.doc]: ".doc,.docx,.csv,.ppt,.pptx,.xls,.xlsx",
  [element_types.model]: ".glb",
  [element_types.image]: "image/*",
};

const static_models = [
  {
    _id: "randomstrin1",
    file_url: "/realistic_human_heart.glb",
    title: "A Realistic Human Heart",
    element_type: "model",
    is_private: false,
    user_name: "Jai Shankar",
    createdAt: "2023-12-16T19:29:29.439+00:00",
  },
  {
    _id: "randomstrin2",
    file_url: "/modular_suspension.glb",
    title: "A Modular Suspension",
    element_type: "model",
    is_private: false,
    user_name: "Jai Shankar",
    createdAt: "2023-12-16T19:29:29.439+00:00",
  },
];

export default function FileUploader({ open, onClose, type, onSuccess }) {
  const { t } = useTranslation();

  const accept = file_types[type];
  const isModel = type === element_types.model;

  const [selectedFile, setSelectedFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [files, setfiles] = useState(isModel ? static_models : []);

  const filteredFiles = files
    .filter((file) => file.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => b.uploadDate - a.uploadDate); // Sort by upload date (latest first)

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleClose = () => {
    if (isLoading) {
      return;
    }
    setSelectedFile();
    onClose?.();
  };

  const handleUpload = () => {
    if (!selectedFile) {
      toast.error("Please select a file!");
      return;
    }

    setisLoading(true);

    resourcesAPIs
      .upload_res([selectedFile], type)
      .then((data) => {
        const fileData = data.asset;
        onSuccess?.(fileData);
        setSelectedFile();
        onClose?.();
        toast.success("uploaded successfully!");
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

  const handleSelectFile = (fileData = {}) => {
    onSuccess?.(fileData);
    setSelectedFile();
    onClose?.();
  };

  const renderFile = (file) => (
    <ListItem
      key={file._id}
      sx={{
        my: "6px",
        padding: "8px",
        border: "1px solid black",
        borderRadius: "15px",
      }}
    >
      <ListItemText
        style={{ flex: 1, textTransform: "capitalize" }}
        primary={file.title}
        secondary={`${formatDate(file.createdAt)} by ${file.user_name}`}
      />
      <Button onClick={handleSelectFile.bind(this, file)}>{t("add_course.select_file")}</Button>
    </ListItem>
  );

  useEffect(() => {
    if (!isModel) {
      resourcesAPIs
        .get_res(type)
        .then((d) => {
          setfiles(d);
        })
        .catch((e) => {
          console.log("cannot get assests!", e);
        });
    } else {
      setfiles(static_models);
    }
  }, [type, isModel]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="lg"
      fullWidth
    >
      <DialogActions>
        <MDButton onClick={handleClose}>{t("commons.cancel")}</MDButton>
        <MDButton
          variant="contained"
          color="primary"
          onClick={handleUpload}
          disabled={isLoading}
          autoFocus
        >
          {isLoading ? t("commons.loading") : t("commons.save")}
        </MDButton>
      </DialogActions>
      <MDBox>
        <DialogContent>
          <RenderWhen isTrue={!isModel}>
            <MDBox>
              <MDBox
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                mb={3}
              >
                <Button variant="contained" component="label" sx={{ color: "#fff" }}>
                  {t("add_course.choose_file_from_system")}
                  <input
                    type="file"
                    accept={accept}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </Button>
                <FilePreview file={selectedFile} />
              </MDBox>

              <MDBox>
                <MDTypography variant="h4" textAlign="center" textTransform="uppercase">
                  {t("commons.or")}
                </MDTypography>
              </MDBox>
            </MDBox>
          </RenderWhen>
          <MDBox width="100%" mt={4}>
            <MDTypography fontWeight="bold">
              {t("add_course.search_file_from_free_resourse")}
            </MDTypography>
            <TextField
              variant="outlined"
              fullWidth
              sx={{ mb: 3 }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <List>
              {filteredFiles.length > 0 ? (
                filteredFiles.map(renderFile)
              ) : (
                <MDTypography variant="body1">{t("add_course.no_files_found")}</MDTypography>
              )}
            </List>
          </MDBox>
        </DialogContent>
      </MDBox>
    </Dialog>
  );
}
