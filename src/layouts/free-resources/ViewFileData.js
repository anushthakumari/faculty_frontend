import React from "react";
import { useTranslation } from "react-i18next";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import MDButton from "components/MDButton";

import element_types from "constants/element_types";

import Image from "layouts/edit-course/element/Image";
import Video from "layouts/edit-course/element/Video";
import Audio from "layouts/edit-course/element/Audio";
import Document from "layouts/edit-course/element/Document";
import Model from "layouts/edit-course/element/Model";

const ELEMENTS = {
  [element_types.image]: Image,
  [element_types.video]: Video,
  [element_types.audio]: Audio,
  [element_types.doc]: Document,
  [element_types.model]: Model,
};

export default function ViewFileData({ open, onClose, title, desc, element_type, ...rest }) {
  const { t } = useTranslation();

  const handleClose = () => {
    onClose?.();
  };

  const Element = ELEMENTS[element_type];

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle textTransform={"capitalize"}>{title}</DialogTitle>
        <DialogContent>
          {Element && <Element {...rest} />}
          <DialogContentText id="alert-dialog-description">{desc}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <MDButton color="primary" onClick={handleClose}>
            {t("commons.close")}
          </MDButton>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
