import React from "react";
import { useTranslation } from "react-i18next";

import MDInput from "components/MDInput";

const SectionTitle = () => {
  const { t } = useTranslation();

  return (
    <MDInput
      sx={{
        width: "70%",
      }}
      inputProps={{
        style: { padding: "15px", fontSize: "20px", fontWeight: "bold" },
      }}
      placeholder={t("add_course.write_chapter_title_here")}
      required
    />
  );
};

export default SectionTitle;
