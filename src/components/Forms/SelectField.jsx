import React from "react";
import { Select, MenuItem } from "@mui/material";
import strings from "../../helper/hebrew-translation";
export default function SelectField({
  lable,
  fieldName,
  handleChange,
  value,
  isRequired,
  options,
}) {
  return (
    <Select
      //   labelId="demo-simple-select-label"
      //   id="demo-simple-select"
      value={value || ""}
      label={isRequired ? `${lable} *` : lable}
      onChange={(e) => handleChange(fieldName, e.target.value)}
      className={value ? "select-field" : "error-on-select"}
    >
      {options.map((item, index) => {
        return (
          <MenuItem value={item} key={index}>
            {strings.forms[item]}
          </MenuItem>
        );
      })}
    </Select>
  );
}
