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

export default function NewStudentLayout() {
  const [member, setMember] = useState(""); // parent/teacher/student
  const [currentPage, setCurrentPage] = useState(1); //start/form/checking
  const [data, setData] = useState({});

  const backPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== 3) {
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
            <NewTeacherForm data={data} setData={setData} />
          ) : currentPage === 2 && member ? (
            <NewStudentForm data={data} setData={setData} />
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
          {currentPage !== 3 ? <NextButton action={nextPage} /> : ""}
          {currentPage !== 1 ? <BackButton action={backPage} /> : ""}
        </Grid>
      </Box>
    </Stack>
  );
}
