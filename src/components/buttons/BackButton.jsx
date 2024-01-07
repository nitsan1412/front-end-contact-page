import React from "react";
import UTurnRightTwoToneIcon from "@mui/icons-material/UTurnRightTwoTone";
import strings from "../../helper/hebrew-translation";
import "./Buttons.css";

export default function BackButton({ action }) {
  return (
    <div className="back_button" onClick={action}>
      <UTurnRightTwoToneIcon /> {strings.forms.back}
    </div>
  );
}
