import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import InsertCommentIcon from "@mui/icons-material/InsertComment";

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const Comment = ({ comment }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMoreClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card key={comment.id}>
      <Box sx={{ display: "flex", padding: "10px" }}>
        <Avatar src={comment.userAvatar} alt={comment.user_name} />
        <Box sx={{ marginLeft: "10px" }}>
          <Typography variant="h6">{comment.user_name}</Typography>
          <Typography variant="body2">{formatDate(comment.createdAt)}</Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton onClick={handleMoreClick}>
          <MoreHoriz />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem>Edit</MenuItem>
          <MenuItem>Delete</MenuItem>
          <Divider />
          <MenuItem>Report</MenuItem>
        </Menu>
      </Box>
      <CardContent>
        <Typography variant="body1">{comment.caption}</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
          {/* <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <ThumbUpAltIcon />
            </IconButton>
            <Typography variant="body2">{comment.likesCount}</Typography>
          </Box> */}
          {/* <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <InsertCommentIcon />
            </IconButton>
            <Typography variant="body2">{comment.commentsCount}</Typography>
          </Box> */}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Comment;
