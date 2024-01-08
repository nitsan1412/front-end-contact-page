import React, { useEffect, useState } from "react";
import strings from "../../helper/hebrew-translation";
import { Container, Stack, Typography } from "@mui/material";
export default function NewStudentChecking({ data }) {
  const [fieldsArray, setFieldsArray] = useState([]);

  useEffect(() => {
    showFields();
  }, []);

  const showFields = async () => {
    setFieldsArray(Object.keys(data));
  };

  return (
    <Container className="check-details-container">
      <Typography variant="h4" className="check-details-header">
        {strings.forms.pleaseCheckDetails}
      </Typography>
      <Stack>
        {fieldsArray.length > 0 &&
          fieldsArray.map((field, index) => {
            console.log("field", field);
            return (
              <div key={index} className="data-line-in-checkup">
                {strings.forms[field]} :{" "}
                {field === "role" ? strings.forms[data[field]] : data[field]}
              </div>
            );
          })}
      </Stack>
    </Container>
  );
}
