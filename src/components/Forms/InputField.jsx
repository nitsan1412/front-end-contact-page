import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import "./form.css";

export default function InputField({
  lable,
  fieldName,
  type,
  handleChange,
  errors,
  isRequired,
}) {
  const [localErrors, setLocalErrors] = useState(errors[fieldName] || "");

  useEffect(() => {
    setLocalErrors(errors[fieldName] || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  return (
    <TextField
      error={!!localErrors}
      label={lable}
      size="lg"
      onChange={(e) => handleChange(fieldName, e.target.value)}
      required={isRequired}
    />
  );
}
