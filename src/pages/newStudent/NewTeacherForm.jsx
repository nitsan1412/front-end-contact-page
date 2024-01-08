import React from "react";
// import { Box, TextField, Typography, Stack } from "@mui/material";
import "./NewStudent.css";
import InputField from "../../components/Forms/InputField";
import SelectField from "../../components/Forms/SelectField";
import strings from "../../helper/hebrew-translation";

export default function NewTeacherForm({ errors, data, setData }) {
  // const [tempData, setTempData] = useState({...data})

  const handleChange = (field, value) => {
    setData({ ...data, [field]: value });
  };

  return (
    <div className="teacher-form">
      <SelectField
        isRequired={true}
        lable={strings.forms.role}
        fieldName="role"
        type="outlined"
        value={data.role || ""}
        handleChange={handleChange}
        errors={errors}
        options={teacherOptions}
      />
      <InputField
        lable={strings.forms.firstName}
        fieldName="firstName"
        type="outlined"
        handleChange={handleChange}
        errors={errors}
        isRequired={true}
        value={data.firstName || ""}
      />
      <InputField
        lable={strings.forms.lastName}
        fieldName="lastName"
        type="outlined"
        handleChange={handleChange}
        errors={errors}
        isRequired={true}
        value={data.lastName || ""}
      />
      <InputField
        lable={strings.forms.phone}
        fieldName="phone"
        type="outlined"
        handleChange={handleChange}
        errors={errors}
        isRequired={true}
        value={data.phone || ""}
      />
      <InputField
        lable={strings.forms.birthdate}
        fieldName="birthdate"
        type="outlined"
        handleChange={handleChange}
        errors={errors}
        isRequired={false}
        value={data.birthdate || ""}
      />
      <InputField
        lable={strings.forms.picture}
        fieldName="picture"
        type="outlined"
        handleChange={handleChange}
        errors={errors}
        isRequired={false}
        value={data.picture || ""}
      />
    </div>
  );
}

const teacherOptions = [
  "teacher",
  "assitant",
  "intern",
  "kindergartenTeacher",
  "replacementKindergartenTeacherFemale",
  "replacementKindergartenTeacherMale",
  "secondAssitant",
  "replacementAssitent",
];
