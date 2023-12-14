import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import RenderWhen from "components/RenderWhen";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useModuleBuilderState } from "../ModuleBuilderState.provider";

const ModuleBuilder = () => {
  const { t } = useTranslation();
  const [isDropping, setisDropping] = useState(false);
  const { data, addContent } = useModuleBuilderState();

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
    <MDBox minHeight="70vh" padding={3}>
      <div onDrop={handleOnDrop} onDragLeave={handleDragLeave} onDragOver={handleDragOver}>
        <Stack minHeight={"70vh"} position="relative" gap={2}>
          <MDTypography variant="h4">Maths Course By Anand!</MDTypography>
          {data.map((v) => (
            <MDBox width="100%" height="100px" padding={2} key={v.type}>
              <Typography>{v.type} element</Typography>
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

export default ModuleBuilder;
