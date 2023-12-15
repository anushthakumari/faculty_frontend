import React from "react";
import { useTranslation } from "react-i18next";

import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";

import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import DocumentIcon from "@mui/icons-material/Description";
import DescriptionIcon from "@mui/icons-material/ViewHeadline";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import MDTypography from "components/MDTypography";

import element_types from "constants/element_types";

const items = [
  {
    Icon: OndemandVideoIcon,
    title: "add_course.course_elements.add_video",
    type: element_types.video,
  },
  {
    Icon: TextFieldsIcon,
    title: "add_course.course_elements.add_heading",
    type: element_types.heading,
  },
  {
    Icon: DescriptionIcon,
    title: "add_course.course_elements.add_description",
    type: element_types.desc,
  },
  {
    Icon: DocumentIcon,
    title: "add_course.course_elements.add_doc",
    type: element_types.doc,
  },
  {
    Icon: AudiotrackIcon,
    title: "add_course.course_elements.add_audio",
    type: element_types.audio,
  },
  {
    Icon: ViewInArIcon,
    title: "add_course.course_elements.add_d_model",
    type: element_types.model,
  },
];

const ControlPanel = () => {
  const { t } = useTranslation();

  const handleDragStart = (type, e) => {
    e.dataTransfer.setData("element_type", type);
  };

  return (
    <MDBox padding={1}>
      <MDTypography variant="h5" mb={2}>
        {t("add_course.course_elements.control_panel")}
      </MDTypography>
      <Grid gap={1} container width={"100%"}>
        {items.map((v) => (
          <Grid
            key={v.title}
            xs={12}
            md={5.5}
            draggable
            onDragStart={handleDragStart.bind(this, v.type)}
            flex={1}
            item
          >
            <MDBox
              display={"flex"}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              height="100px"
              width={"100%"}
              flex={1}
              sx={{
                borderRadius: "20px",
                border: "1px solid #d3d3d3",
                cursor: "pointer",
              }}
            >
              <v.Icon />
              <MDTypography variant="body2">{t(v.title)}</MDTypography>
            </MDBox>
          </Grid>
        ))}
      </Grid>
    </MDBox>
  );
};

export default ControlPanel;
