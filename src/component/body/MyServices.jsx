import React from "react";
import ActionAreaCard from "../cards/ActionAreaCard";
import { Box, Grid, Grid2, Typography } from "@mui/material";

const MyServices = () => {
  return (
    <div>
      <Box display="flex" justifyContent="center">
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
            img="/code.png"
            description="Hi, I have much experience about development console and GUI application using below mention languages.Contact me if you need any Help."
          ></ActionAreaCard>
        </Grid>

        <Grid item xs={12} sm={4}>
          <ActionAreaCard
            name="Back-End Developement"
            img="/web.jpg"
            description="Hi, I have much experience about development Web application using below mention languages.Contact me if you need any Help.            "
          ></ActionAreaCard>
        </Grid>

        <Grid item xs={12} sm={4}>
          <ActionAreaCard
            name="Front-end development"
            img="/graphic.png"
            description="Hi, I have much experience about Graphic design.Contact me if you need any Help.                                                        "
          ></ActionAreaCard>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyServices;
