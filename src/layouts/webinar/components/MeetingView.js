import React, { useEffect, useMemo, useRef, useState } from "react";
import { MeetingProvider, useMeeting, useParticipant } from "@videosdk.live/react-sdk";
import ReactPlayer from "react-player";

import ParticipantView from "layouts/webinar/components/ParticipantView";

function MeetingView(props) {
  const [joined, setJoined] = useState(null);
  //Get the method which will be used to join the meeting.
  //We will also get the participants list to display all participants
  const { join, participants } = useMeeting({
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

  // ("yhgf-nhbj-fjjf");

  return (
    <div className="container">
      {joined && joined == "JOINED" ? (
        <div>
          {[...participants.keys()].map((participantId) => (
            <ParticipantView participantId={participantId} key={participantId} />
          ))}
        </div>
      ) : joined && joined == "JOINING" ? (
        <p>Joining the meeting...</p>
      ) : (
        <button onClick={joinMeeting}>Join the meeting</button>
      )}
    </div>
  );
}

export default MeetingView;
