import * as React from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import localStorage from "libs/localStorage";
import MDTypography from "components/MDTypography";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function WelcomeModal({ open, onClose }) {
  const userData = localStorage.getUser();

  const navigate = useNavigate();

  const handleClose = () => {
    onClose?.();
    navigate("/profile");
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <MDTypography variant="h3" textTransform="capitalize">
            Welcome {userData?.user_name},
          </MDTypography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText variant="h5" id="alert-dialog-slide-description">
            Please fill the profile before we get started with your awesome journey!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Lets Go</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
