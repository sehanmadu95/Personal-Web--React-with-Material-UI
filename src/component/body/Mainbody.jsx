import { Box, Grid, Toolbar, Typography } from "@mui/material";
import myImage from "/s.jpg"; // Import the image from assets folder
import React from "react";

const Mainbody = () => {
  return (
    <div>
      <Toolbar />
      <Grid container spacing={2} mt={2}>
        {/* Left Grid Item with Text */}
        <Grid item xs={12} sm={6} p={5}>
          <Typography
            variant="body1"
            textAlign="justify"
            sx={{ color: "#fff7f5" }}
          >
            I am a motivated and results-driven Software Engineer with over 2.5+
            years of experience, specializing in Java, Spring Boot, and React. I
            have a proven track record in designing and maintaining high-quality
            software applications, ensuring backend data integrity, and
            optimizing system performance. My experience spans across
            development, monitoring, issue prevention, and generating insightful
            business reports to support data-driven decisions.
            <br />
            <br />I am passionate about tackling technical challenges and
            constantly striving for excellence in my work. As I continue to
            evolve my skills, I am eager to contribute to innovative projects
            and further expand my expertise in software development.
          </Typography>
        </Grid>

        {/* Right Grid Item with Image */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center", // Horizontally center the image
              alignItems: "center", // Vertically center the image
              height: 300, // Set height for the image container
              width: "100%", // Full width of the grid item
            }}
          >
            <Box
              sx={{
                width: 250, // Set the width of the square container
                height: 250, // Set the height of the square container
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden", // Ensure the image doesn't overflow outside the square
                position: "relative",
                transform: "rotate(45deg)", // Rotate the square container
              }}
            >
              {/* Image inside, will not rotate */}
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${myImage})`, // Use the imported image
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transform: "rotate(-45deg)", // Rotate the image in the opposite direction to keep it upright
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Mainbody;
