import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

const Sidebar = ({ open, onClose }) => {
  const sidebarStyles = {
    width: open ? "240px" : "0",
    height: "calc(100vh - 64px - 64px)", // 64px for the header and 64px for the footer
    overflowY: "auto", // Add scrollbar if content exceeds the height
    position: "fixed",
    top: "64px", // Adjust the top position based on your header height
    right: "0",
    backgroundColor: "#f0f0f0",
    padding: "16px",
    transition: "width 0.5s",
  };
  return (
    <div style={sidebarStyles}>
      <List>
        {/* Home */}
        <ListItem component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        {/* Profile */}
        <ListItem component={Link} to="/profile">
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>

        {/* Settings */}
        <ListItem component={Link} to="/settings">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
