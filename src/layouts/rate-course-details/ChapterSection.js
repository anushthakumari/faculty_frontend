import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

import RenderWhen from "components/RenderWhen";
import Element from "layouts/edit-course/element";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import element_types from "constants/element_types";

const HEIGHT = "200px";
const CARD_PADDDING = "10px";

const ChapterSection = ({ chapterIndex = 0 }) => {
  const { t } = useTranslation();

  const chapterElements = [];

  const chapterElementsWithoutChapterIndex = chapterElements.filter(
    (v) => v.type !== element_types.index
  );

  return (
    <Card
      position="relative"
      style={{
        minHeight: HEIGHT,
        width: "100%",
        padding: CARD_PADDDING,
      }}
    >
      <MDBox padding={1}>
        <Stack gap={2}>
          {chapterElementsWithoutChapterIndex.map((v, i) => (
            <MDBox width="100%" key={v.element_id}>
              {/* <Element {...v} chapterIndex={chapterIndex} /> */}
              {v.element_type}
            </MDBox>
          ))}
        </Stack>
      </MDBox>
    </Card>
  );
};

export default ChapterSection;
