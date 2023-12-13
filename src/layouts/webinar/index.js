import { useTranslation } from "react-i18next";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { MeetingProvider, useMeeting, useParticipant } from "@videosdk.live/react-sdk";
import ReactPlayer from "react-player";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";
import MeetingView from "layouts/webinar/components/MeetingView";

import constants from "constants";
import { createMeeting } from "apis/videosdk.api";

function Overview() {
  const { t, i18n } = useTranslation();

  const [mode, setMode] = useState("host");
  const [isJoinFormOpen, setisJoinFormOpen] = useState(false);
  const [createMeetignModalState, setcreateMeetignModalState] = useState({
    isLoading: false,
    isOpen: false,
  });

  const [step, setstep] = useState(0);
  const [inputText, setinputText] = useState("");

  const [meetingId, setMeetingId] = useState(null);

  //Getting the meeting id by calling the api we just wrote
  const getMeetingAndToken = async (id) => {
    const meetingId = id == null ? await createMeeting({ token: constants.VIDEO_SDK_TOKEN }) : id;
    setMeetingId(meetingId);
    handleCloseCreateMeeting();
  };

  //This will set Meeting Id to null when meeting is left or ended
  const onMeetingLeave = () => {
    setMeetingId(null);
  };

  const handleCloseCreateMeeting = () => {
    setcreateMeetignModalState({
      isLoading: false,
      isOpen: false,
    });
  };

  const handleOpenCreateMeeting = () => {
    getMeetingAndToken();
    setcreateMeetignModalState({
      isLoading: true,
      isOpen: true,
    });
  };

  useEffect(() => {
    // fetchHlsDownstreamUrl({ meetingId: "0g7p-kgnq-spd5" });
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />

      {/* Nothing selected */}
      {!meetingId ? (
        <MDBox
          display="flex"
          gap={3}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <MDBox>
            <center>
              <MDTypography mb={2} textAlign="center" variant="h3">
                {t("webinar.host_webinar_label")}
              </MDTypography>
              <MDButton
                variant="contained"
                onClick={handleOpenCreateMeeting}
                color="primary"
                size="large"
              >
                {t("webinar.host_webinar")}
              </MDButton>
            </center>
          </MDBox>
          <MDBox my={2}>
            <MDTypography mb={2} textAlign="center" variant="h3">
              {t("commons.or")}
            </MDTypography>
          </MDBox>
          <MDBox>
            <center>
              <MDTypography mb={2} textAlign="center" variant="h3">
                {t("webinar.join_webinar_label")}
              </MDTypography>
              <MDButton
                onClick={() => setisJoinFormOpen(true)}
                variant="contained"
                color="primary"
                size="large"
              >
                {t("webinar.join_webinar")}
              </MDButton>
            </center>
          </MDBox>
        </MDBox>
      ) : (
        <MDBox>
          <MeetingProvider
            config={{
              meetingId,
              micEnabled: false,
              webcamEnabled: true,
              name: "C.V. Raman",
            }}
            token={constants.VIDEO_SDK_TOKEN}
            joinWithoutUserInteraction
          >
            <MeetingView meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
          </MeetingProvider>
        </MDBox>
      )}

      {/* join form */}
      <Dialog
        open={isJoinFormOpen}
        onClose={() => setisJoinFormOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <MDTypography>{t("webinar.please_write_meeting_id")}</MDTypography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <MDInput
              name="meeting-id"
              inputProps={{
                style: {
                  width: "300px",
                },
              }}
              value={inputText}
              onChange={(e) => setinputText(e.target.value)}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <MDButton onClick={() => setisJoinFormOpen(false)}>{t("commons.cancel")}</MDButton>
          <MDButton
            autoFocus
            onClick={() => {
              setisJoinFormOpen(false);
              setMeetingId(inputText);
            }}
          >
            {t("webinar.join")}
          </MDButton>
        </DialogActions>
      </Dialog>

      {/* Host loading */}
      <Dialog
        open={createMeetignModalState.isOpen}
        onClose={() => setisJoinFormOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <MDTypography>{t("webinar.please_write_meeting_id")}</MDTypography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {createMeetignModalState.isLoading ? "Loading..." : ""}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <MDButton onClick={handleCloseCreateMeeting}>{t("commons.cancel")}</MDButton>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  );
}

export default Overview;
