import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-scroll"; // Import react-scroll

export default function SideDrawer({ children }) {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const sections = ["home", "about", "myservice", "skills", "contact"]; // Section IDs

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem sx={{ color: "white" }}>Navigations</ListItem>
      </List>
      <Divider sx={{ backgroundColor: "white" }} />
      <List>
        {sections.map((section, index) => (
          <Link
            key={section}
            to={section} // Scroll to the section ID
            smooth={true} // Smooth scrolling effect
            duration={500} // Scroll duration in ms
            offset={-70} // Offset to adjust for fixed elements
          >
            <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
              <ListItemButton sx={{ color: "white" }}>
                <ListItemIcon sx={{ color: "white" }}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={section.toUpperCase()} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>{children}</Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "#212121",
            },
          }}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
