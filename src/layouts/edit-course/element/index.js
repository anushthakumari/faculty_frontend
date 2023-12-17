import React from "react";

import { IconButton, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import element_types from "constants/element_types";

import SectionTitle from "./SectionTitle";
import Heading from "./Heading";
import Description from "./Description";
import Image from "./Image";
import Video from "./Video";
import Audio from "./Audio";
import Document from "./Document";
import Model from "./Model";

import { useModuleBuilderState } from "layouts/edit-course/ModuleBuilderState.provider";

import resourcesAPIs from "apis/resources.apis";

const ELEMENTS = {
  [element_types.section_title]: SectionTitle,
  [element_types.heading]: Heading,
  [element_types.desc]: Description,
  [element_types.image]: Image,
  [element_types.video]: Video,
  [element_types.audio]: Audio,
  [element_types.doc]: Document,
  [element_types.model]: Model,
};

const Index = ({ type, ...rest }) => {
  const Element = ELEMENTS[type];

  const { removeChapterElementByElementID } = useModuleBuilderState();

  const handleDelete = () => {
    removeChapterElementByElementID(rest.chapterIndex, rest.element_id);
    if (rest.asset_id && rest.asset_is_private) {
      resourcesAPIs
        .delete_res(rest.asset_id)
        .then()
        .catch(() => {
          console.log("cannot delete assest!", e);
        });
    }
  };

  if (!Element) {
    return <p>{type}</p>;
  }

  return (
    <Grid gap={1} container>
      <Grid xs={0.5} md={0.5} item>
        <IconButton
          sx={{
            padding: "8px",
            backgroundColor: "#d3d3d3",
            zIndex: 2,
            color: "red",
            borderRadius: "50%",
          }}
          onClick={handleDelete}
        >
          <DeleteIcon />
        </IconButton>
      </Grid>
      <Grid xs={11} md={11} item>
        <Element {...rest} />
      </Grid>
    </Grid>
  );
};

export default Index;
