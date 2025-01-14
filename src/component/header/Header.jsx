import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import NavItem from "./NavItem";
import SideDrawer from "./Sidedrawer";

const Header = () => {
  return (
    <>
      <Box display="flex">
        <AppBar component="nav" sx={{ backgroundColor: "#000000" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <SideDrawer>
              <IconButton
                aria-label="open drawer"
                edge="end"
                sx={{
                  display: { sm: "none" },
                  color: "white",
                }}
              >
                <MenuIcon />
              </IconButton>
            </SideDrawer>

            <Typography
              variant="h6"
              fontWeight="bold"
              mr={1}
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{ color: "red", fontSize: 30, fontFamily: "revert" }}
                >
                  SM
                </span>
                <Typography variant="h6" sx={{ marginLeft: 1 }}>
                  portfolio
                </Typography>
              </div>
            </Typography>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" }, // Hide on small screens
                gap: 3, // Space between NavItems
              }}
            >
              <NavItem name="Home" to="home" />
              <NavItem name="About" to="about" />
              <NavItem name="Services" to="myservice" />
              <NavItem name="Skills" to="skills" />
              <NavItem name="Contact" to="contact" />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
