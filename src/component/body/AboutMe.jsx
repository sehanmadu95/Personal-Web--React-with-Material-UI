import { Box, CssBaseline, Divider, Grid, Typography } from "@mui/material";
import React from "react";

const AboutMe = () => {
  return (
    <>
      <CssBaseline></CssBaseline>

      <Grid
        container
        spacing={2}
        sx={{ padding: { xs: 2, sm: 3 } }}
        rowSpacing={5}
      >
        {/* Text Section */}
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent="center" mt={2}>
            <Typography variant="h5" fontWeight="bold">
              ABOUT ME
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              display: "flex",
              justifyContent: "center", // Aligns horizontally

              height: "100%", // Makes the Box take up the full height of the Grid item
            }}
          >
            <Typography
              variant="h6"
              justifyContent="center"
              fontWeight="bold"
              textAlign="justify"
              fontFamily="cursive"
            >
              I am a motivated and results-driven Software Engineer with over
              2.5+ years of experience, specializing in Java, Spring Boot, and
              React. I have a proven track record in designing and maintaining
              high-quality software applications, ensuring backend data
              integrity, and optimizing system performance. My experience spans
              across development, monitoring, issue prevention, and generating
              insightful business reports to support data-driven decisions.
              <br />
              <br />I am passionate about tackling technical challenges and
              constantly striving for excellence in my work. As I continue to
              evolve my skills, I am eager to contribute to innovative projects
              and further expand my expertise in software development.
            </Typography>
          </Box>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: { xs: "350px", sm: "500px" }, // Adjust height for responsiveness
            }}
          >
            <img
              src="circle.png"
              alt="Responsive"
              style={{
                width: "100%", // Make the image fill the width of the container
                height: "100%", // Set height to be 100% to fill the container
                objectFit: "cover", // Ensure the image covers the container
                borderRadius: "8px", // Optional: Add rounded corners to the image
              }}
            />
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ backgroundColor: "black", borderWidth: 2 }} />
    </>
  );
};

export default AboutMe;
