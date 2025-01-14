import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";

const NavItem = (props) => {
  return (
    <>
      {
        <Link
          to={props.to} // Scroll target ID
          smooth={true} // Enable smooth scrolling
          duration={500} // Animation duration in milliseconds
          offset={-70} // Adjust for fixed Navbar height
          spy={true} // Add active state for the current section
        >
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
        </Link>
      }
      {/* <Button variant="contained" sx={{ color: "white", borderWidth: 3 }}>
        {props.name}
      </Button> */}
    </>
  );
};

export default NavItem;
