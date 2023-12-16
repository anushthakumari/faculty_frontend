import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

import RenderWhen from "components/RenderWhen";
import Element from "layouts/edit-course/element";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import DeleteIcon from "@mui/icons-material/Delete";

import {
  useModuleBuilderState,
  useGetChapterElementsByIndex,
} from "../ModuleBuilderState.provider";
import element_types from "constants/element_types";

import FileUploader from "./FileUploader";

const upload_elements = [
  element_types.video,
  element_types.audio,
  element_types.doc,
  element_types.model,
  element_types.image,
];

const HEIGHT = "200px";
const CARD_PADDDING = "10px";

const ChapterSection = ({ chapterIndex = 0 }) => {
  const { t } = useTranslation();
  const { addElementToChapter, removeChapterByIndex } = useModuleBuilderState();

  const [isDropping, setisDropping] = useState(false);
  const [fileUploadSate, setfileUploadSate] = useState({
    isOpen: false,
    type: "",
  });

  const chapterElements = useGetChapterElementsByIndex(chapterIndex);

  const chapterElementsWithoutChapterIndex = chapterElements.filter(
    (v) => v.type !== element_types.index
  );

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setisDropping(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setisDropping(false);
  };

  const handleOnDrop = (e) => {
    e.preventDefault();
    const element_type = e.dataTransfer.getData("element_type");

    if (!element_type) {
      return;
    }

    if (upload_elements.includes(element_type)) {
      setfileUploadSate({ isOpen: true, type: element_type });
      setisDropping(false);
      return;
    }

    addElementToChapter(element_type, chapterIndex);
    setisDropping(false);
  };

  const handleFileUploadSuccess = (asset = {}) => {
    addElementToChapter(asset.element_type, chapterIndex, {
      file_url: asset.file_url,
      asset_id: asset._id,
      asset_userame: asset.user_name,
      asset_is_private: asset.is_private,
    });
  };

  const handleRemove = () => {
    removeChapterByIndex(chapterIndex);
  };

  const handleUploaderClose = () => {
    setfileUploadSate({ isOpen: false, type: null });
  };

  return (
    <Card
      position="relative"
      style={{
        minHeight: HEIGHT,
        width: "100%",
        padding: CARD_PADDDING,
      }}
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}
    >
      <RenderWhen isTrue={chapterIndex !== 0}>
        <MDBox display="flex" justifyContent="flex-end" position="absolute" width="98%">
          <MDButton
            color="primary"
            size="large"
            sx={{ width: "100px", float: "right" }}
            startIcon={<DeleteIcon />}
            onClick={handleRemove}
          >
            {t("commons.remove")}
          </MDButton>
        </MDBox>
      </RenderWhen>
      <MDBox padding={1}>
        <Stack gap={2}>
          {chapterElementsWithoutChapterIndex.map((v, i) => (
            <MDBox width="100%" key={v.element_id}>
              <Element {...v} chapterIndex={chapterIndex} />
            </MDBox>
          ))}
        </Stack>
      </MDBox>
      <RenderWhen isTrue={isDropping}>
        <MDBox
          onDragLeave={handleDragLeave}
          display={"flex"}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="97%"
          height="95%"
          position="absolute"
          sx={{
            borderRadius: "20px",
            border: "1px dashed #333",
            cursor: "pointer",
          }}
        >
          <Typography>{t("add_course.drag_and_drop_elements_here")}</Typography>
        </MDBox>
      </RenderWhen>
      <FileUploader
        open={fileUploadSate.isOpen}
        type={fileUploadSate.type}
        onClose={handleUploaderClose}
        onSuccess={handleFileUploadSuccess}
      />
    </Card>
  );
};

export default ChapterSection;
