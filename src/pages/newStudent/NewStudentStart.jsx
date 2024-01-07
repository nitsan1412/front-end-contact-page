import React from "react";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@mui/material";
import strings from "../../helper/hebrew-translation";

export default function NewStudentStart({ member, setMember }) {
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">
          {strings.forms.areYou}
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={member}
          onChange={(e) => setMember(e.target.value)}
        >
          <FormControlLabel
            value="teacher"
            control={<Radio />}
            label={strings.forms.teacher}
          />
          <FormControlLabel
            value="parent"
            control={<Radio />}
            label={strings.forms.parent}
          />
          <FormControlLabel
            value="student"
            control={<Radio />}
            label={strings.forms.student}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
