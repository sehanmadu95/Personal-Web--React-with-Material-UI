import React from "react";
import { Box, Typography, Container, Link, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121212", // Dark background color
        color: "white", // White text
        py: 3, // Padding top and bottom

        textAlign: "center", // Center the content horizontally
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" sx={{ mb: 2 }}>
          {"© "}
          <Link color="inherit" href="https://sehanmadu95.github.io/portfolio/">
            Sehan Madushanka
          </Link>{" "}
          | Designed with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          using React & Material UI
        </Typography>

        {/* Social Media Icons */}
        <Box>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/sehan-m-0a2315117/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            color="inherit"
            href="https://www.facebook.com/sehanmadushanka95"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </IconButton>

          <IconButton
            color="inherit"
            href="https://github.com/sehanmadu95"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            color="inherit"
            href="https://wa.me/94776925883"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
