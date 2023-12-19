import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const CameraCapture = ({ isOpen, onCapture }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    // Set canvas dimensions to match the video stream
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current video frame onto the canvas
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert canvas content to a data URL representing the image
    const imageDataURL = canvas.toDataURL("image/png");

    // Update state with the captured image
    setCapturedImage(imageDataURL);

    canvas.toBlob((blob) => {
      const file = new File([blob], "captured_photo.png", { type: "image/png" });
      stopCamera();
      onCapture?.(file);
    }, "image/png");
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach((track) => {
      track.stop();
    });
  };

  return (
    <div>
      <Box mb={3} width={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Button variant="contained" sx={{ color: "#fff" }} onClick={startCamera}>
          Start Camera
        </Button>
      </Box>

      <Box mb={3} width={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          style={{ maxWidth: "100%", maxHeight: "300px" }}
        />
      </Box>
      <Box width={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Button variant="contained" sx={{ color: "#fff" }} onClick={capturePhoto}>
          Capture Photo
        </Button>
      </Box>
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
};

export default CameraCapture;
