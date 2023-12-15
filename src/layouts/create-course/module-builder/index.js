import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";

import { useModuleBuilderState } from "../ModuleBuilderState.provider";
import ChapterSection from "./ChapterSection";
import MDButton from "components/MDButton";

const HEIGHT = "70vh";
const CARD_PADDDING = "10px";

const ModuleBuilder = () => {
  const { t } = useTranslation();
  const { data, addChapter } = useModuleBuilderState();

  return (
    <MDBox padding={3}>
      <Stack minHeight={"70vh"} position="relative" gap={2}>
        {data.map((v, i) => (
          <Card
            key={i}
            style={{
              minHeight: HEIGHT,
              width: "100%",
              padding: CARD_PADDDING,
            }}
          >
            <MDBox width="100%" padding={2}>
              <ChapterSection chapterIndex={i} />
            </MDBox>
          </Card>
        ))}
        <MDButton color="primary" size="large" onClick={addChapter}>
          {t("add_course.add_chapter")}
        </MDButton>
      </Stack>
    </MDBox>
  );
};

export default ModuleBuilder;
