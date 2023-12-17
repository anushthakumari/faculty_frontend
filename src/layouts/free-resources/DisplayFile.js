import React from "react";

const DisplayFile = ({ url, title }) => {
  const fileType = url.split(".").pop();

  if (fileType.startsWith("jpg") || fileType.startsWith("png") || fileType.startsWith("jpeg")) {
    return <img src={url} alt={title} />;
  } else if (fileType.startsWith("mp4") || fileType.startsWith("webm")) {
    return (
      <video controls>
        <source src={url} type={`video/${fileType}`} />
      </video>
    );
  } else if (fileType.startsWith("mp3") || fileType.startsWith("ogg")) {
    return (
      <audio controls>
        <source src={url} type={`audio/${fileType}`} />
      </audio>
    );
  } else {
    return <span>{title}</span>;
  }
};

export default DisplayFile;
