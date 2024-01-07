import React, { useState } from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import strings from "../../helper/hebrew-translation";
import "./NewStudent.css";
import NewStudentStart from "./NewStudentStart";
import NewStudentForm from "./NewStudentForm";
import NewTeacherForm from "./NewTeacherForm";
import NewStudentChecking from "./NewStudentChecking";
import NextButton from "../../components/buttons/NextButton";
import BackButton from "../../components/buttons/BackButton";
import validateForm from "../../helper/validations";

export default function NewStudentLayout() {
  const [member, setMember] = useState(""); // parent/teacher/student
  const [currentPage, setCurrentPage] = useState(1); //start/form/checking
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const checkErrors = async () => {
    const gotErrors = await validateForm(
      member === "teacher" ? newTeacherFields : newStudentFields,
      data
    );
    await setErrors(gotErrors.errors);
    await console.log("errors", gotErrors.errors);
    if (Object.keys(gotErrors.errors).length === 0) {
      setCurrentPage(currentPage + 1);
    }
  };

  const backPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage === 2) {
      checkErrors();
    }
    if (currentPage === 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Stack maxWidth="md" className="new_student_form_container">
      <Typography variant="h3" className="page_header">
        {currentPage === 1
          ? strings.forms.welcomeToContactPage
          : member === "teacher"
          ? strings.forms.helloTeacher
          : member === "parent"
          ? strings.forms.helloParent
          : strings.forms.helloStudent}
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "35ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="new_student_form_box">
          {currentPage === 1 ? (
            <NewStudentStart
              member={member}
              setMember={setMember}
              setCurrentPage={setCurrentPage}
            />
          ) : (
            ""
          )}
          {currentPage === 2 && member === "teacher" ? (
            <NewTeacherForm data={data} setData={setData} errors={errors} />
          ) : currentPage === 2 && member ? (
            <NewStudentForm data={data} setData={setData} errors={errors} />
          ) : (
            ""
          )}
          {currentPage === 3 ? (
            <NewStudentChecking setCurrentPage={setCurrentPage} />
          ) : (
            ""
          )}
        </div>
        <Grid className="next-back-buttons-group">
          {currentPage !== 1 ? <BackButton action={backPage} /> : ""}
          {currentPage !== 3 ? <NextButton action={nextPage} /> : ""}
        </Grid>
      </Box>
    </Stack>
  );
}

const newStudentFields = [
  "firstName",
  "lastName",
  "birthdate",
  "picture",
  "parents",
];
const newTeacherFields = ["role", "firstName", "lastName", "phone"];
