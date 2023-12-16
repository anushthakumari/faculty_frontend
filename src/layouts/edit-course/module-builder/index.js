import React from "react";
import { useTranslation } from "react-i18next";

import MDBox from "components/MDBox";

import Stack from "@mui/material/Stack";

import { useModuleBuilderState } from "../ModuleBuilderState.provider";
import ChapterSection from "./ChapterSection";
import MDButton from "components/MDButton";

const ModuleBuilder = () => {
  const { t } = useTranslation();
  const { data, addChapter } = useModuleBuilderState();

  return (
    <MDBox>
      <Stack position="relative" gap={2}>
        {data.map((v, i) => (
          <ChapterSection key={i} chapterIndex={i} />
        ))}
        <MDButton color="primary" size="large" onClick={addChapter}>
          {t("add_course.add_chapter")}
        </MDButton>
      </Stack>
    </MDBox>
  );
};

export default ModuleBuilder;
