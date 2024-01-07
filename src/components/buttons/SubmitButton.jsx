import React from "react";
// import UTurnRightTwoToneIcon from "@mui/icons-material/UTurnRightTwoTone";
import strings from "../../helper/hebrew-translation";
import "./Buttons.css";

export default function SubmitButton({ action }) {
  return (
    <div className="back_button" onClick={action}>
      {strings.forms.submit}
    </div>
  );
}
