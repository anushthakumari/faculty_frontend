import React from "react";
import { useTranslation } from "react-i18next";

import MDInput from "components/MDInput";

import {
  useModuleBuilderState,
  useChapterElementKeyValue,
} from "layouts/edit-course/ModuleBuilderState.provider";

const Heading = ({ chapterIndex, element_id, ...rest }) => {
  const { t } = useTranslation();

  const { editChapterElement } = useModuleBuilderState();

  const value = useChapterElementKeyValue(chapterIndex, element_id, "value");

  const onChangeHandler = (e) => {
    editChapterElement(chapterIndex, element_id, "value", e.target.value);
  };

  return (
    <MDInput
      sx={{
        width: "100%",
      }}
      inputProps={{
        style: { fontSize: "16px", fontWeight: "bold" },
      }}
      placeholder={t("add_course.write_heading_here")}
      value={value}
      onChange={onChangeHandler}
      required
    />
  );
};

export default Heading;
