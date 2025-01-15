import React from "react";
import ActionAreaCard from "../cards/ActionAreaCard";
import { Box, Divider, Grid, Grid2, Typography } from "@mui/material";

const MyServices = () => {
  return (
    <div>
      <Box display="flex" justifyContent="center" id="myservice">
        {" "}
        <Typography
          variant="h5"
          color="white"
          gutterBottom
          fontWeight="bold"
          mt={4}
        >
          {" "}
          My Services
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <ActionAreaCard
            name="Full-Stack Development"
            img="code.png"
            description="Build powerful, scalable applications with a robust Java Spring Boot backend and a modern, dynamic React frontend. Deliver seamless user experiences and high-performance server-side functionality. From design to deployment, we provide end-to-end full-stack development solutions tailored to your needs. Let’s turn your ideas into reality with cutting-edge technology!"
          ></ActionAreaCard>
        </Grid>

        <Grid item xs={12} sm={4}>
          <ActionAreaCard
            name="Back-End Developement"
            img="web.jpg"
            description="Develop secure and scalable REST APIs with Java Spring Boot for seamless backend functionality. Empower your applications with robust data handling, smooth integrations, and high-performance endpoints. Whether it's for web, mobile, or cloud, we deliver backend solutions tailored to your needs. Build the foundation for your success with expert API development!"
          ></ActionAreaCard>
        </Grid>

        <Grid item xs={12} sm={4}>
          <ActionAreaCard
            name="Front-End Development"
            img="graphic.png"
            description="Create stunning, responsive user interfaces with React and modern styling frameworks like Tailwind CSS or Material-UI. Deliver seamless, dynamic experiences that captivate users across devices. From intuitive designs to interactive features, we craft frontends that bring your vision to life. Build user-friendly web applications with cutting-edge technologies!"
          ></ActionAreaCard>
        </Grid>
      </Grid>

      {/* <Divider sx={{ backgroundColor: "black", borderWidth: 2 }} /> */}
    </div>
  );
};

export default MyServices;
