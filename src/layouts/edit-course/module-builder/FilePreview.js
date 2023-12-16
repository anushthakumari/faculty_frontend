import React from "react";
import { CardMedia, CardContent, Typography } from "@mui/material";

const isMediaFile = (fileType) => {
  return ["image", "audio", "video"].includes(fileType.split("/")[0]);
};

const FilePreview = ({ file }) => {
  if (!file) {
    return null;
  }

  const fileType = file.type;
  const fileName = file.name;

  if (isMediaFile(fileType)) {
    return (
      <CardMedia
        sx={{
          height: 140,
          width: 200,
          objectFit: "cover",
        }}
        component={
          fileType.startsWith("image") ? "img" : fileType.startsWith("audio") ? "audio" : "video"
        }
        image={URL.createObjectURL(file)}
        controls={fileType.startsWith("audio") || fileType.startsWith("video")}
      />
    );
  } else {
    return (
      <CardContent>
        <Typography fontWeight={"bold"} variant="body2" color="textSecondary" component="p">
          {fileName}
        </Typography>
      </CardContent>
    );
  }
};

export default FilePreview;
