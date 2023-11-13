import React from "react";
// import { useSelector, useDispatch } from "react-redux";

// import contact-logo from "../assets/contact-logo.png";
import strings from "../helper/hebrew-translation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const StyledAppBar = styled(AppBar)({
  backgroundColor: (theme) => theme.palette.primary.light,
});

const StyledLogo = styled("img")({
  marginRight: (theme) => theme.spacing(2),
  width: 40, // Adjust the width as needed
  height: "auto", // Maintain aspect ratio
});

const StyledTypography = styled(Typography)({
  flexGrow: 1,
});

const StyledUsernameTypography = styled(Typography)({
  marginLeft: "auto", // Push the username to the end
});

export default function Header({ user }) {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        {/* Your logo */}
        <StyledLogo src="/path/to/your/logo.png" alt="Logo" />
        <StyledTypography variant="h6">The Contact Page</StyledTypography>
        <StyledUsernameTypography variant="body1">
          {user?.user_name && `${strings.header.welcome} ${user?.user_name}`}
        </StyledUsernameTypography>
      </Toolbar>
    </StyledAppBar>
  );
}
