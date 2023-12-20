import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import SchoolIcon from "@mui/icons-material/School";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import PageLayout from "examples/LayoutContainers/PageLayout";
import api_urls from "constants/api_urls";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const header_img_url = "/bg.png";

const goToAdmin = () => {
  window.location.href = api_urls.ADMIN_DASH_LOGIN_URL;
};

export default function Home() {
  const navigate = useNavigate();

  const goToTeacher = () => {
    navigate("/authentication/sign-in");
  };

  return (
    <PageLayout>
      <AppBar position="relative">
        <Toolbar>
          <SchoolIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Guru Mantra
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <img src={header_img_url} width="100%" height={300} style={{ objectFit: "cover  " }} />
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Guru Mantra
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Connect with a vibrant community of educators from around the world. Share resources,
              exchange ideas, and collaborate on inspiring projects
            </Typography>
            <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
              <Button variant="contained" sx={{ color: "#fff" }} onClick={goToTeacher}>
                Login As Teacher
              </Button>
              <Button variant="outlined" sx={{ color: "#000" }} onClick={goToAdmin}>
                Login As Admin
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md"></Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Guru Mantra
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          Let us change the world!
        </Typography>
      </Box>
    </PageLayout>
  );
}
