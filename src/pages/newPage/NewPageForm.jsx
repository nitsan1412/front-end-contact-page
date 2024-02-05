import React, { useEffect, useState } from "react";
// import {
//   Dialog,
//   DialogTitle,
//   Paper,
//   TextField,
//   DialogContent,
//   DialogContentText,
//   DialogActions,
//   Button,
// } from "@mui/material";
import InputField from "../../components/Forms/InputField";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import newPageFormObject from "./formObjectNewPage";
import strings from "../../helper/hebrew-translation";
import SubmitButton from "../../components/buttons/SubmitButton";
import "./newPage.css";

export default function NewPageForm() {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setData({ ...data, [field]: value });
  };

  const submit = () => {
    console.log("data", data);
  };

  return (
    <>
      {" "}
      <Box
        component="form"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {newPageFormObject.map((item, index) => {
          if (item.type === "text" || item.type === "number") {
            return (
              <InputField
                key={index}
                lable={strings.page[item.fieldName]}
                fieldName={item.fieldName}
                type={item.type}
                handleChange={handleChange}
                errors={errors}
                isRequired={item.isRequired}
                value={data[item.fieldName] || ""}
              />
            );
          }
        })}
      </Box>
      <SubmitButton action={submit} />
    </>
  );
}
