import React from "react";
import { Badge, Typography } from "@mui/material";

import badges from "constants/badges";
import { useTranslation } from "react-i18next";

// Define your color scheme as an object with badge level as key and color as value
const COLOR_SCHEME = {
  acharya: "#38A3A5", // Green
  upadhyaya: "#4285F4", // Blue
  acharyottama: "#9B59B6", // Purple
};

const TeacherBadge = ({ teacherLevel, size = "lg" }) => {
  const badgeText = badges[teacherLevel];

  const { t } = useTranslation();

  if (!badgeText) {
    return null;
  }

  const badgeColor = COLOR_SCHEME[teacherLevel];

  return (
    <Badge
      sx={{
        bgcolor: badgeColor,
        padding: "8px",
        borderRadius: "8px",
        textTransform: "capitalize",
        color: "#fff",
      }}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      overlap="circular"
    >
      <Typography fontWeight={"bold"} fontSize={size === "lg" ? "20px" : "10px"} variant="caption">
        {t("badges." + badgeText)}
      </Typography>
    </Badge>
  );
};

export default TeacherBadge;
