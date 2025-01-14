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
            description="Hi, I have much experience about development console and GUI application using below mention languages.Contact me if you need any Help."
          ></ActionAreaCard>
        </Grid>

        <Grid item xs={12} sm={4}>
          <ActionAreaCard
            name="Back-End Developement"
            img="web.jpg"
            description="Hi, I have much experience about development Web application using below mention languages.Contact me if you need any Help.            "
          ></ActionAreaCard>
        </Grid>

        <Grid item xs={12} sm={4}>
          <ActionAreaCard
            name="Front-End Development"
            img="graphic.png"
            description="Hi, I have much experience about Graphic design.Contact me if you need any Help.                                                        "
          ></ActionAreaCard>
        </Grid>
      </Grid>

      {/* <Divider sx={{ backgroundColor: "black", borderWidth: 2 }} /> */}
    </div>
  );
};

export default MyServices;
