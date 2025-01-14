import { Button, Typography } from "@mui/material";
import React from "react";

const NavItem = (props) => {
  return (
    <>
      {
        <Typography
          variant="button" // Gives a button-like appearance
          fontWeight="bold"
          sx={{
            color: "inherit", // Inherits color from parent (AppBar)
            textDecoration: "none", // Removes underline
            cursor: "pointer", // Indicates clickable
            "&:hover": {
              color: "red", // Changes color on hover
            },
            fontSize: { xs: "14px" },
            fontFamily: "cursive",
          }}
        >
          {props.name}
        </Typography>
      }
      {/* <Button variant="contained" sx={{ color: "white", borderWidth: 3 }}>
        {props.name}
      </Button> */}
    </>
  );
};

export default NavItem;
