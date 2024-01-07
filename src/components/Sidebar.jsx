import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import ExitButton from "./ExitButton/ExitButton";

const Sidebar = ({ open, onClose }) => {
  const sidebarStyles = {
    width: open ? "240px" : "0",
    height: "calc(100vh - 101px - 64px)", // 64px for the header and 64px for the footer
    overflowX: "auto", // Add scrollbar if content exceeds the height
    // position: "fixed",
    top: "70px", // Adjust the top position based on your header height
    right: "0",
    backgroundColor: "#f0f0f0",
    padding: "16px",
    transition: "width 0.5s",
  };
  return (
    <div style={sidebarStyles}>
      <ExitButton onClose={onClose} />
      <List>
        {/* Home */}
        <ListItem component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        {/* Profile */}
        {/* <ListItem component={Link} to="/newPage">
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="newPage" />
        </ListItem> */}

        {/* Settings */}
        <ListItem component={Link} to="/settings">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="pages" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
