import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import RenderWhen from "components/RenderWhen";
import Element from "layouts/create-course/element";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useModuleBuilderState } from "../ModuleBuilderState.provider";

const ChapterSection = ({ chapterIndex = 0 }) => {
  const { t } = useTranslation();
  const [isDropping, setisDropping] = useState(false);
  const { getChapterElementsByIndex, addContent } = useModuleBuilderState();

  const chapterElements = getChapterElementsByIndex(chapterIndex);

  const handleDragOver = (event) => {
    setisDropping(true);
    event.preventDefault();
  };

  const handleDragLeave = () => {
    setisDropping(false);
  };

  const handleOnDrop = (e) => {
    const element_type = e.dataTransfer.getData("element_type");

    if (!element_type) {
      return;
    }

    addContent(element_type);
    setisDropping(false);
  };

  return (
    <MDBox minHeight="70vh" padding={1}>
      <div onDrop={handleOnDrop} onDragLeave={handleDragLeave} onDragOver={handleDragOver}>
        <Stack minHeight={"70vh"} position="relative" gap={2}>
          {chapterElements.map((v, i) => (
            <MDBox width="100%" height="100px" padding={2} key={i}>
              <Element type={v.type} />
            </MDBox>
          ))}
          <RenderWhen isTrue={isDropping}>
            <MDBox
              display={"flex"}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              width="100%"
              height="100%"
              position="absolute"
              sx={{
                borderRadius: "20px",
                border: "1px dashed #333",
                cursor: "pointer",
                minHeight: "60vh",
              }}
            >
              <Typography>{t("add_course.drag_and_drop_elements_here")}</Typography>
            </MDBox>
          </RenderWhen>
        </Stack>
      </div>
    </MDBox>
  );
};

export default ChapterSection;
