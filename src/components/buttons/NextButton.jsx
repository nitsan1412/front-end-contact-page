import React from "react";
import KeyboardBackspaceTwoToneIcon from "@mui/icons-material/KeyboardBackspaceTwoTone";
import "./Buttons.css";
import strings from "../../helper/hebrew-translation";

export default function NextButton({ action }) {
  return (
    <div className="next_button" onClick={action}>
      {strings.forms.continue} <KeyboardBackspaceTwoToneIcon />
    </div>
  );
}
