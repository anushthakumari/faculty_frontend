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

const Post = ({ post }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMoreClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card key={post.id}>
      <Box sx={{ display: "flex", padding: "10px" }}>
        <Avatar src={post.userAvatar} alt={post.user_name} />
        <Box sx={{ marginLeft: "10px" }}>
          <Typography variant="h6">{post.user_name}</Typography>
          <Typography variant="body2">{formatDate(post.createdAt)}</Typography>
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
      {post.mediaUrl && <CardMedia component={"img"} image={post.mediaUrl} alt={post.caption} />}
      <CardContent>
        <Typography variant="body1">{post.caption}</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <ThumbUpAltIcon />
            </IconButton>
            <Typography variant="body2">{post.likesCount}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <InsertCommentIcon />
            </IconButton>
            <Typography variant="body2">{post.commentsCount}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Post;
