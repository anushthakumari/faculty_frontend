import React, { useEffect, useMemo, useRef, useState } from "react";
import { MeetingProvider, useMeeting, useParticipant } from "@videosdk.live/react-sdk";
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";

import ParticipantView from "layouts/webinar/components/ParticipantView";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";
import RenderWhen from "components/RenderWhen";

import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";

function MeetingView(props) {
  const [joined, setJoined] = useState(null);

  const { t } = useTranslation();

  //Get the method which will be used to join the meeting.
  //We will also get the participants list to display all participants
  const {
    join,
    participants,
    meetingId,
    leave,
    end,
    enableWebcam,
    disableWebcam,
    localMicOn,
    localWebcamOn,
    muteMic,
    unmuteMic,
    toggleMic,
    toggleWebcam,
  } = useMeeting({
    //callback for when meeting is joined successfully
    onMeetingJoined: () => {
      setJoined("JOINED");
    },

    onMeetingLeft: () => {
      props.onMeetingLeave();
    },
  });

  const joinMeeting = () => {
    setJoined("JOINING");
    join();
  };

  console.log({ localMicOn, localWebcamOn });

  // ("yhgf-nhbj-fjjf");

  return (
    <div className="container">
      {joined && joined == "JOINED" ? (
        <div>
          <center>
            <MDBox my={3}>
              <MDTypography variant="h4">
                {t("webinar.webinar_id")} {meetingId}
              </MDTypography>
            </MDBox>
            <MDBox mt={2}>
              <MDButton color="primary" onClick={leave} variant="contained">
                {t("webinar.leave_webinar")}
              </MDButton>
            </MDBox>
            <MDBox mb={2}>
              <MDBox padding={3} display="flex" justifyContent="center" alignItems="center" gap={2}>
                {/* mute button */}
                <RenderWhen isTrue={localMicOn}>
                  <MDButton startIcon={<MicOffIcon />} onClick={toggleMic}>
                    {t("webinar.mute_your_mic")}
                  </MDButton>
                </RenderWhen>

                {/* unmute button */}
                <RenderWhen isTrue={!localMicOn}>
                  <MDButton startIcon={<MicIcon />} onClick={toggleMic}>
                    {t("webinar.unmute_your_mic")}
                  </MDButton>
                </RenderWhen>

                {/* close camera button */}
                {/* <RenderWhen isTrue={localWebcamOn === true}>
                  <MDButton startIcon={<VideocamOffIcon />} onClick={toggleWebcam}>
                    {t("webinar.close_your_camera")}
                  </MDButton>
                </RenderWhen> */}

                {/* open camera button */}
                {/* <RenderWhen isTrue={localWebcamOn === false}>
                  <MDButton startIcon={<VideocamOffIcon />} onClick={toggleWebcam}>
                    {t("webinar.open_your_camera")}
                  </MDButton>
                </RenderWhen> */}
              </MDBox>
            </MDBox>
          </center>
          <MDBox display="flex" justifyContent="center" alignItems="center" gap={1} flexWrap="wrap">
            {[...participants.keys()].map((participantId) => (
              <ParticipantView participantId={participantId} key={participantId} />
            ))}
          </MDBox>
        </div>
      ) : joined && joined == "JOINING" ? (
        <center>
          <MDTypography>{t("webinar.joining_webinar")}</MDTypography>
        </center>
      ) : (
        <center>
          <MDBox mt={2}>
            <MDButton onClick={joinMeeting} size="large">
              {t("webinar.join_webinar_btn")}
            </MDButton>
          </MDBox>
        </center>
      )}
    </div>
  );
}

export default MeetingView;
