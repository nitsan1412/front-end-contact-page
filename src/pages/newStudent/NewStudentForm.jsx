import React from "react";
import { Box, TextField, Typography, Stack } from "@mui/material";
import "./NewStudent.css";

export default function NewStudentForm({ member }) {
  return (
    <div>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
      />
      <TextField
        id="outlined-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField id="outlined-search" label="Search field" type="search" />
      <TextField
        id="outlined-helperText"
        label="Helper text"
        defaultValue="Default Value"
        // helperText="Some important text"
      />
    </div>
  );
}
