import { Box, Button, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import DownloadIcon from "@mui/icons-material/Download";

const BodyFrame = () => {
  return (
    <div>
      <Toolbar />
      <Box
        sx={{
          width: "100%", // Full width of the container
          height: "auto", // Maintain aspect ratio
          position: "relative", // Make the container a positioned element
          overflow: "hidden", // Prevent overflow
        }}
      >
        {/* Background Color */}
        <Box
          sx={{
            position: "absolute", // Position it absolutely within the parent
            top: 0,
            left: 0,
            width: "100%", // Cover the entire container
            height: "100%", // Cover the entire container
            backgroundColor: "rgba(0, 0, 0, 0.9)", // Black background with 50% opacity
            zIndex: 1, // Place it above the image
          }}
        />

        {/* Image */}
        <img
          src="/frame.JPG"
          alt="Responsive"
          style={{
            width: "100%", // Make the image fill the width of the container
            height: "auto", // Maintain the image's aspect ratio
            objectFit: "cover", // Ensure the image covers the container
            position: "relative", // Keep the image below the overlay
            zIndex: 0, // Place it behind the background overlay
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: "50%", // Center vertically
            left: "50%", // Center horizontally
            transform: "translate(-50%, -50%)", // Center the content perfectly
            color: "white", // White text color
            zIndex: 2, // Place it above the background and image
            textAlign: "center", // Center text horizontally
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: "4vw", // Responsive font size based on viewport width
              fontFamily: "fantasy",
              letterSpacing: 4,
            }}
          >
            I am <span style={{ color: "red", fontSize: "5vw" }}>S</span>ehan{" "}
            <span style={{ color: "red", fontSize: "5vw" }}>M</span>adushanka
          </Typography>
          <div>
            <Typography
              variant="h5"
              mt={2}
              fontWeight="bold"
              gutterBottom
              sx={{
                fontSize: "2vw", // Adjust this as needed
                fontFamily: "cursive",
              }}
            >
              <Typewriter
                words={[
                  "Software Engineer...",
                  "Full-Stack Developer..",
                  "Java / Spring Boot Developer...",
                  "React Front-end Developer...",
                  "Cloud Enthusiast...",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={90}
                delaySpeed={1000}
              />
            </Typography>

            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              sx={{
                backgroundColor: "black",
                color: "white",
                border: "2px solid red",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "red",
                },
                padding: "10px 20px",
                marginTop: "15px",
                fontFamily: "revert",
                fontWeight: "bold",
              }}
            >
              Download Resume
            </Button>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default BodyFrame;
