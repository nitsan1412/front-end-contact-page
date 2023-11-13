import React from "react";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const StyledFooter = styled("footer")({
  marginTop: "auto",
  backgroundColor: (theme) => theme.palette.primary.main,
  color: (theme) => theme.palette.primary.contrastText,
  padding: (theme) => theme.spacing(2),
  textAlign: "center",
});

const Footer = () => {
  return (
    <StyledFooter>
      <Typography variant="body2">
        © The Contact Page {new Date().getFullYear()}. All rights reserved.
      </Typography>
      <Typography variant="body2">
        Made with ❤️ by Nitsan Stark Levit
      </Typography>
      <Link
        href="/privacy-policy"
        color="inherit"
        variant="body2"
        style={{ marginLeft: 8 }}
      >
        Privacy Policy
      </Link>
    </StyledFooter>
  );
};

export default Footer;
