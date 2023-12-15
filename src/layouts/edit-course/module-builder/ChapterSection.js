import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

import RenderWhen from "components/RenderWhen";
import Element from "layouts/edit-course/element";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

import DeleteIcon from "@mui/icons-material/Delete";

import { useModuleBuilderState } from "../ModuleBuilderState.provider";

const HEIGHT = "200px";
const CARD_PADDDING = "10px";

const ChapterSection = ({ chapterIndex = 0 }) => {
  const { t } = useTranslation();
  const [isDropping, setisDropping] = useState(false);
  const { getChapterElementsByIndex, addElementToChapter, removeChapterByIndex } =
    useModuleBuilderState();

  const chapterElements = getChapterElementsByIndex(chapterIndex);

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

    addElementToChapter(element_type, chapterIndex);
    setisDropping(false);
  };

  const handleRemove = () => {
    removeChapterByIndex(chapterIndex);
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
          {chapterElements.map((v, i) => (
            <MDBox width="100%" key={i}>
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
    </Card>
  );
};

export default ChapterSection;
