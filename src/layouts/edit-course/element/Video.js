import React, { useRef, useEffect, useMemo } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export const Video = (props) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { onReady, file_url } = props;

  const options = useMemo(
    () => ({
      autoplay: false,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src: file_url,
          type: "video/mp4",
        },
      ],
    }),
    [file_url]
  );

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for 18 Strict Mode.
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-layout-small");
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady && onReady(player);
      }));

      player.aspectRatio("3:1");

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;
      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [videoRef, options]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div className="vjs-layout-tiny" data-vjs-player>
      <div className="vjs-layout-tiny" ref={videoRef} />
    </div>
  );
};

export default Video;
