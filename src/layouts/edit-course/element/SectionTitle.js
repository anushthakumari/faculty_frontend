import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

import MDInput from "components/MDInput";

import { useModuleBuilderState } from "layouts/edit-course/ModuleBuilderState.provider";

const SectionTitle = ({ chapterIndex, element_id, ...rest }) => {
  const { t } = useTranslation();

  const { editChapterElement, data } = useModuleBuilderState();

  const value = useMemo(() => {
    //get element
    const chapterElements = data[chapterIndex];
    const elementIndex = chapterElements.findIndex((v) => v.element_id === element_id);

    return chapterElements[elementIndex]["value"];
  }, [chapterIndex, element_id, data]);

  const onChangeHandler = (e) => {
    editChapterElement(chapterIndex, element_id, "value", e.target.value);
  };

  return (
    <MDInput
      sx={{
        width: "70%",
      }}
      inputProps={{
        style: { padding: "15px", fontSize: "20px", fontWeight: "bold" },
      }}
      placeholder={t("add_course.write_chapter_title_here")}
      value={value}
      onChange={onChangeHandler}
      required
    />
  );
};

export default SectionTitle;
